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
}: EstimateSummaryProps) => {
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
        </div>

        {/* Services List Removed as per request */}
        <div className="bg-muted/30 p-8">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-bold">
              Total Estimate
            </span>
            <span className="font-display text-3xl font-bold text-primary">
              {currency}
              {totalCost.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="px-6 py-4 bg-muted/20 text-center">
          <p className="text-xs text-muted-foreground">
            This is an estimate. Final costs may vary based on actual work
            duration.
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
