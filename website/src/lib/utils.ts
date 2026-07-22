import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titleCase(slug: string) {
  return slug
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function domainLabel(domain: string) {
  const map: Record<string, string> = {
    core: "Core Strategy",
    "pm-m": "Product Marketing",
    "demand-gen": "Demand Gen",
    "sales-sdr-ae": "Sales / SDR / AE",
    revops: "RevOps",
    "customer-success": "Customer Success",
    partnerships: "Partnerships",
    "pricing-packaging": "Pricing & Packaging",
    enablement: "Enablement",
    analytics: "Analytics",
    forge: "Skill Forge",
  };
  return map[domain] ?? titleCase(domain);
}
