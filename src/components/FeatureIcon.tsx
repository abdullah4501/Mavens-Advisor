import { 
  Calculator, 
  Users, 
  Brain, 
  RefreshCw, 
  Eye, 
  Building2, 
  Clock,
  DollarSign,
  LineChart,
  Shield,
  Sparkles,
  Target,
  AlertTriangle
} from "lucide-react";

interface FeatureIconProps {
  iconType: "pricing" | "team" | "ai" | "scale" | "clarity" | "business" | "delay";
}

const FeatureIcon = ({ iconType }: FeatureIconProps) => {
  const iconMap = {
    pricing: DollarSign,      // Predictable Pricing
    team: Users,              // CFO + Complete Finance Team
    ai: Brain,                // AI-Powered Analytics Portal
    scale: RefreshCw,         // This Is Not a Temporary Fix (scalability)
    clarity: Eye,             // Imagine Financial Clarity
    business: Building2,      // Built For Growing Businesses
    delay: AlertTriangle,     // The Cost of Delay
  };

  const Icon = iconMap[iconType];

  return (
    <div className="">
      <Icon className="w-12 h-12 text-gold" strokeWidth={1.5} />
    </div>
  );
};

export default FeatureIcon;
