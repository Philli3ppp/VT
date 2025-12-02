import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";

const quickAlerts = [
  "Протечка воды — «Обнаружена протечка в зоне X»",
  "Перегрев шкафа управления — «Температура выше 45°C»",
  "Падение давления — «Давление упало ниже порога»",
  "Вибрация насоса/двигателя — «Превышение вибрации, возможен износ»",
  "Низкий уровень воды в баке — «Уровень ниже нормы»",
  "Превышение температуры на складе — «Температура вне диапазона»",
  "Открытие двери вне графика — «Склад открыт ночью»",
  "Утечка масла — «Утечка возле оборудования»",
  "Превышение CO₂ — «Концентрация газа выше нормы»",
  "Потеря питания — «Отключение линии питания»",
];

const steps = [
  { title: "Оценка", desc: "1–2 дня, задача/зона, критерии успеха" },
  { title: "Пилот", desc: "1–2 недели, 1–3 датчика, Telegram-уведомления" },
  { title: "Масштабирование", desc: "Добавляем узлы, интеграции, дашборды" },
];

export default function SimpleSolutions() {
  return (
    <>
      <Header
        navItems={[
          { label: "Главная", href: "/" },
          { label: "Отрасли", href: "/solutions-by-industry" },
          { label: "Продукты", href: "/products-platform" },
          { label: "Услуги", href: "/services" },
          { label: "Безопасность", href: "/security" },
        ]}
      />
      <main className="content-wrap container space-y-14 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
              Простые решения
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              1 датчик → 1 уведомление
            </h1>
            <p className="text-[var(--text-muted)]">
              Быстрый старт IoT за 1 день (при наличии компонентов). Чёткие
              уведомления в Telegram, без сложной автоматизации. Можно
              расширять до полной платформы.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary">Узнать стоимость</button>
              <button className="btn btn-secondary btn-contact">
                Запросить демо
              </button>
            </div>
          </div>
          <div className="card border border-[var(--border)] p-5">
            <h3 className="text-lg font-semibold">Быстрый пилот</h3>
            <p className="mt-2 text-[var(--text-muted)]">
              Подключаем 1–3 датчика, настраиваем уведомления, проверяем связь и
              качество данных. Заказчик может расширить самостоятельно или с
              нашей поддержкой.
            </p>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              <li>• Питание: 220В/PoE/батарея</li>
              <li>• Связь: RS485/Modbus/LoRa/MQTT</li>
              <li>• Интеграция: Telegram, email, вебхуки</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Примеры уведомлений</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickAlerts.map((item) => (
              <div
                key={item}
                className="card border border-[var(--border)] p-4 text-[var(--text-muted)] transition hover:-translate-y-1 hover:border-[var(--accent-b)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Как внедрить быстро</h2>
          <div className="grid gap-3 sm:grid-cols-3">
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
          title="Узнать стоимость пилота"
          subtitle="1–3 датчика, уведомления в Telegram, запуск за 1 день при наличии компонентов."
          primaryText="Узнать стоимость"
          secondaryText="Запросить демо"
        />
      </main>
      <div className="footer-note">
        ЧП «Вельд Техно» — промышленный IoT
      </div>
    </>
  );
}
