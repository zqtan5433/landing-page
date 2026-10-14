"use client";

import Image from "next/image";
import { useState } from "react";
import { BeforeAfter } from "@/components/before-after";
import { ContactPanel } from "@/components/contact-panel";
import { LanguageToggle, ThemeToggle } from "@/components/controls";
import { useCopy } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

const copy = {
  en: {
    brand: "Aurelia",
    book: "Book",
    heroTitle: "Quiet beauty,",
    heroTitle2: "taken slowly.",
    heroBody: "Drag the handle to compare — then pick a treatment and a time.",
    before: "Before",
    after: "After",
    productTitle: "Book a ritual",
    productBody: "Choose treatment + time. We’ll open WhatsApp with your selection.",
    treatments: [
      { name: "Signature facial", time: "75 min", price: "RM 280" },
      { name: "Glow ritual", time: "90 min", price: "RM 360" },
      { name: "Bridal skin edit", time: "120 min", price: "RM 520" },
    ],
    slots: ["Tue 11:00", "Tue 15:30", "Wed 10:00", "Thu 14:00", "Sat 09:30", "Sat 13:00"],
    confirm: "Confirm on WhatsApp",
    selected: "Selected",
    portfolioTitle: "Atelier gallery",
    portfolioBody: "Tap a photo to pin it as your favourite.",
    projects: [
      {
        title: "Morning light",
        image:
          "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80",
        tall: true,
      },
      {
        title: "Skin edit",
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
        tall: false,
      },
      {
        title: "Quiet corner",
        image:
          "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80",
        tall: false,
      },
      {
        title: "Aftercare",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
        tall: true,
      },
    ],
    aboutTitle: "About Aurelia",
    aboutQuote: "Two chairs. Cool light. No hard sell.",
    aboutBody:
      "We’re a small atelier in Bukit Bintang. Appointments are long enough to matter, and the room stays quiet on purpose.",
    visit: "By appointment · Tue–Sun · Bukit Bintang",
    contactTitle: "Contact us",
    contactBody: "Prefer to write first? Leave a note — we confirm on WhatsApp.",
    nameLabel: "Your name",
    messageLabel: "Preferred day / notes",
    namePh: "e.g. Sofea",
    messagePh: "e.g. Saturday morning, Glow ritual",
    submitLabel: "Send on WhatsApp",
    footer: "Aurelia Salon · KL",
    inquire: 'Hi, I\'m interested in the "Aurelia — Beauty salon" website template.',
  },
  zh: {
    brand: "Aurelia",
    book: "预约",
    heroTitle: "把变美这件事，",
    heroTitle2: "放慢一点。",
    heroBody: "拖动中间把手对比效果，再选护理与时段。",
    before: "护理前",
    after: "护理后",
    productTitle: "预约仪式",
    productBody: "选择护理 + 时段，我们会用 WhatsApp 带上你的选择。",
    treatments: [
      { name: "招牌面部护理", time: "75 分钟", price: "RM 280" },
      { name: "光泽仪式", time: "90 分钟", price: "RM 360" },
      { name: "新娘肌肤修整", time: "120 分钟", price: "RM 520" },
    ],
    slots: ["周二 11:00", "周二 15:30", "周三 10:00", "周四 14:00", "周六 09:30", "周六 13:00"],
    confirm: "用 WhatsApp 确认",
    selected: "已选",
    portfolioTitle: "空间作品",
    portfolioBody: "点一张照片，把它钉成你的最爱。",
    projects: [
      {
        title: "晨光",
        image:
          "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80",
        tall: true,
      },
      {
        title: "肌肤修整",
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
        tall: false,
      },
      {
        title: "安静角落",
        image:
          "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80",
        tall: false,
      },
      {
        title: "售后",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
        tall: true,
      },
    ],
    aboutTitle: "关于 Aurelia",
    aboutQuote: "两张椅子。偏冷的光。不强销。",
    aboutBody:
      "我们是武吉免登的小沙龙。预约故意留长，房间也故意保持安静。",
    visit: "需预约 · 周二至周日 · 武吉免登",
    contactTitle: "联系我们",
    contactBody: "想先留言也可以——我们会在 WhatsApp 确认。",
    nameLabel: "你的名字",
    messageLabel: "想约的日子 / 备注",
    namePh: "例如 Sofea",
    messagePh: "例如：周六早上，光泽仪式",
    submitLabel: "用 WhatsApp 发送",
    footer: "Aurelia Salon · 吉隆坡",
    inquire: "你好，我对「Aurelia — 美容院」网站模板感兴趣。",
  },
};

