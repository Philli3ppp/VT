"use client";

import { useState } from "react";
import { processSteps, type Step } from "@/content/processSteps";

type ProcessStepsProps = {
  steps?: Step[];
};

export function ProcessSteps({ steps = processSteps }: ProcessStepsProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-2">
      <div className="card border border-[var(--border)] bg-[#0f131f] divide-y divide-[var(--border)]">
        {steps.map((step, idx) => {
          const isOpen = idx === openIndex;
          return (
            <div key={step.title} className="p-4">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <span className="text-base font-semibold text-[var(--text-strong)]">
                  {step.title}
                </span>
                <span
                  className={`transition-transform ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ▶
                </span>
              </button>
              {isOpen && (
                <p className="mt-2 text-[var(--text-muted)] text-sm leading-relaxed">
                  {step.detail}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
