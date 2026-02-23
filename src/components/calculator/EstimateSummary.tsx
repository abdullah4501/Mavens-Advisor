import { motion } from "framer-motion";
import {
  Receipt,
  Sparkles,
  RotateCcw,
  Clock,
  CheckCircle,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Service } from "@/context/SettingsContext";

interface ServiceCost {
  minutes: number;
  cost: number;
  quantity: number;
}

interface EstimateSummaryProps {
  activeServices: { id: string; name: string }[];
  serviceCosts: Record<string, ServiceCost>;
  totalCost: number;
  totalHours: number;
  currency: string;
  onReset: () => void;
  onBack: () => void;
  email: string;
  accountingSoftware?: string;
  baseCalculatedCost?: number;
}

const EstimateSummary = ({
  activeServices,
  serviceCosts,
  totalCost,
  totalHours,
  currency,
  onReset,
  onBack,
  email,
  accountingSoftware,
  baseCalculatedCost = 0
}: EstimateSummaryProps) => {
  // Calculate adjusted total cost: subtract 0.01 and round to nearest 50
  const calculateAdjustedTotal = (cost: number) => {
    // Subtract 0.01 first
    let adjustedCost = cost - 0.01;
    
    // Round to nearest 50
    const remainder = adjustedCost % 50;
    if (remainder < 25) {
      adjustedCost = adjustedCost - remainder;
    } else {
      adjustedCost = adjustedCost + (50 - remainder);
    }
    
    // Subtract 0.01 again after rounding
    return adjustedCost - 0.01;
  };

  const adjustedTotalCost = calculateAdjustedTotal(totalCost);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-md mx-auto"
    >
      {/* Success Header */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-3xl font-bold mb-2">
          Your Estimate is Ready!
        </h2>
        <p className="text-muted-foreground">
          A copy will be sent to{" "}
          <span className="font-medium text-foreground">{email}</span>
        </p>
      </motion.div>

      {/* Estimate Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* Header */}
        <div className="bg-gold p-6 text-center">
          <Receipt className="w-8 h-8 mx-auto mb-2 text-primary-foreground/80" />
          <h3 className="font-display text-xl font-bold text-primary-foreground">
            Service Estimate
          </h3>
          <p className="text-primary-foreground/70 text-sm">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {accountingSoftware && (
            <div className="mt-2 inline-block px-3 py-1 bg-primary-foreground/10 rounded-full text-xs text-primary-foreground/90 font-medium">
              Software: {accountingSoftware}
            </div>
          )}
        </div>

        {/* Services List Breakup */}
        <div className="p-6 max-h-[300px] overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gold rounded-full" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Investment Breakup
            </h4>
          </div>
          <div className="space-y-4">
            {activeServices.map((service) => {
              const cost = serviceCosts[service.id];
              if (!cost) return null;

              return (
                <div key={service.id} className="flex justify-between items-start group">
                  <div className="flex flex-col pr-4">
                    <span className="text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </span>
                    {cost.quantity > 0 && (
                      <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                        {(() => {
                          const name = service.name.toLowerCase();

                          // HMRC and Chart of Accounts Setup - show as "1 off"
                          if (name.includes("hmrc") || name.includes("chart of accounts") || name.includes("new books")) {
                            return "1 off";
                          }

                          // VAT - show as "monthly"
                          if (name.includes("vat")) {
                            return "monthly";
                          }

                          // All other services - show as "monthly"
                          return "monthly";
                        })()}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold font-mono text-primary">
                      {currency}{cost.cost.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Minimum Price Adjustment */}
            {baseCalculatedCost > 0 && baseCalculatedCost < 100 && (
              <div className="flex justify-between items-start pt-4 border-t border-border/50 group">
                <div className="flex flex-col pr-4">
                  <span className="text-sm font-display font-semibold text-muted-foreground italic">
                    Minimum Fee Adjustment
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                    Applied to reach monthly minimum
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold font-mono text-muted-foreground italic">
                    {currency}{(100 - baseCalculatedCost).toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-muted/30 p-8">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-bold">
              Total Estimate
            </span>
            <span className="font-display text-3xl font-bold text-primary">
              {currency}
              {adjustedTotalCost.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="px-6 py-4 bg-muted/20 text-center">
          <p className="text-xs text-muted-foreground">
            This is an estimate. Final costs may vary based on actual Business activity.
          </p>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 space-y-3"
      >
        <div className="flex items-center mt-5 gap-4 justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={onBack}
            className=" rounded-full w-12 h-12 border border-border"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            type="submit"
            className="rounded-full p-0 h-14 bg-gold hover:opacity-90 transition-opacity shadow-lg"
            style={{ boxShadow: "var(--shadow-button)" }}
          >
            <a href="https://calendly.com/adeelshaikh/quick-catch-up-with-your-virtual-cfo?month=2026-01"
              className="flex rounded-full items-center h-full px-14  "
              style={{ boxShadow: "var(--shadow-button)" }}
            ><Sparkles className="w-5 h-5 mr-2" /> Lock the Estimate</a>
          </Button>
        </div>
        <div className="mt-10 justify-center items-center flex">
          <Button
            variant="ghost"
            onClick={onReset}
            className="px-12 h-12 text-muted-foreground"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Start Over
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EstimateSummary;
