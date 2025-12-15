import Image from "next/image";
import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";
import { ProcessSteps } from "@/components/ProcessSteps";
import { navItemsEn } from "@/content/navItemsEn";
import { processStepsEn } from "@/content/processStepsEn";

const benefitsEn = [
  "Less downtime, predictable service",
  "Integrations with ERP/SCADA/MES without breaking processes",
  "On-prem or cloud, data stays with the customer",
];

export default function HomeEn() {
  return (
    <>
      <Header navItems={navItemsEn} ctaPrimaryText="Request a demo" />
      <main className="content-wrap container space-y-16 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-b)]">
              Industrial IoT
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Improve efficiency of your facility
            </h1>
            <p className="text-lg text-[var(--text-muted)]">
              IoT monitoring, analytics, and automation. On-prem or in the
              cloud. Custom dashboards and integrations with existing systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/en/contacts">
                Request a demo
              </a>
              <a className="btn btn-secondary btn-contact" href="/en/contacts">
                Contact
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="card border border-[var(--border)] p-4">
                <p className="text-sm text-[var(--text-muted)]">Downtime</p>
                <p className="text-3xl font-bold">-18%</p>
                <p className="text-sm text-[var(--text-muted)]">
                  After a 90-day pilot
                </p>
              </div>
              <div className="card border border-[var(--border)] p-4">
                <p className="text-sm text-[var(--text-muted)]">Uptime</p>
                <p className="text-3xl font-bold">99.2%</p>
                <p className="text-sm text-[var(--text-muted)]">
                  With segmented IoT network
                </p>
              </div>
            </div>
          </div>
          <div className="card border border-[var(--border)] p-6">
            <h3 className="text-xl font-semibold">IoT → AI</h3>
            <p className="mt-3 text-[var(--text-muted)]">
              AI in production needs reliable data capture. IoT gives sensors,
              links, and tools so AI can see the process and act on it.
            </p>
            <div className="mt-13 flex justify-center">
              <Image
                src="/sensor-to-db.svg"
                alt="Data flow from sensor to database"
                width={420}
                height={220}
                priority
              />
            </div>
          </div>
        </section>

        <section className="space-y-6" id="process">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Process: from discovery to support
            </h2>
          </div>
          <ProcessSteps steps={processStepsEn} />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]" id="products">
          <div className="card border border-[var(--border)] p-6">
            <h2 className="text-2xl font-semibold">Products and platform</h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Data collection → storage → visualization → automation. Rights to
              the system/source can be transferred to the customer by
              agreement.
            </p>
            <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
              <li>• Sensors: temperature, vibration, pressure, leaks, CO₂</li>
              <li>• Interfaces: RS485/Modbus/4–20 mA/0–10V, MQTT, OPC-UA</li>
              <li>• Storage: local DB or cloud, backups</li>
              <li>
                • Automation: rules, alerts, control relays/valves/actuators
              </li>
              <li>
                • Integrations: ERP/SCADA/MES, API, signed OTA with rollback
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/en/contacts">
                Request a demo
              </a>
              <a className="btn btn-secondary btn-contact" href="/en/contacts">
                Contact
              </a>
            </div>
          </div>
          <div className="card border border-[var(--border)] p-6">
            <h3 className="text-xl font-semibold">Result</h3>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              {benefitsEn.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-[var(--text-muted)]">
              TLS1.3/AES-256/HMAC, network segmentation, audit logs, local or
              cloud mode, local cache if the link drops.
            </div>
          </div>
        </section>

        <div id="contact">
          <CtaBlock
            eyebrow="CTA"
            title="Start with a 30-day pilot"
            subtitle="Minimal sensors, clear notifications, secure setup."
            primaryText="Request a demo"
            secondaryText="Contact"
            primaryHref="/en/contacts"
            secondaryHref="/en/contacts"
          />
        </div>
      </main>
      <div className="footer-note">Veld Tech. PE — industrial IoT.</div>
    </>
  );
}
