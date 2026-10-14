"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ContactPanel } from "@/components/contact-panel";
import { LanguageToggle, ThemeToggle } from "@/components/controls";
import { HeroSlider } from "@/components/hero-slider";
import { useCopy } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

const copy = {
  en: {
    brand: "Crumb & Co.",
    nav: [
      { label: "About", href: "#about" },
      { label: "Products", href: "#product" },
      { label: "Gallery", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    order: "Order on WhatsApp",
    slides: [
      {
        title: "Fresh from the oven, ordered on WhatsApp.",
        body: "A simple bakery shop — browse products, pick a quantity, and send your order to us.",
        ctaLabel: "Shop products",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Sourdough, cakes, and weekend trays.",
        body: "Baked every morning in Bangsar. Same-day pickup when you order before noon.",
        ctaLabel: "See the menu",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "No cart. No checkout. Just chat.",
        body: "Tap Order — WhatsApp opens with the product and quantity ready to send.",
        ctaLabel: "Start ordering",
        image:
          "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    aboutTitle: "About us",
    aboutBody:
      "Crumb & Co. is a small neighbourhood bakery. We keep the menu short, bake in small batches, and take orders on WhatsApp so nothing sits overnight.",
    aboutPoints: [
      { label: "Open", value: "Tue–Sun" },
      { label: "Pickup", value: "Bangsar" },
      { label: "Cut-off", value: "12:00" },
    ],
    productTitle: "Products",
    productBody: "Filter a category, set quantity, then order on WhatsApp.",
    filters: ["All", "Bread", "Pastry", "Cake"],
    qty: "Qty",
    buy: "Order",
    products: [
      {
        name: "Country sourdough",
        category: "Bread",
        price: "RM 18",
        blurb: "700g loaf · crusty outside, soft crumb",
        image:
          "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Butter croissant",
        category: "Pastry",
        price: "RM 9",
        blurb: "Flaky layers · baked every morning",
        image:
          "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Chocolate chip bun",
        category: "Pastry",
        price: "RM 7",
        blurb: "Soft bun · dark chocolate chips",
        image:
          "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Banana loaf",
        category: "Cake",
        price: "RM 22",
        blurb: "Whole loaf · walnut optional",
        image:
          "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Berry shortcake",
        category: "Cake",
        price: "RM 68",
        blurb: "6-inch · seasonal berries",
        image:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "Chocolate fudge",
        category: "Cake",
        price: "RM 75",
        blurb: "6-inch · rich cocoa sponge",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    portfolioTitle: "Gallery",
    portfolioBody: "A peek inside the bakery — ovens, trays, and weekend crowds.",
    projects: [
      {
        title: "Morning bake",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Counter",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Weekend trays",
        image:
          "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Cake finish",
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    contactTitle: "Contact us",
    contactBody: "Questions about an order or custom cake? Message us here.",
    nameLabel: "Your name",
    messageLabel: "Your message",
    namePh: "e.g. Aisha",
    messagePh: "e.g. Can I order a birthday cake for Saturday?",
    submitLabel: "Send on WhatsApp",
    footerLinks: ["Products", "Gallery", "Pickup", "WhatsApp"],
    footer: "Crumb & Co. · Bangsar",
    orderMsg: (name: string, price: string, qty: number) =>
      `Hi Crumb & Co.! I'd like to order:\n\n• ${name} × ${qty}\nPrice: ${price} each\n\nPlease confirm availability. Thanks!`,
    inquire: 'Hi, I\'m interested in the "Crumb & Co. — Bakery" website template.',
  },
  zh: {
    brand: "Crumb & Co.",
    nav: [
      { label: "关于我们", href: "#about" },
      { label: "产品", href: "#product" },
      { label: "作品", href: "#portfolio" },
      { label: "联系", href: "#contact" },
    ],
    order: "用 WhatsApp 下单",
    slides: [
      {
        title: "刚出炉的面包，用 WhatsApp 下单。",
        body: "简单的面包店页面——浏览产品、选数量，直接发订单给我们。",
        ctaLabel: "去选购",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "酸种、蛋糕，还有周末的托盘。",
        body: "每天早上在 Bangsar 现烤。中午前进单，可当天自取。",
        ctaLabel: "看菜单",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "没有购物车，直接聊天下单。",
        body: "点「下单」就会打开 WhatsApp，产品与数量已经写好。",
        ctaLabel: "开始点单",
        image:
          "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    aboutTitle: "关于我们",
    aboutBody:
      "Crumb & Co. 是邻里小面包店。菜单不贪多，小批次烘焙，用 WhatsApp 接单，尽量不隔夜。",
    aboutPoints: [
      { label: "营业", value: "周二至周日" },
      { label: "自取", value: "Bangsar" },
      { label: "截单", value: "12:00" },
    ],
    productTitle: "产品",
    productBody: "先筛选分类，再调整数量，最后用 WhatsApp 下单。",
    filters: ["全部", "面包", "点心", "蛋糕"],
    qty: "数量",
    buy: "下单",
    products: [
      {
        name: "乡村酸种",
        category: "面包",
        price: "RM 18",
        blurb: "700g · 外脆内软",
        image:
          "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "黄油可颂",
        category: "点心",
        price: "RM 9",
        blurb: "层层酥脆 · 每天早上出炉",
        image:
          "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "巧克力面包",
        category: "点心",
        price: "RM 7",
        blurb: "软包 · 黑巧克力豆",
        image:
          "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "香蕉磅蛋糕",
        category: "蛋糕",
        price: "RM 22",
        blurb: "整条 · 可选核桃",
        image:
          "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "莓果短蛋糕",
        category: "蛋糕",
        price: "RM 68",
        blurb: "6 寸 · 当季莓果",
        image:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80",
      },
      {
        name: "巧克力熔岩蛋糕",
        category: "蛋糕",
        price: "RM 75",
        blurb: "6 寸 · 浓可可海绵",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    portfolioTitle: "作品 / 现场",
    portfolioBody: "面包店里的样子——烤箱、托盘，还有周末的人潮。",
    projects: [
      {
        title: "晨间烘焙",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "柜台",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "周末托盘",
        image:
          "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "蛋糕收尾",
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    contactTitle: "联系我们",
    contactBody: "想问订单或定制蛋糕？在这里留言给我们。",
    nameLabel: "你的名字",
    messageLabel: "留言",
    namePh: "例如 Aisha",
    messagePh: "例如：周六能订生日蛋糕吗？",
    submitLabel: "用 WhatsApp 发送",
    footerLinks: ["产品", "作品", "自取", "WhatsApp"],
    footer: "Crumb & Co. · Bangsar",
    orderMsg: (name: string, price: string, qty: number) =>
      `你好 Crumb & Co.！我想下单：\n\n• ${name} × ${qty}\n单价：${price}\n\n请帮确认是否有货，谢谢！`,
    inquire: "你好，我对「Crumb & Co. — 面包店」网站模板感兴趣。",
  },
};

export function BakeryTemplate() {
  const t = useCopy(copy);
  const [filter, setFilter] = useState(0);
  const [qty, setQty] = useState<Record<string, number>>({});

  const filtered = useMemo(() => {
    const label = t.filters[filter];
    if (filter === 0) return t.products;
    return t.products.filter((product) => product.category === label);
  }, [filter, t.filters, t.products]);

  const getQty = (name: string) => qty[name] ?? 1;

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#2a1a12] dark:bg-[#140e0b] dark:text-[#f4ebe2]">
      <HeroSlider
        slides={t.slides.map((slide) => ({
          ...slide,
          ctaHref: "#product",
        }))}
        overlayClassName="bg-gradient-to-t from-[#140e0b]/90 via-[#140e0b]/45 to-[#140e0b]/20"
        titleClassName="font-serif text-4xl leading-tight text-white sm:text-6xl"
        brand={
          <span className="font-serif text-2xl tracking-tight text-white">
            {t.brand}
          </span>
        }
        nav={
          <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
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
              href="#product"
              className="hidden h-9 items-center rounded-full bg-[#e8b86d] px-4 text-sm font-semibold text-[#2a1a12] sm:inline-flex"
            >
              {t.order}
            </a>
          </div>
        }
      />

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-80 overflow-hidden rounded-[1.5rem]">
          <Image
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1400&q=80"
            alt=""
            fill
            className="object-cover transition duration-700 hover:scale-105"
            sizes="(min-width: 1024px) 28rem, 100vw"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl">{t.aboutTitle}</h2>
          <p className="mt-4 leading-8 opacity-75">{t.aboutBody}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {t.aboutPoints.map((point) => (
              <div
                key={point.label}
                className="rounded-2xl bg-white p-4 dark:bg-white/5"
              >
                <p className="font-serif text-2xl">{point.value}</p>
                <p className="mt-1 text-sm opacity-55">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="bg-white py-20 dark:bg-[#1b1410]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-4xl">{t.productTitle}</h2>
          <p className="mt-3 max-w-xl opacity-70">{t.productBody}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.filters.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(index)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === index
                    ? "bg-[#2a1a12] text-[#f7f1e8] dark:bg-[#e8b86d] dark:text-[#2a1a12]"
                    : "bg-[#f7f1e8] hover:bg-[#efe4d5] dark:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => {
              const count = getQty(product.name);
              return (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-[1.5rem] border border-[#2a1a12]/10 bg-[#fbf7f1] dark:border-white/10 dark:bg-[#140e0b]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 18rem, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="mt-1 text-sm opacity-60">{product.blurb}</p>
                      </div>
                      <p className="shrink-0 font-serif text-xl">{product.price}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium opacity-60">{t.qty}</span>
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            setQty((prev) => ({
                              ...prev,
                              [product.name]: Math.max(1, count - 1),
                            }))
                          }
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2a1a12]/15 text-lg dark:border-white/20"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">
                          {count}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            setQty((prev) => ({
                              ...prev,
                              [product.name]: Math.min(20, count + 1),
                            }))
                          }
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2a1a12]/15 text-lg dark:border-white/20"
                        >
                          +
                        </button>
                      </div>
                      <a
                        href={whatsappLink(
                          t.orderMsg(product.name, product.price, count),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center rounded-full bg-[#2a1a12] px-4 text-sm font-semibold text-[#f7f1e8] transition hover:scale-[1.02] dark:bg-[#e8b86d] dark:text-[#2a1a12]"
                      >
                        {t.buy}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-4xl">{t.portfolioTitle}</h2>
        <p className="mt-3 opacity-70">{t.portfolioBody}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {t.projects.map((project) => (
            <article
              key={project.title}
              className="portfolio-tile group relative overflow-hidden rounded-[1.25rem]"
            >
              <div className="relative aspect-[5/4]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 640px) 28rem, 100vw"
                />
                <div className="overlay absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-5">
                  <h3 className="font-serif text-2xl text-white">{project.title}</h3>
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
          className="rounded-[2rem] bg-white p-8 text-[#2a1a12] dark:bg-[#1b1410] dark:text-[#f4ebe2]"
          buttonClassName="bg-[#2a1a12] text-[#f7f1e8] dark:bg-[#e8b86d] dark:text-[#2a1a12]"
        />
      </section>

      <footer className="border-t border-[#2a1a12]/10 px-6 py-10 dark:border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-serif text-2xl">{t.brand}</span>
          <div className="flex flex-wrap gap-5 text-sm opacity-60">
            {t.footerLinks.map((link) => (
              <a key={link} href="#product">
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm opacity-60">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
