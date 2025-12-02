"use client";

import { useState } from "react";

type ImpactKey = "cv" | "ml" | "pm";

type ImpactItem = {
  key: ImpactKey;
  title: string;
  savings: string;
  before: string[];
  after: string[];
};

const impacts: ImpactItem[] = [
  {
    key: "cv",
    title: "Компьютерное зрение",
    savings: "$63k/год",
    before: [
      "Невыявленные дефекты: 5%",
      "Брак: 3.2%",
      "QC скорость: 350 ед/мин",
      "Трудозатраты QC: $70k/год",
    ],
    after: [
      "Невыявленные дефекты: 0.4%",
      "Брак: 0.7%",
      "QC скорость: 8000 ед/мин",
      "Трудозатраты QC: $42k/год",
    ],
  },
  {
    key: "ml",
    title: "ML оптимизация процессов",
    savings: "$96k/год",
    before: [
      "Вариативность процесса: 12%",
      "Перерасход сырья: 10%",
      "Энергия: $300k/год",
      "Лишние простои: 12 ч/мес",
    ],
    after: [
      "Вариативность процесса: 8%",
      "Перерасход сырья: 2%",
      "Энергия: $264k/год",
      "Лишние простои: 5 ч/мес",
    ],
  },
  {
    key: "pm",
    title: "Предиктивное обслуживание",
    savings: "$165k/год",
    before: [
      "Неплан. простои: 15 ч/мес",
      "Стоимость часа простоя: $1500",
      "ТО: $90k/год",
      "Срок службы: 8 лет",
    ],
    after: [
      "Неплан. простои: 3 ч/мес",
      "Стоимость часа простоя: $1500",
      "ТО: $45k/год",
      "Срок службы: 10 лет",
    ],
  },
];

export function AiImpact() {
  const [open, setOpen] = useState<ImpactKey | null>(null);

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">AI-эффект</h2>
        <span className="text-sm text-[var(--text-muted)]">
          Нажмите, чтобы раскрыть детали
        </span>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        {impacts.map((item) => {
          const isOpen = open === item.key;
          return (
            <div
              key={item.key}
              className={`card border border-[var(--border)] bg-[#0f131f] transition ${
                isOpen ? "shadow-[0_12px_26px_rgba(107,157,255,0.18)]" : ""
              }`}
              onMouseEnter={() => setOpen(item.key)}
              onMouseLeave={() => setOpen(null)}
              onClick={() => setOpen(isOpen ? null : item.key)}
            >
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm text-[var(--text-muted)]">
                    {item.title}
                  </p>
                  <p className="text-lg font-semibold text-[var(--text-strong)]">
                    Экономия: {item.savings}
                  </p>
                </div>
                <span
                  className={`text-[var(--text-muted)] transition-transform ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ▶
                </span>
              </div>
              {isOpen && (
                <div className="grid grid-cols-2 gap-3 border-t border-[var(--border)] p-4 text-sm text-[var(--text-muted)]">
                  <div>
                    <p className="font-semibold text-[var(--text-strong)]">
                      До
                    </p>
                    <ul className="mt-2 space-y-1">
                      {item.before.map((line) => (
                        <li key={line}>• {line}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-strong)]">
                      После
                    </p>
                    <ul className="mt-2 space-y-1">
                      {item.after.map((line) => (
                        <li key={line}>• {line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
