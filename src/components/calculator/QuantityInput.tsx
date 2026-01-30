import { motion } from "framer-motion";
import { Clock, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QuantityInputProps {
  id: string;
  name: string;
  quantity: string;
  onQuantityChange: (id: string, value: string) => void;
  index: number;
}

const QuantityInput = ({
  id,
  name,
  quantity,
  onQuantityChange,
  index,
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
    if (cleanName === "payroll") return "How many monthly payrolls do you have?";

    // Default pluralization for other items
    if (!cleanName.endsWith('s')) {
      cleanName += 's';
    }

    return `How many monthly ${cleanName} do you have?`;
  };

  const question = getQuestion(name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-card rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-300">
        <label
          htmlFor={id}
          className="font-display font-medium text-lg text-foreground/80 group-hover:text-foreground transition-colors max-w-md leading-snug"
        >
          {question}
        </label>

        <div className="relative">
          <Input
            id={id}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={quantity}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, '');
              onQuantityChange(id, val);
            }}
            className="w-full sm:w-32 h-12 text-center sm:text-right bg-muted/40 border-none focus-visible:ring-2 focus-visible:ring-primary/20 font-display font-bold text-xl px-4 rounded-xl transition-all"
            placeholder="0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default QuantityInput;
