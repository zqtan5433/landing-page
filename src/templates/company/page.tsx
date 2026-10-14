"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ContactPanel } from "@/components/contact-panel";
import { LanguageToggle, ThemeToggle } from "@/components/controls";
import { useCopy } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

const copy = {
  en: {
    brand: "Pinnacle Group",
    cta: "Get a proposal",
    heroKicker: "Malaysia · SME partner",
    heroTitle: "Practical growth for companies that already work hard.",
    heroBody:
      "Switch the panels on the right — each one is a different way we show up for mid-sized teams.",
    panels: [
      {
        label: "Ops",
        title: "Tighten the machine",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
      },
      {
        label: "Brand",
        title: "Look established",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        label: "Partners",
        title: "Win better contracts",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    aboutTitle: "About us",
    aboutBody: "Click a year. The story changes.",
    timeline: [
      {
        year: "2008",
        text: "Started in Johor running shops and small plants of our own.",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
      },
      {
        year: "2015",
        text: "Began helping neighbouring SMEs with operations and tenders.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
      },
      {
        year: "2020",
        text: "Opened KL desk; brand + web became a core offer.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      },
      {
        year: "2026",
        text: "140+ projects across 12 industries in KL, Penang, Johor.",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    productTitle: "Services",
    productBody: "Open one accordion at a time.",
    services: [
      {
        title: "Operations",
        body: "Process mapping, vendor control, and reporting managers will actually use.",
        start: "Week 1 workshop → Week 4 live dashboard",
      },
      {
        title: "Brand & web",
        body: "A company site that explains who you are before the first meeting.",
        start: "Discovery → design → launch in 3–5 weeks",
      },
      {
        title: "Partnerships",
        body: "Introductions, tenders, and regional expansion support.",
        start: "Target list → outreach pack → warm intros",
      },
    ],
    portfolioTitle: "Portfolio",
    portfolioBody: "Filter by type — cards reshuffle live.",
    filters: ["All", "Ops", "Brand", "Partners"],
    projects: [
      {
        title: "Plant ops reset",
        tag: "Ops",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "SME rebrand",
        tag: "Brand",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Tender win pack",
        tag: "Partners",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "HQ website",
        tag: "Brand",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Vendor scorecard",
        tag: "Ops",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Regional intro",
        tag: "Partners",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    contactTitle: "Contact us",
    contactBody: "Leave a brief. We reply on WhatsApp within one business day.",
    nameLabel: "Name / company",
    messageLabel: "Project brief",
    namePh: "e.g. Tristan / Peak Trading",
    messagePh: "e.g. Need a company website + ops dashboard",
    submitLabel: "Send on WhatsApp",
    sideHours: "Mon–Fri · 9:00–18:00",
    sideCity: "KL · Penang · Johor",
    footer: "Pinnacle Group Sdn. Bhd.",
    inquire: 'Hi, I\'m interested in the "Pinnacle Group — Company" website template.',
  },
  zh: {
    brand: "顶峰集团",
    cta: "获取方案",
    heroKicker: "马来西亚 · 中小企业伙伴",
    heroTitle: "给已经很拼的公司，做务实的增长。",
    heroBody: "切换右侧面板——每块都是我们服务中型企业的一种方式。",
    panels: [
      {
        label: "运营",
        title: "把机器调顺",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
      },
      {
        label: "品牌",
        title: "看起来够稳",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        label: "合作",
        title: "拿更好的合同",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    aboutTitle: "关于我们",
    aboutBody: "点选年份，故事会跟着变。",
    timeline: [
      {
        year: "2008",
        text: "在柔佛起步，自己管过店和小型工厂。",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
      },
      {
        year: "2015",
        text: "开始帮邻近中小企业做运营与投标。",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
      },
      {
        year: "2020",
        text: "设立吉隆坡办公室；品牌与网站成为核心服务。",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      },
      {
        year: "2026",
        text: "覆盖 12 个行业、140+ 项目，服务吉隆坡、槟城、柔佛。",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    productTitle: "服务",
    productBody: "一次只展开一项。",
    services: [
      {
        title: "运营",
        body: "流程梳理、供应商管理，以及管理层真的会看的报表。",
        start: "第 1 周工作坊 → 第 4 周上线看板",
      },
      {
        title: "品牌与网站",
        body: "在第一次见面之前，就把公司是谁讲清楚。",
        start: "访谈 → 设计 → 3–5 周上线",
      },
      {
        title: "合作拓展",
        body: "引荐、投标与区域扩张支持。",
        start: "目标清单 → 对外材料 → 暖介绍",
      },
    ],
    portfolioTitle: "案例",
    portfolioBody: "按类型筛选——卡片会即时重排。",
    filters: ["全部", "运营", "品牌", "合作"],
    projects: [
      {
        title: "工厂运营重整",
        tag: "运营",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "中小企业品牌焕新",
        tag: "品牌",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "投标材料包",
        tag: "合作",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "总部官网",
        tag: "品牌",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "供应商记分卡",
        tag: "运营",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "区域引荐",
        tag: "合作",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    contactTitle: "联系我们",
    contactBody: "留下简要需求。我们会在一个工作日内通过 WhatsApp 回复。",
    nameLabel: "姓名 / 公司",
    messageLabel: "项目简述",
    namePh: "例如 Tristan / Peak Trading",
    messagePh: "例如：需要公司官网 + 运营看板",
    submitLabel: "用 WhatsApp 发送",
    sideHours: "周一至周五 · 9:00–18:00",
    sideCity: "吉隆坡 · 槟城 · 柔佛",
    footer: "顶峰集团有限公司",
    inquire: "你好，我对「顶峰集团 — 企业官网」网站模板感兴趣。",
  },
};

export function CompanyTemplate() {
  const t = useCopy(copy);
  const [panel, setPanel] = useState(0);
  const [year, setYear] = useState(3);
  const [open, setOpen] = useState(0);
  const [filter, setFilter] = useState(0);

  const filtered = useMemo(() => {
    const label = t.filters[filter];
    if (filter === 0) return t.projects;
    return t.projects.filter((project) => project.tag === label);
  }, [filter, t.filters, t.projects]);

  return (
    <div className="min-h-screen bg-[#e9eef3] text-[#102536] dark:bg-[#071018] dark:text-[#e8eef2]">
      <header className="border-b border-[#102536]/10 bg-white dark:border-white/10 dark:bg-[#0c1620]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="h-7 w-7 rotate-45 bg-[#2f6f8f]" />
            <span className="text-sm font-semibold tracking-[0.14em] uppercase">
              {t.brand}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle className="border-[#102536]/15 dark:border-white/20" />
            <ThemeToggle className="border-[#102536]/15 dark:border-white/20" />
            <a
              href={whatsappLink(t.inquire)}
              className="hidden h-9 items-center bg-[#102536] px-4 text-sm font-semibold text-white sm:inline-flex dark:bg-[#9ec5d8] dark:text-[#071018]"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Split hero with interactive panels — not a full-bleed slider */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2f6f8f]">
            {t.heroKicker}
          </p>
          <h1 className="animate-rise mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t.heroTitle}
          </h1>
          <p className="animate-rise-delay mt-5 max-w-xl text-lg leading-8 opacity-70">
            {t.heroBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {t.panels.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setPanel(index)}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  panel === index
                    ? "bg-[#102536] text-white dark:bg-[#9ec5d8] dark:text-[#071018]"
                    : "bg-white hover:bg-[#d9e3ea] dark:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="relative min-h-[22rem] overflow-hidden">
          <Image
            key={t.panels[panel].image}
            src={t.panels[panel].image}
            alt=""
            fill
            priority
            className="animate-hero-media object-cover"
            sizes="(min-width: 1024px) 32rem, 100vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[#102536]/80 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              {t.panels[panel].label}
            </p>
            <p className="mt-1 text-2xl font-semibold">{t.panels[panel].title}</p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-20 dark:bg-[#0c1620]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">{t.aboutTitle}</h2>
          <p className="mt-3 opacity-70">{t.aboutBody}</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
              {t.timeline.map((item, index) => (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setYear(index)}
                  className={`shrink-0 px-4 py-3 text-left text-sm font-semibold transition ${
                    year === index
                      ? "bg-[#102536] text-white dark:bg-[#9ec5d8] dark:text-[#071018]"
                      : "bg-[#e9eef3] hover:bg-[#d7e1e9] dark:bg-white/10"
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>
            <div className="overflow-hidden border border-[#102536]/10 dark:border-white/10">
              <div className="relative aspect-[16/9] sm:aspect-[2/1]">
                <Image
                  key={t.timeline[year].image}
                  src={t.timeline[year].image}
                  alt=""
                  fill
                  className="animate-hero-media object-cover"
                  sizes="(min-width: 1024px) 40rem, 100vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-4xl font-semibold">{t.timeline[year].year}</p>
                <p className="mt-4 max-w-xl text-lg leading-8 opacity-80">
                  {t.timeline[year].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">{t.productTitle}</h2>
        <p className="mt-3 opacity-70">{t.productBody}</p>
        <div className="mt-8 divide-y divide-[#102536]/15 border border-[#102536]/15 dark:divide-white/10 dark:border-white/10">
          {t.services.map((service, index) => {
            const isOpen = open === index;
            return (
              <div key={service.title} className="bg-white dark:bg-[#0c1620]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                >
                  <span className="text-lg font-semibold">
                    0{index + 1} · {service.title}
                  </span>
                  <span className="text-xl">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <div className="px-5 pb-6">
                    <p className="max-w-2xl leading-7 opacity-75">{service.body}</p>
                    <p className="mt-4 text-sm font-medium text-[#2f6f8f] dark:text-[#9ec5d8]">
                      {service.start}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section id="portfolio" className="bg-white px-6 py-20 dark:bg-[#0c1620]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">{t.portfolioTitle}</h2>
          <p className="mt-3 opacity-70">{t.portfolioBody}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.filters.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(index)}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  filter === index
                    ? "bg-[#102536] text-white dark:bg-[#9ec5d8] dark:text-[#071018]"
                    : "bg-[#e9eef3] dark:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <article key={project.title} className="group overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 18rem, 50vw"
                  />
                </div>
                <div className="border border-t-0 border-[#102536]/10 px-4 py-3 dark:border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6f8f] dark:text-[#9ec5d8]">
                    {project.tag}
                  </p>
                  <h3 className="mt-1 font-semibold">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactPanel
          title={t.contactTitle}
          body={t.contactBody}
          nameLabel={t.nameLabel}
          messageLabel={t.messageLabel}
          namePlaceholder={t.namePh}
          messagePlaceholder={t.messagePh}
          submitLabel={t.submitLabel}
          buildMessage={(name, message) =>
            `${t.inquire}\n\nName: ${name}\nMessage: ${message || "-"}`
          }
          className="bg-white p-8 text-[#102536] dark:bg-[#0c1620] dark:text-[#e8eef2]"
          buttonClassName="bg-[#102536] text-white dark:bg-[#9ec5d8] dark:text-[#071018]"
        />
        <div className="flex flex-col justify-between bg-[#102536] p-8 text-white dark:bg-[#9ec5d8] dark:text-[#071018]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">
              {t.brand}
            </p>
            <p className="mt-6 text-2xl font-semibold">{t.sideCity}</p>
            <p className="mt-3 opacity-80">{t.sideHours}</p>
          </div>
          <a
            href={whatsappLink(t.inquire)}
            className="mt-10 inline-flex h-12 items-center justify-center bg-white text-sm font-semibold text-[#102536] dark:bg-[#071018] dark:text-[#9ec5d8]"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-[#102536]/10 px-6 py-8 text-center text-sm opacity-60 dark:border-white/10">
        {t.footer}
      </footer>
    </div>
  );
}
