import type { ModuleDetail } from "@/data/types";

export const mobileedge: ModuleDetail = {
  slug: "mobileedge",
  name: "MobileEdge",
  suite: "platform",
  tagline: "Flutter mobile app",
  description:
    "MobileEdge is the Flexi HRMS mobile application for employees and managers — built in Flutter for iOS and Android, shaped by the reality of Pakistani workforces who don't sit at desks.",
  reality:
    "Your field team is on 3G. Your plant workers don't have laptops. Your warehouse manager opens the HRMS on a six-year-old Android because that's what he owns. MobileEdge is the Flutter mobile app that works on all of it — offline-capable for attendance, fast on low-end devices, and translated into the languages your workforce actually uses.",
  heroBody:
    "A large share of every Pakistani enterprise's workforce works from a plant, a store, a tower site, or a distribution truck. MobileEdge is their first — and often only — interface with HR. Payslips, leave, attendance, claims, recognition, announcements — all in a single app, online and offline.",
  capabilities: [
    { icon: "Smartphone", title: "Native iOS & Android", body: "Flutter build optimised for Pakistani devices and network conditions — works on mid-range phones with intermittent connectivity." },
    { icon: "Clock4", title: "Attendance & geo-punch", body: "Biometric punches, GPS-verified field punches, selfie punches for remote teams — with offline queueing." },
    { icon: "FileText", title: "Payslips & tax certificates", body: "Secure in-app access to current and historical payslips, tax certificates, and salary certificates." },
    { icon: "CalendarDays", title: "Leave & claims on mobile", body: "Apply, approve, and track leave and expense claims without switching to a browser." },
    { icon: "Award", title: "Recognition feed", body: "EngageBoard announcements, CultureCore recognition, team news — delivered with push notifications." },
    { icon: "ShieldCheck", title: "Biometric login", body: "Face ID, fingerprint, and PIN fallback — with device registration, SSO, and remote wipe." },
  ],
  workflow: [
    { title: "Install", description: "Employee installs MobileEdge, authenticates via SSO or one-time passcode, registers the device." },
    { title: "Sync", description: "Core employee data, payslips, leave balances, team roster sync to device with offline cache." },
    { title: "Transact", description: "Punches, leave requests, expense claims, approvals happen in the app — queued offline if needed." },
    { title: "Engage", description: "Push notifications for approvals, announcements, recognition; one-tap actions on each." },
  ],
  integrations: ["peoplehub", "payedge", "timesync", "leaveease", "expensehub", "culturecore", "engageboard", "ess", "notifypro", "systemflex"],
  relatedModules: ["ess", "timesync", "leaveease", "expensehub"],
  seoTitle: "MobileEdge — Flutter HR mobile app | Flexi HRMS",
  seoDescription:
    "Flutter-based mobile app for Pakistani workforces. Attendance, leave, payslips, expense claims, recognition — all in one app, online and offline.",
  seoKeywords: ["HR mobile app Pakistan", "employee mobile app", "Flutter HRMS app", "attendance mobile app", "payslip mobile app"],
};
