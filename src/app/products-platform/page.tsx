import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";

const modules = [
  "Сбор данных: температура, вибрация, давление, утечки, CO₂, питание, движение",
  "Интерфейсы: RS485/Modbus/4–20 mA/0–10V, MQTT, OPC-UA",
  "Хранение: локальная БД (по требованию) или облако, резервирование и шифрование",
  "Отображение: дашборды, графики, пороги/триггеры, уведомления, RU/EN",
  "Автоматизация: правила по времени/событиям/значениям, управление реле/приводами/клапанами",
  "Интеграции: ERP/SCADA/MES, API, OTA с подписью и откатом",
];

const custom = [
  "Печатные платы (датчики/контроллеры/шлюзы)",
  "Прошивки (ESP32/микроконтроллеры/Linux-платы)",
  "API и интеграции (ERP/MES/1С/Odoo/SAP)",
  "Серверная разработка (Python/Node.js/контейнеры)",
  "UI/UX и дашборды под задачу",
];

export default function ProductsPlatform() {
  return (
    <>
      <Header
        navItems={[
          { label: "Главная", href: "/" },
          { label: "Простые решения", href: "/simple-solutions" },
          { label: "Отрасли", href: "/solutions-by-industry" },
          { label: "Услуги", href: "/services" },
          { label: "Безопасность", href: "/security" },
        ]}
      />
      <main className="content-wrap container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
            Платформа
          </p>
          <h1 className="text-4xl font-semibold leading-tight">Платформа VT</h1>
          <p className="text-[var(--text-muted)]">
            Сбор данных → хранение → визуализация → автоматизация. Права на
            систему/исходники могут переходить заказчику по договорённости.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary">Запросить демо</button>
            <button className="btn btn-secondary btn-contact">Связаться</button>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="card border border-[var(--border)] p-6">
            <h2 className="text-2xl font-semibold">Модули</h2>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              {modules.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card border border-[var(--border)] p-6">
            <h2 className="text-2xl font-semibold">Индивидуальные решения</h2>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              {custom.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-3 text-[var(--text-muted)]">
              Лицензирование: подписка, perpetual, выкуп исходников. Локальный,
              облачный или гибридный режим. TLS1.3/AES-256/HMAC, сегментация,
              OTA с подписью и откатом.
            </p>
          </div>
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Запросить демо платформы"
          subtitle="Покажем сбор данных, дашборды и автоматизацию. Локальный или облачный режим."
          primaryText="Запросить демо"
          secondaryText="Связаться"
        />
      </main>
    </>
  );
}
