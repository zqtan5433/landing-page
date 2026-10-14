import type { ComponentType } from "react";
import { BakeryTemplate } from "@/templates/bakery/page";
import { CompanyTemplate } from "@/templates/company/page";
import { FitnessTemplate } from "@/templates/fitness/page";
import { SalonTemplate } from "@/templates/salon/page";
import { SaasTemplate } from "@/templates/saas/page";

export const templateViews: Record<string, ComponentType> = {
  saas: SaasTemplate,
  salon: SalonTemplate,
  company: CompanyTemplate,
  bakery: BakeryTemplate,
  fitness: FitnessTemplate,
};
