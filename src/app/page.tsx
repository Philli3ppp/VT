import { ProcessSteps } from "@/components/ProcessSteps";
import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";

const industries = [
  {
    title: "Металлургия",
    text: "Вибродиагностика, энергомониторинг, контроль температур печей и газовый контроль CO.",
  },
  {
    title: "Пищевая",
    text: "Температура/влажность камер, CO₂ в брожении, трекинг сырья, расход воды/пара/газа.",
  },
  {
    title: "Логистика и склады",
    text: "RFID/QR паллет, контроль дверей, температура зон, пожарный мониторинг.",
  },
  {
    title: "Энергетика",
    text: "Давление/температура, вибро насосов/компрессоров, утечки газа, эффективность теплообменников.",
  },
];

const benefits = [
  "Снижение простоев и предсказуемый сервис",
  "Интеграция с ERP/SCADA/MES без ломки процессов",
  "Локально или в облаке, данные принадлежат заказчику",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="content-wrap container space-y-16 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-b)]">
              Промышленный IoT
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Повышаем эффективность вашего производства
            </h1>
            <p className="text-lg text-[var(--text-muted)]">
              IoT-мониторинг, аналитика и автоматизация. Локально или в облаке,
              с возможностью передачи прав на систему по договорённости.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary">Запросить демо</button>
              <button className="btn btn-secondary btn-contact">Связаться</button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="card border border-[var(--border)] p-4">
                <p className="text-sm text-[var(--text-muted)]">Downtime</p>
                <p className="text-3xl font-bold">-18%</p>
                <p className="text-sm text-[var(--text-muted)]">
                  После 90 дней пилота
                </p>
              </div>
              <div className="card border border-[var(--border)] p-4">
                <p className="text-sm text-[var(--text-muted)]">Uptime</p>
                <p className="text-3xl font-bold">99.2%</p>
                <p className="text-sm text-[var(--text-muted)]">
                  За счёт сегментации IoT сети
                </p>
              </div>
            </div>
          </div>
          <div className="card border border-[var(--border)] p-6">
            <h3 className="text-xl font-semibold">IoT → AI</h3>
            <p className="mt-3 text-[var(--text-muted)]">
              Внедрение ИИ невозможно без инфраструктуры сбора данных. IoT даёт
              датчики, каналы связи и инструменты, через которые ИИ видит
              процессы и может управлять ими.
            </p>
            <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
              <li>• Датчики: вибрация, температура, давление, энергия</li>
              <li>• Каналы: RS485/Modbus/4–20mA/0–10V, MQTT, OPC-UA</li>
              <li>• Управление: правила, алерты, OTA, API/ERP/SCADA/MES</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6" id="process">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Процесс: от анализа до поддержки</h2>
            <span className="text-sm text-[var(--text-muted)]">
              6 этапов, интерактивные детали
            </span>
          </div>
          <ProcessSteps />
        </section>

        <section className="space-y-4" id="solutions">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Отраслевые решения</h2>
            <a className="text-sm text-[var(--accent-b)]" href="#contact">
              Обсудить вашу отрасль →
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {industries.map((item) => (
              <div
                key={item.title}
                className="card border border-[var(--border)] p-5 transition duration-150 hover:-translate-y-1 hover:border-[var(--accent-b)]"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{item.text}</p>
                <button className="mt-3 text-sm font-semibold text-[var(--accent-b)]">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]" id="products">
          <div className="card border border-[var(--border)] p-6">
            <h2 className="text-2xl font-semibold">Продукты и платформа</h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Сбор данных → хранение → визуализация → автоматизация. Права на
              систему/исходники могут переходить заказчику по договорённости.
            </p>
            <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
              <li>• Датчики: температура, вибрация, давление, утечки, CO₂</li>
              <li>• Интерфейсы: RS485/Modbus/4–20 mA/0–10V, MQTT, OPC-UA</li>
              <li>• Хранение: локальная БД или облако, резервирование</li>
              <li>• Автоматизация: правила, уведомления, управление реле/клапанами</li>
              <li>• Интеграции: ERP/SCADA/MES, API, OTA с подписью и откатом</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn btn-primary">Запросить демо</button>
              <button className="btn btn-secondary btn-contact">Связаться</button>
            </div>
          </div>
          <div className="card border border-[var(--border)] p-6">
            <h3 className="text-xl font-semibold">Результат</h3>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              {benefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-[var(--text-muted)]">
              TLS1.3/AES-256/HMAC, сегментация сети, аудит действий,
              локальный/облачный режим, локальный кэш при потере связи.
            </div>
          </div>
        </section>

        <div id="contact">
          <CtaBlock
            eyebrow="CTA"
            title="Запустим пилот за 30 дней"
            subtitle="Минимум датчиков, ясные уведомления, безопасное подключение."
            primaryText="Запросить демо"
            secondaryText="Связаться"
          />
        </div>
      </main>
      <div className="footer-note">
        ЧП «Вельд Техно» — промышленный IoT
      </div>
    </>
  );
}
