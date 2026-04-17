import {
  Users, Banknote, CalendarDays, Clock4, Cog, Database, Smartphone, UserCircle2,
  FolderOpen, Plug, ShieldCheck, Bell, BarChart3, FileSearch, Boxes, Calculator,
  Landmark, SlidersHorizontal, RefreshCw, FileText, GitBranch, Sparkles, Target,
  Award, Briefcase, GraduationCap, Medal, Heart, Gift, Wallet, Receipt, Factory,
  Radio, ShoppingBag, Stethoscope, Zap, Building2, type LucideIcon,
} from "lucide-react";

const iconRegistry: Record<string, LucideIcon> = {
  Users, Banknote, CalendarDays, Clock4, Cog, Database, Smartphone, UserCircle2,
  FolderOpen, Plug, ShieldCheck, Bell, BarChart3, FileSearch, Boxes, Calculator,
  Landmark, SlidersHorizontal, RefreshCw, FileText, GitBranch, Sparkles, Target,
  Award, Briefcase, GraduationCap, Medal, Heart, Gift, Wallet, Receipt, Factory,
  Radio, ShoppingBag, Stethoscope, Zap, Building2,
};

export function DynamicIcon({
  name,
  className,
  fallback: Fallback = Sparkles,
}: {
  name: string;
  className?: string;
  fallback?: LucideIcon;
}) {
  const Icon = iconRegistry[name] ?? Fallback;
  return <Icon className={className} />;
}
