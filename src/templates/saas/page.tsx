"use client";

import Image from "next/image";
import { useState } from "react";
import { ContactPanel } from "@/components/contact-panel";
import { LanguageToggle, ThemeToggle } from "@/components/controls";
import { HeroSlider } from "@/components/hero-slider";
import { SeatCalculator } from "@/components/seat-calculator";
import { useCopy } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

const copy = {
  en: {
    brand: "Northloop",
    nav: [
      { label: "About", href: "#about" },
      { label: "Product", href: "#product" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Start free trial",
    slides: [
      {
        title: "See every workflow before it slips.",
        body: "Northloop gives growing teams a live picture of delivery, risk, and revenue.",
        ctaLabel: "Start free trial",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Replace the Friday scramble.",
        body: "One shared board your managers can open in the morning and trust by noon.",
        ctaLabel: "Talk to sales",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Alerts only when a human is needed.",
        body: "Quiet by default. Loud when something actually blocks revenue.",
        ctaLabel: "See the product",
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    aboutTitle: "About us",
    aboutBody:
      "Northloop started as an internal ops tool for a logistics team in Singapore. We turned it into a product so growing companies can see blocked work before customers feel it.",
    aboutPoints: [
      { label: "Founded", value: "2021" },
      { label: "Teams", value: "180+" },
      { label: "Region", value: "APAC" },
    ],
    productTitle: "Product",
    productBody: "Explore the modules, then price a plan with the seat calculator.",
    features: [
      {
        title: "Live pipeline",
        body: "Spot stalled work across teams before it becomes a customer issue.",
      },
      {
        title: "Risk radar",
        body: "Surface delayed deals, capacity gaps, and owner conflicts early.",
      },
      {
        title: "Weekly brief",
        body: "Auto-build the Monday update your leadership actually reads.",
      },
    ],
    calcTitle: "Estimate your plan",
    calcBody: "Drag seats and switch plans — the total updates live.",
    seatsLabel: "Seats",
    totalLabel: "Estimated monthly",
    calcCta: "Send this quote on WhatsApp",
    plans: [
      { name: "Starter", base: 19, perSeat: 3 },
      { name: "Growth", base: 49, perSeat: 5 },
      { name: "Scale", base: 129, perSeat: 7 },
    ],
    portfolioTitle: "Portfolio",
    portfolioBody: "Selected customer outcomes from the last two years.",
    projects: [
      {
        title: "Harbor Logistics",
        tag: "Operations",
        result: "38% faster cycle time",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Lumen Retail",
        tag: "Revenue",
        result: "Weekly forecast accuracy +22%",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Kinetic Labs",
        tag: "Delivery",
        result: "Blocked tickets cut in half",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    contactTitle: "Contact us",
    contactBody: "Tell us your team size. We reply on WhatsApp within one business day.",
    nameLabel: "Your name",
    messageLabel: "What do you need?",
    namePh: "e.g. Tristan",
    messagePh: "e.g. Demo for a 20-person ops team",
    submitLabel: "Send on WhatsApp",
    footerLinks: ["Product", "Portfolio", "Privacy", "Terms"],
    footer: "Northloop Inc.",
    inquire: 'Hi, I\'m interested in the "Northloop — SaaS" website template.',
  },
  zh: {
    brand: "Northloop",
    nav: [
      { label: "关于我们", href: "#about" },
      { label: "产品", href: "#product" },
      { label: "案例", href: "#portfolio" },
      { label: "联系", href: "#contact" },
    ],
    cta: "免费试用",
    slides: [
      {
        title: "每一个流程，都赶在失控之前看见。",
        body: "Northloop 让成长中的团队实时掌握交付、风险和收入。",
        ctaLabel: "免费试用",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "告别周五的慌乱。",
        body: "一块早上打开、中午仍然可信的共享看板。",
        ctaLabel: "联系销售",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "只在需要人时才提醒。",
        body: "默认安静；真正挡住收入时再大声。",
        ctaLabel: "查看产品",
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    aboutTitle: "关于我们",
    aboutBody:
      "Northloop 最初是新加坡物流团队的内部运营工具。我们把它做成产品，让成长中的公司在客户感知之前就看到卡住的工作。",
    aboutPoints: [
      { label: "成立", value: "2021" },
      { label: "团队", value: "180+" },
      { label: "区域", value: "亚太" },
    ],
    productTitle: "产品",
    productBody: "先看模块，再用席位计算器估价格。",
    features: [
      {
        title: "实时管道",
        body: "在问题变成客户投诉前，先看到卡住的工作。",
      },
      {
        title: "风险雷达",
        body: "提前暴露延期交易、产能缺口与负责人冲突。",
      },
      {
        title: "周报简报",
        body: "自动生成管理层真正会看的周一更新。",
      },
    ],
    calcTitle: "估算方案",
    calcBody: "拖动席位、切换方案，总额会实时更新。",
    seatsLabel: "席位",
    totalLabel: "预估月费",
    calcCta: "用 WhatsApp 发送这份报价",
    plans: [
      { name: "Starter", base: 19, perSeat: 3 },
      { name: "Growth", base: 49, perSeat: 5 },
      { name: "Scale", base: 129, perSeat: 7 },
    ],
    portfolioTitle: "案例",
    portfolioBody: "过去两年部分客户成果。",
    projects: [
      {
        title: "Harbor Logistics",
        tag: "运营",
        result: "周期缩短 38%",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Lumen Retail",
        tag: "收入",
        result: "周预测准确度 +22%",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Kinetic Labs",
        tag: "交付",
        result: "阻塞工单减半",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    contactTitle: "联系我们",
    contactBody: "告诉我们团队规模。我们会在一个工作日内通过 WhatsApp 回复。",
    nameLabel: "你的名字",
    messageLabel: "你想了解什么？",
    namePh: "例如 Tristan",
    messagePh: "例如：给 20 人运营团队做演示",
    submitLabel: "用 WhatsApp 发送",
    footerLinks: ["产品", "案例", "隐私", "条款"],
    footer: "Northloop Inc.",
    inquire: "你好，我对「Northloop — SaaS 产品站」网站模板感兴趣。",
  },
};

export function SaasTemplate() {
  const t = useCopy(copy);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-[#0f1f1a] dark:bg-[#08110e] dark:text-[#e8f5ef]">
      <HeroSlider
        slides={t.slides.map((slide) => ({
          ...slide,
          ctaHref: whatsappLink(t.inquire),
        }))}
        overlayClassName="bg-gradient-to-r from-[#08110e]/88 via-[#0f1f1a]/55 to-[#08110e]/25"
        brand={
          <div className="flex items-center gap-2 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7dffb3] text-sm font-bold text-[#08110e]">
              N
            </span>
            <span className="text-lg font-semibold tracking-tight">{t.brand}</span>
          </div>
        }
        nav={
          <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        }
        controls={
          <div className="flex items-center gap-2">
            <LanguageToggle className="border-white/20 bg-white/10 text-white" />
            <ThemeToggle className="border-white/20 bg-white/10 text-white" />
            <a
              href={whatsappLink(t.inquire)}
              className="hidden h-9 items-center rounded-lg bg-[#7dffb3] px-4 text-sm font-semibold text-[#08110e] sm:inline-flex"
            >
              {t.cta}
            </a>
          </div>
        }
      />

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{t.aboutTitle}</h2>
          <p className="mt-4 leading-8 text-black/65 dark:text-white/65">{t.aboutBody}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {t.aboutPoints.map((point) => (
              <div
                key={point.label}
                className="rounded-2xl bg-white p-4 shadow-sm dark:bg-white/5"
              >
                <p className="text-2xl font-semibold">{point.value}</p>
                <p className="mt-1 text-sm text-black/50 dark:text-white/50">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2rem]">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
            alt=""
            fill
            className="object-cover transition duration-700 hover:scale-105"
            sizes="(min-width: 1024px) 28rem, 100vw"
          />
        </div>
      </section>

      <section id="product" className="bg-white py-20 dark:bg-[#0d1a15]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight">{t.productTitle}</h2>
          <p className="mt-3 max-w-2xl text-black/60 dark:text-white/60">{t.productBody}</p>

          <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              {t.features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveFeature(index)}
                  className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                    activeFeature === index
                      ? "border-[#0f1f1a] bg-[#0f1f1a] text-white dark:border-[#7dffb3] dark:bg-[#7dffb3] dark:text-[#08110e]"
                      : "border-black/10 hover:border-black/25 dark:border-white/10"
                  }`}
                >
                  <p className="font-semibold">{feature.title}</p>
                  <p className="mt-1 text-sm opacity-75">{feature.body}</p>
                </button>
              ))}
            </div>
            <div className="rounded-[2rem] bg-[#0f1f1a] p-8 text-white dark:bg-[#7dffb3] dark:text-[#08110e]">
              <p className="text-xs uppercase tracking-[0.2em] opacity-70">
                Module 0{activeFeature + 1}
              </p>
              <h3 className="mt-4 text-3xl font-semibold">
                {t.features[activeFeature].title}
              </h3>
              <p className="mt-4 max-w-md leading-7 opacity-80">
                {t.features[activeFeature].body}
              </p>
              <a
                href={whatsappLink(t.inquire)}
                className="mt-8 inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-[#0f1f1a] dark:bg-[#08110e] dark:text-[#7dffb3]"
              >
                {t.cta}
              </a>
            </div>
          </div>

          <div className="mt-12 text-[#0f1f1a]">
            <SeatCalculator
              title={t.calcTitle}
              body={t.calcBody}
              seatsLabel={t.seatsLabel}
              totalLabel={t.totalLabel}
              ctaLabel={t.calcCta}
              plans={t.plans}
              onCta={(plan, seats, total) => {
                window.open(
                  whatsappLink(
                    `${t.inquire}\n\nPlan: ${plan}\nSeats: ${seats}\nEstimate: $${total}/mo`,
                  ),
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">{t.portfolioTitle}</h2>
        <p className="mt-3 text-black/60 dark:text-white/60">{t.portfolioBody}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.projects.map((project) => (
            <article
              key={project.title}
              className="portfolio-tile group overflow-hidden rounded-[1.5rem]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 18rem, 100vw"
                />
                <div className="overlay absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    {project.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-[#7dffb3]">{project.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
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
          className="rounded-[2rem] bg-white p-8 text-[#0f1f1a] dark:bg-[#0d1a15] dark:text-[#e8f5ef]"
          buttonClassName="bg-[#0f1f1a] text-white dark:bg-[#7dffb3] dark:text-[#08110e]"
        />
      </section>

      <footer className="border-t border-black/5 px-6 py-10 dark:border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f1f1a] text-sm font-bold text-[#7dffb3] dark:bg-[#7dffb3] dark:text-[#08110e]">
              N
            </span>
            <span className="font-semibold">{t.brand}</span>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-black/50 dark:text-white/50">
            {t.footerLinks.map((link) => (
              <a key={link} href="#product">
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm text-black/50 dark:text-white/50">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
