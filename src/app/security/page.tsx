import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";

const sections = [
  {
    title: "Сеть и доступ",
    points: [
      "Сегментация (отдельный VLAN), VPN/ZeroTrust, минимальные права",
      "RBAC, MFA для админов, click-to-reveal контакты",
    ],
  },
  {
    title: "Шифрование и подпись",
    points: [
      "TLS 1.3 для внешних соединений",
      "AES-256 локально, HMAC-SHA256 подпись сообщений",
      "Проверка целостности обновлений",
    ],
  },
  {
    title: "Устройства и OTA",
    points: [
      "Регистрация/сертификаты устройств",
      "Управление версиями, OTA с подписью и откатом",
    ],
  },
  {
    title: "Логи и аудит",
    points: [
      "История подключений, журнал действий администраторов",
      "Логи конфигураций, алерты на аномалии",
    ],
  },
  {
    title: "Развёртывание",
    points: [
      "Локальный сервер (данные не покидают периметр) или облако/VPS, гибрид",
      "Локальный кэш при потере связи, резервное питание шлюзов",
    ],
  },
  {
    title: "Соответствие и права",
    points: [
      "ISO/IEC 27001, IEC 62443, NIST, GDPR при необходимости",
      "Права на данные и систему принадлежат заказчику, передача исходников по договорённости",
    ],
  },
];

const threats = [
  "Подмена устройства → HMAC + уникальные токены",
  "Перехват данных → TLS/AES",
  "Несанкционированный доступ → RBAC/2FA",
  "Взлом по сети → VLAN/firewall",
  "Саботаж → логи + подпись",
];

export default function SecurityPage() {
  return (
    <>
      <Header
        navItems={[
          { label: "Главная", href: "/" },
          { label: "Простые решения", href: "/simple-solutions" },
          { label: "Отрасли", href: "/solutions-by-industry" },
          { label: "Продукты", href: "/products-platform" },
          { label: "Услуги", href: "/services" },
        ]}
      />
      <main className="container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
            Security
          </p>
          <h1 className="text-4xl font-semibold leading-tight">
            Безопасность / Security
          </h1>
          <p className="text-[var(--text-muted)]">
            Защищаем данные и инфраструктуру: шифрование, сегментация, OTA с
            подписью, локальные установки по требованию. Данные принадлежат
            заказчику.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="card border border-[var(--border)] p-5"
            >
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <ul className="mt-2 space-y-2 text-[var(--text-muted)]">
                {section.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="card border border-[var(--border)] p-5">
          <h2 className="text-2xl font-semibold">Типовые угрозы и меры</h2>
          <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
            {threats.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Запросить политику безопасности"
          subtitle="Политики, настройки сегментации, криптография, OTA и аудит."
          primaryText="Request security brief"
          secondaryText="Contact"
        />
      </main>
    </>
  );
}
