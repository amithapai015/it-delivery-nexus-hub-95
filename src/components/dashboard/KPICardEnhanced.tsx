import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface KPICardEnhancedProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: string;
  iconColor?: string;
}

export const KPICardEnhanced = ({ 
  title, 
  value, 
  subtitle, 
  icon,
  iconColor = "text-blue-600"
}: KPICardEnhancedProps) => {
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-4 text-center transition-all duration-200 hover:shadow-md hover:bg-gray-50/50 cursor-pointer">
      <div className="flex items-center justify-center mb-2">
        <IconComponent className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
      {subtitle && (
        <div className="text-xs text-gray-500">{subtitle}</div>
      )}
    </div>
  );
};