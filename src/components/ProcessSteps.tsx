"use client";

import { useState } from "react";

type Step = {
  title: string;
  detail: string;
};

const steps: Step[] = [
  {
    title: "Анализ / Discovery",
    detail: "Сбор требований, обследование площадки, определение метрик успеха.",
  },
  {
    title: "Проектирование / Design",
    detail: "Архитектура системы, схемы подключения, выбор протоколов и оборудования.",
  },
  {
    title: "Прототип / Prototype",
    detail: "Ограниченное число узлов, проверка сбора данных, настройка алертов.",
  },
  {
    title: "Тест / Test",
    detail: "Совместная проверка, критерии успеха, калибровка порогов, подписанный пилот.",
  },
  {
    title: "Внедрение / Deploy",
    detail: "Монтаж/самостоятельная установка, ПНР, интеграции с ERP/SCADA/MES.",
  },
  {
    title: "Поддержка / Support",
    detail: "Мониторинг, обновления OTA, обучение, SLA 24/7 или self-service.",
  },
];

export function ProcessSteps() {
  const [active, setActive] = useState<Step>(steps[0]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <button
            key={step.title}
            onMouseEnter={() => setActive(step)}
            onFocus={() => setActive(step)}
            onClick={() => setActive(step)}
            className="card text-left border border-[var(--border)] bg-[#0f131f] p-4 transition-all duration-150 hover:-translate-y-1 hover:border-[var(--accent-a)] hover:shadow-[0_12px_26px_rgba(34,197,94,0.22)]"
          >
            <p className="text-sm text-[var(--text-muted)]">Click/hover</p>
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
