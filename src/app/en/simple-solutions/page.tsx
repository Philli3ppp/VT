import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";
import { navItemsEn } from "@/content/navItemsEn";

const quickAlertsEn = [
  "Water leak — “Leak detected in zone X”",
  "Panel overheating — “Temperature above 45°C”",
  "Pressure drop — “Pressure below threshold”",
  "Pump/motor vibration — “Vibration exceeded, possible wear”",
  "Low tank level — “Level below normal”",
  "Warehouse temperature — “Out of range”",
  "Door open off-hours — “Warehouse open at night”",
  "Oil leak — “Leak near equipment”",
  "CO₂ threshold — “Gas concentration above norm”",
  "Power loss — “Power line disconnected”",
];

const stepsEn = [
  { title: "Assessment", desc: "1–2 days, pick the zone and success criteria" },
  { title: "Pilot", desc: "1–2 weeks, 1–3 sensors, Telegram/email alerts" },
  { title: "Scale up", desc: "Add nodes, integrations, dashboards" },
];

export default function SimpleSolutionsEn() {
  return (
    <>
      <Header navItems={navItemsEn} ctaPrimaryText="Request a demo" />
      <main className="content-wrap container space-y-14 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
              Simple solutions
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              1 sensor → 1 alert
            </h1>
            <p className="text-[var(--text-muted)]">
              Launch IoT in 1 day (if components are on hand). Clear alerts to
              Telegram/email, without heavy automation. Can grow into the full
              platform later.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary">Request pricing</button>
              <button className="btn btn-secondary btn-contact">
                Request a demo
              </button>
            </div>
          </div>
          <div className="card border border-[var(--border)] p-5">
            <h3 className="text-lg font-semibold">Fast pilot</h3>
            <p className="mt-2 text-[var(--text-muted)]">
              Connect 1–3 sensors, set alerts, verify connectivity and data
              quality. You can expand yourself or with our support.
            </p>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              <li>• Power: 220V/PoE/battery</li>
              <li>• Links: RS485/Modbus/LoRa/MQTT</li>
              <li>• Integrations: Telegram, email, webhooks</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Alert examples</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickAlertsEn.map((item) => (
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
          <h2 className="text-2xl font-semibold">How to launch fast</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {stepsEn.map((step) => (
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
          title="Request pilot pricing"
          subtitle="1–3 sensors, Telegram alerts, launch in 1 day if components are ready."
          primaryText="Request pricing"
          secondaryText="Request a demo"
        />
      </main>
      <div className="footer-note">Veld Tech. PE — industrial IoT</div>
    </>
  );
}
