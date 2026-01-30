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
}

const EmailStep = ({ name, email, onNameChange, onEmailChange, onContinue, onBack, isValid }: EmailStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onContinue();
    } else {
      if (!name.trim()) {
        toast.error("Please enter your name.");
      } else if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.error("Please enter a valid email address.");
      }
    }
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
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
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
                  className="h-14 pl-5 pr-4 text-lg rounded-xl border-2 border-border focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Email Address <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="userEmail"
                  autoComplete="email"
                  type="email"
                  value={email}
                  onChange={(e) => onEmailChange(e.target.value)}
                  placeholder="your@email.com"
                  className="h-14 pl-12 pr-4 text-lg rounded-xl border-2 border-border focus:border-primary transition-colors"
                />
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
              className="rounded-full h-12 px-8 gradient-primary hover:opacity-90 transition-opacity shadow-lg"
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
