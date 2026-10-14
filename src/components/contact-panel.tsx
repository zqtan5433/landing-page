"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

type ContactPanelProps = {
  title: string;
  body: string;
  nameLabel: string;
  messageLabel: string;
  submitLabel: string;
  namePlaceholder?: string;
  messagePlaceholder?: string;
  buildMessage: (name: string, message: string) => string;
  className?: string;
  buttonClassName?: string;
};

export function ContactPanel({
  title,
  body,
  nameLabel,
  messageLabel,
  submitLabel,
  namePlaceholder = "",
  messagePlaceholder = "",
  buildMessage,
  className = "",
  buttonClassName = "bg-zinc-950 text-white hover:bg-zinc-800",
}: ContactPanelProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={className}>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 max-w-lg text-[15px] leading-7 opacity-80">{body}</p>
      <form
        className="mt-8 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          window.open(
            whatsappLink(buildMessage(name.trim() || "Friend", message.trim())),
            "_blank",
            "noopener,noreferrer",
          );
        }}
      >
        <label className="grid gap-2 text-sm font-medium">
          <span>{nameLabel}</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={namePlaceholder}
            className="h-12 rounded-xl border-2 border-zinc-300 bg-white px-4 text-base text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-zinc-900 dark:border-zinc-500 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          <span>{messageLabel}</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={messagePlaceholder}
            rows={4}
            className="rounded-xl border-2 border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-zinc-900 dark:border-zinc-500 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200"
          />
        </label>
        <button
          type="submit"
          className={`inline-flex h-12 w-fit items-center rounded-full px-6 text-sm font-semibold transition hover:scale-[1.02] ${buttonClassName}`}
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
