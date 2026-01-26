import { Heart, Settings, TrendingUp, Shield, Headphones } from "lucide-react";

interface FeatureIconProps {
  iconType: "heart" | "settings" | "trending" | "shield" | "headphones";
}

const FeatureIcon = ({ iconType }: FeatureIconProps) => {
  const iconMap = {
    heart: Heart,
    settings: Settings,
    trending: TrendingUp,
    shield: Shield,
    headphones: Headphones,
  };

  const Icon = iconMap[iconType];

  return (
    <div className="">
      <Icon className="w-12 h-12 text-gold" strokeWidth={1}  />
    </div>
  );
};

export default FeatureIcon;
