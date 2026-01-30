import { motion } from "framer-motion";
import { Mail, ArrowRight, Shield, Bell, Sparkles, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EmailStepProps {
  name: string;
  email: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onContinue: () => void;
  onBack: () => void;
  isValid: boolean;
  errors?: Record<string, string>;
}

const EmailStep = ({ name, email, onNameChange, onEmailChange, onContinue, onBack, isValid, errors }: EmailStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-[1440px] mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-bold mb-3">
          Almost there!
        </h2>
        <p className="text-muted-foreground text-lg">
          Enter your email to receive your personalized estimate
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${errors?.userName ? 'text-destructive' : 'text-foreground'}`}>
                Your Name <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Input
                  name="userName"
                  autoComplete="name"
                  type="text"
                  value={name}
                  onChange={(e) => onNameChange(e.target.value)}
                  placeholder="John Doe"
                  className={`h-14 pl-5 pr-4 text-lg rounded-xl border-2 transition-colors ${errors?.userName ? 'border-destructive focus:border-destructive shadow-[0_0_15px_-5px_hsl(var(--destructive))]' : 'border-border focus:border-gold'}`}
                />
                {errors?.userName && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-xs font-bold mt-1.5 uppercase tracking-wide"
                  >
                    {errors.userName}
                  </motion.p>
                )}
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${errors?.email ? 'text-destructive' : 'text-foreground'}`}>
                Email Address <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Mail className={`absolute left-4 top-14 sm:top-1/2 sm:-translate-y-1/2 w-5 h-5 transition-colors ${errors?.email ? 'text-destructive/60' : 'text-muted-foreground'}`} style={{ top: '28px' }} />
                <Input
                  name="userEmail"
                  autoComplete="email"
                  type="email"
                  value={email}
                  onChange={(e) => onEmailChange(e.target.value)}
                  placeholder="your@email.com"
                  className={`h-14 pl-12 pr-4 text-lg rounded-xl border-2 transition-colors ${errors?.email ? 'border-destructive focus:border-destructive shadow-[0_0_15px_-5px_hsl(var(--destructive))]' : 'border-border focus:border-gold'}`}
                />
                {errors?.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-xs font-bold mt-1.5 uppercase tracking-wide"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>
          </div>

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
              className="rounded-full h-12 px-8 bg-gold hover:opacity-90 transition-opacity shadow-lg"
              style={{ boxShadow: "var(--shadow-button)" }}
            >
              View My Estimate
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </form>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-accent" />
          <span>Secure & Encrypted</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-accent" />
          <span>No Spam, Ever</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Instant Delivery</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmailStep;
