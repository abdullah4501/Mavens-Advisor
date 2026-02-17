import { motion } from "framer-motion";
import { Clock, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyboardEvent } from "react";

interface QuantityInputProps {
  id: string;
  name: string;
  quantity: string;
  onQuantityChange: (id: string, value: string) => void;
  frequency?: string;
  onFrequencyChange?: (id: string, freq: string) => void;
  index: number;
  error?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const QuantityInput = ({
  id,
  name,
  quantity,
  onQuantityChange,
  frequency = "Monthly",
  onFrequencyChange,
  index,
  error,
  autoFocus,
  disabled,
  placeholder,
}: QuantityInputProps) => {
  // Convert service name to a more natural question format
  const getQuestion = (name: string) => {
    let cleanName = name.toLowerCase();

    // Remove prefixes to get the core action/item
    cleanName = cleanName.replace(/^number of\s+/i, '');
    cleanName = cleanName.replace(/^monthly\s+/i, '');
    cleanName = cleanName.replace(/\s+management$/i, '');

    // Transform specific words for better natural language questions
    if (cleanName === "bookkeeping") return "How many monthly transactions do you have?";
    if (cleanName === "invoicing") return "How many monthly invoices do you have?";
    if (cleanName === "billing") return "How many monthly bills do you have?";
    if (cleanName === "payroll") return "How many payroll you have?";

    // Default pluralization for other items
    if (!cleanName.endsWith('s')) {
      cleanName += 's';
    }

    return `How many monthly ${cleanName} do you have?`;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      // Try to find a container - form, or a parent container with data attribute, or document
      const form = e.currentTarget.closest('form');
      const container = e.currentTarget.closest('[data-quantity-form]') || form || document;

      // Get all quantity inputs in the container
      const inputs = Array.from(container.querySelectorAll('input[inputmode="numeric"]:not(:disabled)')) as HTMLInputElement[];
      const currentIndex = inputs.indexOf(e.currentTarget);

      if (currentIndex < inputs.length - 1) {
        // Move to next input
        inputs[currentIndex + 1].focus();
      } else {
        // No more inputs, focus the Next/Submit button
        const buttonContainer = form || e.currentTarget.closest('[data-quantity-form]') || document;
        const nextButton = buttonContainer.querySelector(
          'button[type="submit"], button[data-next-button], button:last-of-type'
        ) as HTMLButtonElement;

        if (nextButton) {
          nextButton.focus();
        }
      }
    }
  };

  const question = getQuestion(name);
  const nameLower = name.toLowerCase();
  const isFrequencyService = nameLower.includes("payroll") || nameLower.includes("contractor");
  const freqTitle = nameLower.includes("payroll") ? "Payroll Frequency" : "Payment Frequency";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group"
    >
      <div className={`flex flex-col gap-4 p-6 bg-card rounded-2xl border transition-all duration-300 ${disabled ? 'opacity-80 bg-muted/20' : ''} ${error ? 'border-destructive shadow-[0_0_15px_-5px_hsl(var(--destructive))]' : 'border-border/60 hover:border-gold/40 hover:shadow-md'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <label
            htmlFor={id}
            className={`font-display font-medium text-lg transition-colors max-w-md leading-snug ${error ? 'text-destructive' : 'text-foreground/80 group-hover:text-foreground'} ${disabled ? 'text-muted-foreground' : ''}`}
          >
            {question}
            {disabled && <span className="block text-xs font-bold text-gold uppercase mt-1 tracking-wider">Synced with {placeholder}</span>}
          </label>

          <div className="relative w-full md:w-[20%]">
            <Input
              autoFocus={autoFocus}
              id={id}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={quantity}
              disabled={disabled}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, '');
                onQuantityChange(id, val);
              }}
              onKeyDown={handleKeyDown}
              className={`w-full h-12 text-center sm:text-right bg-muted/40 font-display font-bold text-xl px-4 rounded-xl transition-all border-2 ${disabled ? 'bg-muted/60 text-muted-foreground border-transparent cursor-not-allowed' : error ? 'border-destructive focus-visible:ring-destructive/20' : 'border-transparent focus-visible:ring-gold/20'}`}
              placeholder={disabled ? quantity : "-"}
            />
          </div>
        </div>

        {isFrequencyService && onFrequencyChange && (
          <div className="flex flex-col gap-3 pt-2">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{freqTitle}</p>
            <div className="flex flex-wrap gap-2">
              {["Weekly", "Bi-Monthly", "Monthly"].map((freq) => (
                <button
                  key={freq}
                  type="button"
                  onClick={() => onFrequencyChange(id, freq)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border-2 ${frequency === freq
                    ? "bg-gold border-gold text-primary-foreground shadow-sm"
                    : "bg-muted/40 border-transparent text-muted-foreground hover:bg-muted/60"
                    }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-destructive text-xs font-bold uppercase tracking-wide mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default QuantityInput;
