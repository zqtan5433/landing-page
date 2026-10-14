"use client";

import { useMemo, useState } from "react";

type Plan = {
  name: string;
  base: number;
  perSeat: number;
};

type SeatCalculatorProps = {
  title: string;
  body: string;
  seatsLabel: string;
  totalLabel: string;
  ctaLabel: string;
  onCta: (plan: string, seats: number, total: number) => void;
  plans: Plan[];
};

export function SeatCalculator({
  title,
  body,
  seatsLabel,
  totalLabel,
  ctaLabel,
  onCta,
  plans,
}: SeatCalculatorProps) {
  const [seats, setSeats] = useState(12);
  const [planIndex, setPlanIndex] = useState(1);
  const plan = plans[planIndex];
  const total = useMemo(
    () => plan.base + plan.perSeat * seats,
    [plan, seats],
  );

  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-950 sm:p-8">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{body}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {plans.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setPlanIndex(index)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              planIndex === index
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <label className="mt-8 block">
        <div className="mb-3 flex items-center justify-between text-sm font-medium">
          <span>{seatsLabel}</span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900 dark:bg-emerald-400/20 dark:text-emerald-200">
            {seats}
          </span>
        </div>
        <input
          type="range"
          min={3}
          max={80}
          value={seats}
          onChange={(event) => setSeats(Number(event.target.value))}
          className="w-full accent-emerald-600"
        />
      </label>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{totalLabel}</p>
          <p className="mt-1 text-4xl font-semibold tracking-tight">
            ${total}
            <span className="text-base font-normal text-zinc-500">/mo</span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => onCta(plan.name, seats, total)}
          className="inline-flex h-11 items-center rounded-full bg-emerald-500 px-5 text-sm font-semibold text-emerald-950 transition hover:scale-[1.02]"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
