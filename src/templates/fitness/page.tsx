"use client";

import Image from "next/image";
import { useState } from "react";
import { ContactPanel } from "@/components/contact-panel";
import { LanguageToggle, ThemeToggle } from "@/components/controls";
import { HeroSlider } from "@/components/hero-slider";
import { useCopy } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

const copy = {
  en: {
    brand: "PeakFit",
    nav: [
      { label: "About", href: "#about" },
      { label: "Plans", href: "#product" },
      { label: "Stories", href: "#portfolio" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    join: "Join now",
    slides: [
      {
        title: "Train hard. See real results.",
        body: "No fluff, no excuses. PeakFit gives you the equipment, coaches, and community to become the strongest version of yourself.",
        ctaLabel: "Start your free trial",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Open 24 hours. Every day.",
        body: "Late shifts, early mornings, weekends — the floor never closes. Come when it works for you.",
        ctaLabel: "Book a free tour",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Coaches who know your name.",
        body: "Group classes, personal training, and a community that pushes you on the hard days.",
        ctaLabel: "See membership plans",
        image:
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    aboutTitle: "About PeakFit",
    aboutBody:
      "A results gym in KL for people who want equipment that works, coaches who care, and a floor that stays open when life gets busy.",
    aboutPoints: [
      { label: "Hours", value: "24/7" },
      { label: "Classes", value: "40+/wk" },
      { label: "Trial", value: "7 days" },
    ],
    productTitle: "Pick your plan",
    productBody:
      "All plans include full gym access, free parking, and a 7-day free trial. No lock-in contracts.",
    popular: "Most popular",
    plans: [
      {
        name: "Basic",
        price: "RM 99",
        note: "per month",
        features: [
          "Full gym access",
          "24/7 entry",
          "Free parking",
          "Locker room access",
        ],
        cta: "Start free trial",
      },
      {
        name: "Pro",
        price: "RM 169",
        note: "per month",
        popular: true,
        features: [
          "Everything in Basic",
          "Unlimited group classes",
          "1 PT session / month",
          "Nutrition guide",
          "Progress tracking app",
          "Guest pass (2 / month)",
        ],
        cta: "Start free trial",
      },
      {
        name: "Elite",
        price: "RM 289",
        note: "per month",
        features: [
          "Everything in Pro",
          "4 PT sessions / month",
          "Custom meal plan",
          "Priority class booking",
          "Unlimited guest passes",
          "Dedicated locker",
        ],
        cta: "Start free trial",
      },
    ],
    portfolioTitle: "Real people. Real results.",
    portfolioBody:
      "Don't take our word for it — hear from members who've transformed at PeakFit.",
    stories: [
      {
        quote:
          "I lost 18kg in 5 months. The coaches actually care about your progress — they remember your name and push you on the hard days.",
        name: "Daniel Reyes",
        meta: "Member since 2023",
        image:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
      },
      {
        quote:
          "I'd tried three other gyms before PeakFit. The difference is the community — supportive, never intimidating.",
        name: "Aisha Malik",
        meta: "Member since 2022",
        image:
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        quote:
          "24-hour access is a game changer. I work late shifts and can train at midnight without any issues.",
        name: "Kevin Tan",
        meta: "Member since 2024",
        image:
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    faqTitle: "Questions before you join?",
    faqBody:
      "We've got answers. Still not sure? Come in for a free tour — no pressure.",
    faqs: [
      {
        q: "Is there really a free trial?",
        a: "Yes — 7 days completely free. No credit card required. Train, meet the coaches, and decide at the end of the week.",
      },
      {
        q: "Am I locked into a contract?",
        a: "No contracts. All plans are month-to-month. Cancel anytime with 7 days notice.",
      },
      {
        q: "What are your opening hours?",
        a: "The gym floor is open 24/7. Staffed hours are 6am–10pm weekdays and 8am–8pm weekends.",
      },
      {
        q: "I'm a beginner — is this gym for me?",
        a: "Absolutely. Every new member gets a free orientation with a coach to build a starting plan.",
      },
      {
        q: "Can I freeze my membership?",
        a: "Yes — freeze up to 3 months per year for holidays, injury, or busy seasons. Give us 48 hours notice.",
      },
    ],
    contactTitle: "Contact us",
    contactBody:
      "Start a free trial or book a tour on WhatsApp. We reply within one business day.",
    nameLabel: "Your name",
    messageLabel: "What do you need?",
    namePh: "e.g. Tristan",
    messagePh: "e.g. Free trial for Pro plan this week",
    submitLabel: "Send on WhatsApp",
    footerLinks: ["About", "Plans", "FAQ", "Privacy"],
    footer: "PeakFit · All rights reserved",
    planMsg: (name: string, price: string) =>
      `Hi PeakFit! I'm interested in the ${name} plan (${price}/mo). Please help me start a free trial.`,
    inquire: 'Hi, I\'m interested in the "PeakFit — Fitness" website template.',
  },
  zh: {
    brand: "PeakFit",
    nav: [
      { label: "关于", href: "#about" },
      { label: "配套", href: "#product" },
      { label: "故事", href: "#portfolio" },
      { label: "FAQ", href: "#faq" },
      { label: "联系", href: "#contact" },
    ],
    join: "立即加入",
    slides: [
      {
        title: "认真练。看见真改变。",
        body: "不讲空话。PeakFit 给你设备、教练和社群，帮你成为更强的自己。",
        ctaLabel: "开始免费试练",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "全天 24 小时开放。",
        body: "晚班、清晨、周末——场地从不关门。你有空就来。",
        ctaLabel: "预约免费参观",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "记得你名字的教练。",
        body: "团课、私教，还有在艰难日子推你一把的社群。",
        ctaLabel: "查看会员配套",
        image:
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    aboutTitle: "关于 PeakFit",
    aboutBody:
      "吉隆坡的结果导向健身房：设备好用、教练靠谱，忙起来也能半夜进场。",
    aboutPoints: [
      { label: "开放", value: "24/7" },
      { label: "团课", value: "每周 40+" },
      { label: "试练", value: "7 天" },
    ],
    productTitle: "选择配套",
    productBody: "所有配套含全场通行、免费停车和 7 天试练。无绑约。",
    popular: "最受欢迎",
    plans: [
      {
        name: "Basic",
        price: "RM 99",
        note: "每月",
        features: ["全场通行", "24/7 入场", "免费停车", "更衣室"],
        cta: "开始免费试练",
      },
      {
        name: "Pro",
        price: "RM 169",
        note: "每月",
        popular: true,
        features: [
          "含 Basic 全部",
          "无限团课",
          "每月 1 次私教",
          "营养指南",
          "进度追踪 App",
          "访客券（每月 2 张）",
        ],
        cta: "开始免费试练",
      },
      {
        name: "Elite",
        price: "RM 289",
        note: "每月",
        features: [
          "含 Pro 全部",
          "每月 4 次私教",
          "定制餐单",
          "优先约课",
          "无限访客券",
          "专属储物柜",
        ],
        cta: "开始免费试练",
      },
    ],
    portfolioTitle: "真人。真改变。",
    portfolioBody: "听听 PeakFit 会员怎么说。",
    stories: [
      {
        quote:
          "5 个月减了 18 公斤。教练真的在乎你的进度——记得你的名字，难熬的日子也会推你一把。",
        name: "Daniel Reyes",
        meta: "2023 年加入",
        image:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
      },
      {
        quote:
          "之前试过三家健身房。PeakFit 的不同是社群——很支持，不会让人有压力。",
        name: "Aisha Malik",
        meta: "2022 年加入",
        image:
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        quote:
          "24 小时开放改变了我。我上晚班，半夜也能安心训练。",
        name: "Kevin Tan",
        meta: "2024 年加入",
        image:
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    faqTitle: "加入前的问题？",
    faqBody: "这里有答案。还不确定？来免费参观一次，没有压力。",
    faqs: [
      {
        q: "真的有免费试练吗？",
        a: "有——整整 7 天免费，不用绑信用卡。练完、见过教练，周末再决定。",
      },
      {
        q: "会不会被合约绑住？",
        a: "不会。全部按月缴费，提前 7 天通知即可取消。",
      },
      {
        q: "营业时间是怎样的？",
        a: "场地 24/7 开放。有职员时段：平日 6am–10pm，周末 8am–8pm。",
      },
      {
        q: "我是新手，适合吗？",
        a: "适合。每位新会员都有一次免费导览，教练会帮你定起步计划。",
      },
      {
        q: "可以暂停会籍吗？",
        a: "可以。每年最多暂停 3 个月，提前 48 小时通知即可。",
      },
    ],
    contactTitle: "联系我们",
    contactBody: "用 WhatsApp 开启试练或预约参观。我们会在一个工作日内回复。",
    nameLabel: "你的名字",
    messageLabel: "你想了解什么？",
    namePh: "例如 Tristan",
    messagePh: "例如：这周想试 Pro 配套",
    submitLabel: "用 WhatsApp 发送",
    footerLinks: ["关于", "配套", "FAQ", "隐私"],
    footer: "PeakFit · 保留所有权利",
    planMsg: (name: string, price: string) =>
      `你好 PeakFit！我对 ${name} 配套（${price}/月）感兴趣，想开始免费试练。`,
    inquire: "你好，我对「PeakFit — 健身」网站模板感兴趣。",
  },
};

export function FitnessTemplate() {
  const t = useCopy(copy);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <HeroSlider
        slides={t.slides.map((slide) => ({
          ...slide,
          ctaHref: whatsappLink(t.inquire),
        }))}
        overlayClassName="bg-gradient-to-br from-[#07080c]/92 via-[#0b0c10]/75 to-[#1a1520]/55"
        titleClassName="text-4xl font-bold tracking-tight text-white sm:text-6xl"
        brand={
          <span className="text-lg font-bold tracking-tight text-white">
            {t.brand}
          </span>
        }
        nav={
          <nav className="hidden items-center gap-7 text-sm text-white/65 lg:flex">
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
              className="hidden h-9 items-center rounded-lg bg-[#c9a227] px-4 text-sm font-semibold text-[#0b0c10] sm:inline-flex"
            >
              {t.join}
            </a>
          </div>
        }
      />

      <section id="about" className="bg-[#f3eee6] px-6 py-20 text-[#14151a]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-4 leading-8 text-[#14151a]/70">{t.aboutBody}</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {t.aboutPoints.map((point) => (
                <div key={point.label} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-[#c9a227]">{point.value}</p>
                  <p className="mt-1 text-sm text-[#14151a]/55">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-[1.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1400&q=80"
              alt=""
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(min-width: 1024px) 28rem, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="product" className="bg-[#101218] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t.productTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/60">
            {t.productBody}
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-3xl border p-6 ${
                  plan.popular
                    ? "border-[#c9a227] bg-[#c9a227] text-[#0b0c10]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0b0c10] px-3 py-1 text-xs font-semibold text-[#c9a227]">
                    {t.popular}
                  </span>
                ) : null}
                <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                  {plan.name}
                </p>
                <p className="mt-4 text-4xl font-bold">
                  {plan.price}
                  <span className="ml-2 text-sm font-normal opacity-70">
                    {plan.note}
                  </span>
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 opacity-90">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span aria-hidden>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(t.planMsg(plan.name, plan.price))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition hover:scale-[1.01] ${
                    plan.popular
                      ? "bg-[#0b0c10] text-white"
                      : "bg-[#c9a227] text-[#0b0c10]"
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#f3eee6] px-6 py-20 text-[#14151a]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t.portfolioTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[#14151a]/65">
            {t.portfolioBody}
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.stories.map((story) => (
              <article
                key={story.name}
                className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm"
              >
                <div className="relative aspect-[5/4]">
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 18rem, 100vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[#c9a227]">★★★★★</p>
                  <p className="mt-3 text-sm leading-7 text-[#14151a]/80">
                    “{story.quote}”
                  </p>
                  <p className="mt-4 font-semibold">{story.name}</p>
                  <p className="text-sm text-[#14151a]/55">{story.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#101218] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t.faqTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
            {t.faqBody}
          </p>
          <div className="mt-10 divide-y divide-white/10 border border-white/10">
            {t.faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <span className="text-xl text-[#c9a227]">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <p className="px-5 pb-5 text-sm leading-7 text-white/65">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f3eee6] px-6 py-20 text-[#14151a]">
        <div className="mx-auto max-w-6xl">
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
            className="rounded-[2rem] bg-white p-8"
            buttonClassName="bg-[#c9a227] text-[#0b0c10]"
          />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0b0c10] px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold tracking-tight">{t.brand}</span>
          <div className="flex flex-wrap gap-5 text-sm text-white/50">
            {t.footerLinks.map((link) => (
              <a key={link} href="#product">
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm text-white/45">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
