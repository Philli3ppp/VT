import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";
import { navItemsEn } from "@/content/navItemsEn";

const modulesEn = [
  "Data collection: temperature, vibration, pressure, leaks, CO₂, power, motion",
  "Interfaces: RS485/Modbus/4–20 mA/0–10V, MQTT, OPC-UA",
  "Storage: local DB (on request) or cloud, backups and encryption",
  "Visualization: dashboards, charts, thresholds/triggers, notifications, RU/EN",
  "Automation: time/event/value rules, control relays/actuators/valves",
  "Integrations: ERP/SCADA/MES, API, signed OTA with rollback",
];

const customEn = [
  "PCBs (sensors/controllers/gateways)",
  "Firmware (ESP32/microcontrollers/Linux boards)",
  "APIs and integrations (ERP/MES/1C/Odoo/SAP)",
  "Backend (Python/Node.js/containers)",
  "UI/UX and dashboards for the task",
];

export default function ProductsPlatformEn() {
  return (
    <>
      <Header navItems={navItemsEn} ctaPrimaryText="Request a demo" />
      <main className="content-wrap container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
            Platform
          </p>
          <h1 className="text-4xl font-semibold leading-tight">VT Platform</h1>
          <p className="text-[var(--text-muted)]">
            Data collection → storage → visualization → automation. Rights to
            the system/source can be transferred to the customer if required.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-primary" href="/en/contacts">
              Request a demo
            </a>
            <a className="btn btn-secondary btn-contact" href="/en/contacts">
              Contact
            </a>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="card border border-[var(--border)] p-6">
            <h2 className="text-2xl font-semibold">Modules</h2>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              {modulesEn.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card border border-[var(--border)] p-6">
            <h2 className="text-2xl font-semibold">Custom builds</h2>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              {customEn.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-3 text-[var(--text-muted)]">
              Licensing: subscription, perpetual, or source code buyout. On-prem,
              cloud, or hybrid. TLS1.3/AES-256/HMAC, segmentation, signed OTA
              with rollback.
            </p>
          </div>
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Request a platform demo"
          subtitle="We’ll show data capture, dashboards, and automation. On-prem or cloud."
          primaryText="Request a demo"
          secondaryText="Contact"
          primaryHref="/en/contacts"
          secondaryHref="/en/contacts"
        />
      </main>
      <div className="footer-note">Veld Tech. PE — industrial IoT</div>
    </>
  );
}
