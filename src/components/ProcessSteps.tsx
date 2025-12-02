"use client";

import { useState } from "react";
import { processSteps, Step } from "@/content/processSteps";

export function ProcessSteps() {
  const [active, setActive] = useState<Step>(processSteps[0]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <button
            key={step.title}
            onMouseEnter={() => setActive(step)}
            onFocus={() => setActive(step)}
            onClick={() => setActive(step)}
            className="card text-left border border-[var(--border)] bg-[#0f131f] p-4 transition-all duration-150 hover:-translate-y-1 hover:border-[var(--accent-a)] hover:shadow-[0_12px_26px_rgba(34,197,94,0.22)]"
          >
            <p className="text-sm text-[var(--text-muted)]"></p>
            <p className="mt-1 text-lg font-semibold leading-snug">
              {step.title}
            </p>
          </button>
        ))}
      </div>
      <div className="card border border-[var(--border)] bg-[#0f131f] p-5 text-[var(--text-muted)]">
        {active.detail}
      </div>
    </div>
  );
}
