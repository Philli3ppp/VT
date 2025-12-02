import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";

const services = [
  "Внедрение IoT под ключ: аудит, подбор датчиков/оборудования, архитектура, пилот (PoC), полное внедрение с обучением.",
  "Установка/настройка оборудования: датчики, шлюзы/контроллеры, сеть предприятия, протоколы (Modbus/RS485/MQTT), калибровка.",
  "Индивидуальные решения: печатные платы, прошивки (ESP32/МК/Linux-платы), API и интеграции (ERP/MES/1С/Odoo/SAP), сервер (Python/Node/контейнеры), UI/UX/дашборды.",
  "Платформа IoT: настройка платформы VT, дашборды/графики/уведомления/отчёты, локальный/облачный режим, роли/доступ, экспорт данных.",
  "Умная автоматизация: сценарии/правила, управление исполнительными устройствами (вентиляторы/клапаны/насосы/реле), локальная и облачная логика, интеллектуальные триггеры.",
  "Аналитика и эффективность: снижение простоев, анализ энергии, диагностика по вибрации/параметрам, аналитика процессов, отчёты.",
  "Интеграция ИИ: система сбора данных для ИИ, модели (анализ отклонений, прогноз отказов), выводы ИИ в дашбордах, автоматизация на базе выводов.",
  "Обслуживание и сопровождение: техподдержка, проверка датчиков, обновления (OTA/сервер/UI), мониторинг корректности, SLA 24/7.",
  "Облачные и локальные серверы: развёртывание локально, облако (VPS/контейнеры) или гибрид, резервирование данных, безопасность и журналирование.",
  "Безопасность: TLS1.3/AES-256, аутентификация устройств, сегментация IoT-сети, логи/аудит, защита от подмены/саботажа.",
  "CV, локальные LLM и агенты: обработка изображений/видео с камер, локальные модели без передачи данных наружу, агенты для мониторинга/оповещений и действий.",
];

const steps = [
  { title: "Анализ", desc: "Аудит, инвентаризация, критерии успеха" },
  { title: "Проект", desc: "Архитектура, спецификации, выбор протоколов" },
  { title: "Прототип/пилот", desc: "1–3 узла, проверка данных и алертов" },
  { title: "Внедрение", desc: "Монтаж/ПНР, интеграции, обучение" },
  { title: "Поддержка", desc: "SLA, обновления OTA/сервер/UI" },
];

export default function Services() {
  return (
    <>
      <Header />
      <main className="content-wrap container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-b)]">
            Услуги
          </p>
          <p className="text-[var(--text-muted)]">
            Полный цикл: от обследования и прототипа до внедрения, обучения и
            поддержки. Заказчик может выбрать self-service или сервисный
            контракт.
          </p>
        </section>

        <section className="grid gap-3 md:grid-cols-2">
          {services.map((item) => (
            <div
              key={item}
              className="card border border-[var(--border)] p-4 text-[var(--text-muted)] transition hover:-translate-y-1 hover:border-[var(--accent-b)]"
            >
              {item}
            </div>
          ))}
        </section>

        <section className="space-y-4" id="how">
          <h2 className="text-2xl font-semibold">Как работаем</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="card border border-[var(--border)] p-4"
              >
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Запросить план работ"
          subtitle="Оценим объём, предложим пилот и полное внедрение. Локально или в облаке."
          primaryText="Запросить план"
          secondaryText="Оценить проект"
        />
      </main>
      <div className="footer-note">
        ЧП «Вельд Техно» — промышленный IoT
      </div>
    </>
  );
}
