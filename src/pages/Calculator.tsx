import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSettings } from "@/context/SettingsContext";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import {
  Calculator as CalcIcon,
  Settings,
  ChevronLeft,
  ArrowRight,
  Layers,
  Hash,
  Mail,
  Receipt,
  Home,
} from "lucide-react";
import StepIndicator from "@/components/calculator/StepIndicator";
import ServiceCard from "@/components/calculator/ServiceCard";
import QuantityInput from "@/components/calculator/QuantityInput";
import EmailStep from "@/components/calculator/EmailStep";
import EstimateSummary from "@/components/calculator/EstimateSummary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { toast } from "sonner";

const STEPS = [
  { label: "Services", icon: <Layers className="w-5 h-5" /> },
  { label: "Details", icon: <Hash className="w-5 h-5" /> },
  { label: "Contact", icon: <Mail className="w-5 h-5" /> },
  { label: "Summary", icon: <Receipt className="w-5 h-5" /> },
];

const Calculator = ({ breadcrumb }) => {
  const { settings } = useSettings();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedServices, setSelectedServices] = useState<
    Record<string, boolean>
  >({});
  const [quantities, setQuantities] = useState<Record<string, string>>({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceFrequencies, setServiceFrequencies] = useState<Record<string, string>>({});

  // Get initial step from URL or default to 1
  const initialStep = parseInt(searchParams.get("step") || "1");
  const [step, setStepState] = useState(initialStep);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state with URL search parameters
  const setStep = (newStep: number, options?: { replace?: boolean }) => {
    setStepState(newStep);
    setSearchParams({ step: newStep.toString() }, { replace: options?.replace });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const urlStep = parseInt(searchParams.get("step") || "1");
    if (urlStep !== step) {
      setStepState(urlStep);
    }
  }, [searchParams]);

  // Initialize from localStorage
  useEffect(() => {
    const savedSelections = localStorage.getItem("calculatorSelections");
    if (savedSelections) {
      try {
        const {
          hourly,
          quantities: savedQuantities,
          userName: savedName,
          email: savedEmail,
          payrollFrequencies: savedFrequencies,
        } = JSON.parse(savedSelections);
        setSelectedServices(hourly || {});
        setQuantities(savedQuantities || {});
        if (savedName) setUserName(savedName);
        if (savedEmail) setEmail(savedEmail);
        if (savedFrequencies) setServiceFrequencies(savedFrequencies);
      } catch (e) {
        console.error("Error loading saved selections:", e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "calculatorSelections",
      JSON.stringify({
        hourly: selectedServices,
        quantities,
        userName,
        email,
        payrollFrequencies: serviceFrequencies,
      }),
    );
  }, [selectedServices, quantities, userName, email, serviceFrequencies]);

  const calculations = useMemo(() => {
    let totalMinutes = 0;
    let fixedCosts = 0;
    const serviceCosts: Record<
      string,
      { minutes: number; cost: number; quantity: number }
    > = {};

    settings.services.forEach((service) => {
      if (selectedServices[service.id]) {
        const qty = parseFloat(quantities[service.id] || "0") || 0;

        // Frequency multiplier for payroll and contractor payments
        let frequencyMultiplier = 1;
        const nameLower = service.name.toLowerCase();
        if (nameLower.includes("payroll") || nameLower.includes("contractor")) {
          const freq = serviceFrequencies[service.id] || "Monthly";
          if (freq === "Weekly") frequencyMultiplier = 4;
          else if (freq === "Bi-Monthly") frequencyMultiplier = 2;
        }

        const serviceMinutes = qty * service.minutesPerJob * frequencyMultiplier;
        const serviceCost = (serviceMinutes / 60) * settings.hourlyRate;
        totalMinutes += serviceMinutes;
        serviceCosts[service.id] = {
          minutes: serviceMinutes,
          cost: serviceCost,
          quantity: qty,
        };
      }
    });

    settings.fixedPriceServices.forEach((service) => {
      if (selectedServices[service.id]) {
        fixedCosts += service.price;
        serviceCosts[service.id] = {
          minutes: 0,
          cost: service.price,
          quantity: 1,
        };
      }
    });

    const activeServices = [
      ...settings.services.filter(
        (s) => selectedServices[s.id] && (parseFloat(quantities[s.id]) || 0) > 0,
      ),
      ...settings.fixedPriceServices.filter((s) => selectedServices[s.id]),
    ];

    const totalHours = totalMinutes / 60;
    const totalCost = totalHours * settings.hourlyRate + fixedCosts;

    return { totalMinutes, totalHours, totalCost, serviceCosts, activeServices };
  }, [selectedServices, quantities, settings, serviceFrequencies]);

  const handleServiceToggle = (id: string, checked: boolean) => {
    setSelectedServices((p) => {
      const newState = { ...p, [id]: checked };

      // If unselecting Monthly Bookkeeping, also unselect P&L services
      const service = settings.services.find(s => s.id === id);
      if (service?.name.toLowerCase().includes("bookkeeping") && !checked) {
        settings.fixedPriceServices.forEach(s => {
          if (s.name.toLowerCase().includes("profit and loss") || s.name.toLowerCase().includes("p&l")) {
            newState[s.id] = false;
          }
        });
      }
      return newState;
    });

    if (checked) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.services;
        return newErrors;
      });
    }
  };

  const handleQuantityChange = (id: string, val: string) => {
    if (val === "" || /^\d*$/.test(val)) {
      setQuantities((p) => {
        const newQuantities = { ...p, [id]: val };

        const invoicingService = settings.services.find(s => s.name.toLowerCase().includes("invoic"));
        const receivablesService = settings.services.find(s => s.name.toLowerCase().includes("receivable"));
        const billingService = settings.services.find(s => s.name.toLowerCase().includes("bill"));
        const payablesService = settings.services.find(s => s.name.toLowerCase().includes("payable"));

        // Sync Receivables if Invoicing is changed
        if (invoicingService && id === invoicingService.id && receivablesService && selectedServices[receivablesService.id]) {
          newQuantities[receivablesService.id] = val;
        }
        // Sync Invoicing if Receivables is changed (if visible)
        if (receivablesService && id === receivablesService.id && invoicingService && selectedServices[invoicingService.id]) {
          newQuantities[invoicingService.id] = val;
        }

        // Sync Payables if Billing is changed
        if (billingService && id === billingService.id && payablesService && selectedServices[payablesService.id]) {
          newQuantities[payablesService.id] = val;
        }
        // Sync Billing if Payables is changed (if visible)
        if (payablesService && id === payablesService.id && billingService && selectedServices[billingService.id]) {
          newQuantities[billingService.id] = val;
        }

        return newQuantities;
      });

      if (val !== "" && parseInt(val) > 0) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[id];
          // Also clear errors for synced services
          if (id === "4") delete newErrors["7"];
          if (id === "5") delete newErrors["6"];
          return newErrors;
        });
      }
    }
  };

  const handleFrequencyChange = (id: string, freq: string) => {
    setServiceFrequencies((p) => ({ ...p, [id]: freq }));
  };

  const totalSelectedServices = Object.values(selectedServices).filter(
    (v) => v,
  ).length;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isEmailValid && userName.trim().length > 1;

  const handleNext = async () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (totalSelectedServices > 0) {
        setErrors({});

        // Pre-sync quantities before moving to details step
        setQuantities(prev => {
          const next = { ...prev };
          const inv = settings.services.find(s => s.name.toLowerCase().includes("invoic"));
          const rec = settings.services.find(s => s.name.toLowerCase().includes("receivable"));
          const bill = settings.services.find(s => s.name.toLowerCase().includes("bill"));
          const pay = settings.services.find(s => s.name.toLowerCase().includes("payable"));

          if (inv && rec && selectedServices[inv.id] && selectedServices[rec.id]) next[rec.id] = next[inv.id] || "";
          if (bill && pay && selectedServices[bill.id] && selectedServices[pay.id]) next[pay.id] = next[bill.id] || "";
          return next;
        });

        const hasHourlyServices = settings.services.some(
          (s) => selectedServices[s.id],
        );
        if (hasHourlyServices) {
          setStep(2);
        } else {
          setStep(3);
        }
      } else {
        setErrors({ services: "Please select at least one service to continue." });
      }
    } else if (step === 2) {
      settings.services.forEach((s) => {
        if (selectedServices[s.id] && (parseFloat(quantities[s.id]) || 0) <= 0) {
          newErrors[s.id] = ` required`;
        }
      });

      if (Object.keys(newErrors).length === 0) {
        setErrors({});
        setStep(3);
      } else {
        setErrors(newErrors);
      }
    } else if (step === 3) {
      if (!userName.trim()) {
        newErrors.userName = "Name is required";
      }
      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else if (!isEmailValid) {
        newErrors.email = "Invalid email address";
      }

      if (Object.keys(newErrors).length === 0) {
        setErrors({});

        // Save to Database
        setIsSubmitting(true);
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/';
        const payload = {
          userName,
          email,
          services: calculations.activeServices.map(s => ({
            id: s.id,
            name: s.name,
            quantity: calculations.serviceCosts[s.id]?.quantity || 1,
            frequency: serviceFrequencies[s.id] || ((s.name.toLowerCase().includes("payroll") || s.name.toLowerCase().includes("contractor")) ? "Monthly" : undefined),
            cost: calculations.serviceCosts[s.id]?.cost || 0
          })),
          totalCost: calculations.totalCost,
          totalHours: calculations.totalHours,
          currency: settings.currency
        };

        try {
          const response = await fetch(`${baseUrl.replace(/\/$/, '')}/api/estimates/save`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'Failed to save estimate');
          }

          toast.success("Estimate saved successfully!");
          setStep(4);
        } catch (error) {
          console.error("Error saving estimate:", error);
          toast.error("Could not save estimate to the database, but you can still view it.");
          // Still proceed to results so user isn't stuck
          setStep(4);
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setErrors(newErrors);
      }
    }
  };

  const handleBack = () => {
    if (step === 3) {
      const hasHourlyServices = settings.services.some(
        (s) => selectedServices[s.id],
      );
      if (!hasHourlyServices) {
        setStep(1, { replace: true });
        return;
      }
    }
    if (step > 1) setStep(step - 1, { replace: true });
  };

  const handleReset = () => {
    setStep(1, { replace: true });
    setSelectedServices({});
    setQuantities({});
    setUserName("");
    setEmail("");
  };

  return (
    <div>


      <div className="bg-background">
        {/* Background decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1440px] min-h-[95vh] mx-auto px-4 sm:px-6 py-20">

          {/* Step Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-10 flex justify-center items-center flex-col sm:flex-row gap-5 sm:gap-0"
          >
            <Link to={'/'} className="mr-auto p-3 bg-[#e6e7e9] rounded-lg" title="Home">
              <Home className="w-6 h-6" />
            </Link>
            <StepIndicator currentStep={step} totalSteps={4} steps={STEPS} />
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                    Choose Your Services
                  </h2>
                  <p className="text-muted-foreground">
                    Select the services you need for your project
                  </p>
                  {errors.services && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive font-medium mt-2"
                    >
                      {errors.services}
                    </motion.p>
                  )}
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${errors.services ? 'p-2 rounded-2xl border-2 border-destructive/20 bg-destructive/5' : ''}`}>
                  {settings.services.map((service, idx) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      name={service.name}
                      minutesPerJob={service.minutesPerJob}
                      isSelected={selectedServices[service.id] || false}
                      onToggle={handleServiceToggle}
                      index={idx}
                    />
                  ))}
                  {settings.fixedPriceServices
                    .filter(service => {
                      const isPnL = service.name.toLowerCase().includes("profit and loss") || service.name.toLowerCase().includes("p&l");
                      if (isPnL) {
                        const bookkeeping = settings.services.find(s => s.name.toLowerCase().includes("bookkeeping"));
                        return bookkeeping && selectedServices[bookkeeping.id];
                      }
                      return true;
                    })
                    .map((service, idx) => (
                      <ServiceCard
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        minutesPerJob={0}
                        isSelected={selectedServices[service.id] || false}
                        onToggle={handleServiceToggle}
                        index={settings.services.length + idx}
                      />
                    ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Quantities */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                    Details
                  </h2>
                  <p className="text-muted-foreground">
                    Specify the quantity for each selected service
                  </p>
                </div>

                {totalSelectedServices === 0 ? (
                  <div className="text-center py-16 bg-card rounded-3xl border border-dashed border-border">
                    <p className="text-muted-foreground mb-4">
                      No services selected.
                    </p>
                    <Button variant="link" onClick={() => setStep(1, { replace: true })}>
                      Go back to select services
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {settings.services
                      .filter((s) => {
                        if (!selectedServices[s.id]) return false;

                        const inv = settings.services.find(s => s.name.toLowerCase().includes("invoic"));
                        const rec = settings.services.find(s => s.name.toLowerCase().includes("receivable"));
                        const bill = settings.services.find(s => s.name.toLowerCase().includes("bill"));
                        const pay = settings.services.find(s => s.name.toLowerCase().includes("payable"));

                        // Hide if synced with a primary service that is also selected
                        if (rec && s.id === rec.id && inv && selectedServices[inv.id]) return false;
                        if (pay && s.id === pay.id && bill && selectedServices[bill.id]) return false;

                        return true;
                      })
                      .map((service, idx) => (
                        <QuantityInput
                          key={service.id}
                          id={service.id}
                          name={service.name}
                          quantity={quantities[service.id] || ""}
                          onQuantityChange={handleQuantityChange}
                          frequency={serviceFrequencies[service.id]}
                          onFrequencyChange={handleFrequencyChange}
                          index={idx}
                          error={errors[service.id]}
                          autoFocus={idx === 0}
                        />
                      ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 3: Email */}
            {step === 3 && (
              <EmailStep
                key="step3"
                name={userName}
                email={email}
                onNameChange={setUserName}
                onEmailChange={setEmail}
                onContinue={handleNext}
                onBack={handleBack}
                isValid={isFormValid}
                errors={errors}
                isSubmitting={isSubmitting}
              />
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <EstimateSummary
                key="step4"
                activeServices={calculations.activeServices}
                serviceCosts={calculations.serviceCosts}
                totalCost={calculations.totalCost}
                totalHours={calculations.totalHours}
                currency={settings.currency}
                onReset={handleReset}
                onBack={handleBack}
                email={email}
              />
            )}
          </AnimatePresence>

          {/* Navigation Bar - Only show for steps 1-3 */}
          {step < 4 && step !== 3 && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="flex mt-5 justify-end bottom-6 left-1/2 -translate-x-1/2 z-50"
            >
              <div className="flex items-center gap-3 p-2 ">
                {step > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="rounded-full w-12 h-12 border border-border"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                )}

                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 bg-gold hover:opacity-90 transition-opacity shadow-lg"
                  style={{ boxShadow: "var(--shadow-button)" }}
                  onClick={handleNext}
                >
                  Next
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Calculator;