export function SalonTemplate() {
  const t = useCopy(copy);
  const [treatment, setTreatment] = useState(0);
  const [slot, setSlot] = useState(2);
  const [fav, setFav] = useState(0);

  const confirmBooking = () => {
    const picked = t.treatments[treatment];
    window.open(
      whatsappLink(
        `${t.inquire}\n\n${t.selected}: ${picked.name} · ${picked.price}\nSlot: ${t.slots[slot]}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="min-h-screen bg-[#f3eef2] text-[#1a1f2b] dark:bg-[#12151c] dark:text-[#f6eef2]">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-serif text-3xl tracking-tight">{t.brand}</span>
        <div className="flex items-center gap-2">
          <LanguageToggle className="border-[#cfc3cb] dark:border-white/20" />
          <ThemeToggle className="border-[#cfc3cb] dark:border-white/20" />
          <a
            href="#product"
            className="hidden h-9 items-center rounded-full bg-[#1a1f2b] px-4 text-sm text-white sm:inline-flex dark:bg-[#f4c7d4] dark:text-[#1a1f2b]"
          >
            {t.book}
          </a>
        </div>
      </header>

      {/* Hero = before/after playground, not a carousel */}
      <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-16 pt-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <h1 className="animate-rise font-serif text-5xl leading-[1.05] sm:text-6xl">
            {t.heroTitle}
            <br />
            {t.heroTitle2}
          </h1>
          <p className="animate-rise-delay mt-5 max-w-md text-lg leading-8 opacity-70">
            {t.heroBody}
          </p>
        </div>
        <div className="animate-rise-delay-2 overflow-hidden rounded-[2rem] shadow-lg">
          <BeforeAfter
            before="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=80"
            after="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80"
            beforeLabel={t.before}
            afterLabel={t.after}
          />
        </div>
      </section>

      <section id="product" className="bg-white px-6 py-20 dark:bg-[#1a1f2b]">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl">{t.productTitle}</h2>
          <p className="mt-3 max-w-xl opacity-70">{t.productBody}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              {t.treatments.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setTreatment(index)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                    treatment === index
                      ? "border-[#1a1f2b] bg-[#1a1f2b] text-white dark:border-[#f4c7d4] dark:bg-[#f4c7d4] dark:text-[#1a1f2b]"
                      : "border-[#ddd2d8] hover:border-[#1a1f2b]/40 dark:border-white/15"
                  }`}
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-sm opacity-70">{item.time}</p>
                  </div>
                  <p className="font-serif text-xl">{item.price}</p>
                </button>
              ))}
            </div>

            <div>
              <p className="mb-3 text-sm font-medium opacity-70">{t.selected}</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {t.slots.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSlot(index)}
                    className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                      slot === index
                        ? "bg-[#f4c7d4] text-[#1a1f2b]"
                        : "bg-[#f3eef2] text-[#1a1f2b] hover:bg-[#eadfe6] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={confirmBooking}
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1a1f2b] text-sm font-semibold text-white transition hover:scale-[1.01] dark:bg-[#f4c7d4] dark:text-[#1a1f2b]"
              >
                {t.confirm} · {t.treatments[treatment].name} · {t.slots[slot]}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-serif text-4xl">{t.portfolioTitle}</h2>
        <p className="mt-3 opacity-70">{t.portfolioBody}</p>
        <div className="mt-10 columns-1 gap-4 sm:columns-2">
          {t.projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setFav(index)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.25rem]"
            >
              <div className={`relative ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 640px) 22rem, 100vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <span className="font-serif text-xl">{project.title}</span>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    fav === index ? "bg-[#f4c7d4] text-[#1a1f2b]" : "bg-white/20"
                  }`}
                >
                  {fav === index ? "★" : "☆"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-[2rem] bg-[#1a1f2b] px-8 py-12 text-[#f6eef2] dark:bg-[#f4c7d4] dark:text-[#1a1f2b]">
          <p className="font-serif text-3xl leading-snug sm:text-4xl">{t.aboutQuote}</p>
          <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
            {t.aboutTitle}
          </h2>
          <p className="mt-3 max-w-2xl leading-8 opacity-85">{t.aboutBody}</p>
          <p className="mt-6 text-sm opacity-70">{t.visit}</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
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
          className="rounded-[2rem] bg-white p-8 text-[#1a1f2b] dark:bg-[#1a1f2b] dark:text-[#f6eef2]"
          buttonClassName="bg-[#1a1f2b] text-white dark:bg-[#f4c7d4] dark:text-[#1a1f2b]"
        />
      </section>

      <footer className="border-t border-[#ddd2d8] px-6 py-8 text-center text-sm opacity-60 dark:border-white/10">
        {t.footer}
      </footer>
    </div>
  );
}
