export type TemplateMeta = {
  slug: string;
  mark: string;
  swatch: string;
  swatchInk: string;
  preview: string;
  tags: { en: string[]; zh: string[] };
  title: { en: string; zh: string };
  description: { en: string; zh: string };
};

export const templates: TemplateMeta[] = [
  {
    slug: "saas",
    mark: "N",
    swatch: "#0B1F1A",
    swatchInk: "#7DFFB3",
    preview:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: { en: ["SaaS", "saas-theme"], zh: ["SaaS", "产品站"] },
    title: { en: "Northloop — SaaS", zh: "Northloop — SaaS 产品站" },
    description: {
      en: "SaaS landing with banner slider, about, product modules, seat calculator, portfolio and contact.",
      zh: "SaaS 落地页：首页轮播、关于、产品模块、席位计算器、案例和联系。",
    },
  },
  {
    slug: "salon",
    mark: "A",
    swatch: "#1C2430",
    swatchInk: "#F4C7D4",
    preview:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    tags: { en: ["Beauty", "salon-theme"], zh: ["美容", "沙龙"] },
    title: { en: "Aurelia — Beauty salon", zh: "Aurelia — 美容院" },
    description: {
      en: "Editorial salon with before/after scrubber, treatment + time booking, and favourite gallery.",
      zh: "美容院模板：前后对比拖动、护理+时段预约、可收藏作品墙。",
    },
  },
  {
    slug: "company",
    mark: "P",
    swatch: "#12324A",
    swatchInk: "#E8EEF2",
    preview:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    tags: { en: ["Business", "sme-theme"], zh: ["企业", "中小企业"] },
    title: { en: "Pinnacle Group — Company", zh: "顶峰集团 — 企业官网" },
    description: {
      en: "Corporate site with panel hero, clickable timeline, accordion services, and filterable portfolio.",
      zh: "企业官网：分栏主视觉、可点时间线、手风琴服务、可筛选案例。",
    },
  },
];

export function getTemplate(slug: string) {
  return templates.find((item) => item.slug === slug);
}
