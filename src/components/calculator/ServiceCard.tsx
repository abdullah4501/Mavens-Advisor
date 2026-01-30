import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

interface ServiceCardProps {
  id: string;
  name: string;
  minutesPerJob: number;
  isSelected: boolean;
  onToggle: (id: string, checked: boolean) => void;
  index: number;
}

const ServiceCard = ({ id, name, minutesPerJob, isSelected, onToggle, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      onClick={() => onToggle(id, !isSelected)}
      className={`
        group relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden
        ${isSelected
          ? "border-primary bg-primary text-primary-foreground shadow-lg"
          : "border-transparent bg-card hover:border-primary/30 hover:shadow-md"
        }
      `}
      style={{
        boxShadow: isSelected ? "var(--shadow-button)" : "var(--shadow-card)",
      }}
    >
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-display font-semibold text-base leading-tight mb-2">
            {name}
          </h4>
        </div>
        <div
          className={`
            shrink-0 w-6 h-6 rounded-lg flex items-center justify-center border-2 transition-all duration-200
            ${isSelected
              ? "border-primary-foreground bg-primary-foreground text-primary"
              : "border-muted-foreground/30 group-hover:border-primary/50"
            }
          `}
        >
          {isSelected && <Check className="w-4 h-4" strokeWidth={3} />}
        </div>
      </div>

      {/* Decorative gradient */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 gradient-primary opacity-100"
          style={{ zIndex: 0 }}
        />
      )}
    </motion.div>
  );
};

export default ServiceCard;
