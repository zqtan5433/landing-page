"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterProps = {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
};

export function BeforeAfter({
  before,
  after,
  beforeLabel,
  afterLabel,
}: BeforeAfterProps) {
  const [value, setValue] = useState(52);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden select-none sm:aspect-[5/4]">
      <Image src={after} alt="" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
        <div className="relative h-full" style={{ width: `${10000 / value}%` }}>
          <Image src={before} alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow"
        style={{ left: `${value}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-semibold text-zinc-900 shadow">
          ↔
        </div>
      </div>
      <input
        type="range"
        min={8}
        max={92}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        aria-label="Before and after comparison"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
      <span className="absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
        {afterLabel}
      </span>
    </div>
  );
}
