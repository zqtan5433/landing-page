import type { ComponentType } from "react";
import { CompanyTemplate } from "@/templates/company/page";
import { SalonTemplate } from "@/templates/salon/page";
import { SaasTemplate } from "@/templates/saas/page";

export const templateViews: Record<string, ComponentType> = {
  saas: SaasTemplate,
  salon: SalonTemplate,
  company: CompanyTemplate,
};
