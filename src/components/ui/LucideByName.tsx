import {
  BellRing, FolderOpen, Quote, Timer, MapPin, ScrollText, FileBadge, ArrowLeftRight, Award, BadgeCheck, Briefcase, Building2, CalendarCheck, CalendarClock, CalendarRange,
  ClipboardCheck, Compass, Factory, FileCheck2, FilePen, FileSignature, FileStack, Globe, GraduationCap,
  Handshake, Headset, HeartHandshake, IdCard, IndianRupee, KeyRound, Landmark, MailCheck, MailWarning,
  MapPinned, MessageSquareText, PenLine, Percent, PiggyBank, Receipt, ReceiptIndianRupee, Rocket, Route,
  Scale, SearchCheck, ShieldCheck, Ship, Stamp, Stethoscope, Store, Tag, TrendingUp, UserCog, UserRound,
  Users, UtensilsCrossed, Wallet, Zap,
  type LucideProps,
} from "lucide-react";

// Explicit map keeps the bundle small (no `import *`) and makes icon names type-checked in data files.
const icons = {
  BellRing, FolderOpen, Quote, Timer, MapPin, ScrollText, FileBadge, ArrowLeftRight, Award, BadgeCheck, Briefcase, Building2, CalendarCheck, CalendarClock, CalendarRange,
  ClipboardCheck, Compass, Factory, FileCheck2, FilePen, FileSignature, FileStack, Globe, GraduationCap,
  Handshake, Headset, HeartHandshake, IdCard, IndianRupee, KeyRound, Landmark, MailCheck, MailWarning,
  MapPinned, MessageSquareText, PenLine, Percent, PiggyBank, Receipt, ReceiptIndianRupee, Rocket, Route,
  Scale, SearchCheck, ShieldCheck, Ship, Stamp, Stethoscope, Store, Tag, TrendingUp, UserCog, UserRound,
  Users, UtensilsCrossed, Wallet, Zap,
};

export type IconName = keyof typeof icons;

export function LucideByName({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = icons[name];
  return <Icon strokeWidth={1.7} aria-hidden {...props} />;
}
