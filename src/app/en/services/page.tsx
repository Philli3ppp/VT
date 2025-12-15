import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";
import { navItemsEn } from "@/content/navItemsEn";

const servicesEn = [
  "Turnkey IoT: audit, sensor/equipment selection, architecture, pilot (PoC), full rollout with training.",
  "Installation/commissioning: sensors, gateways/controllers, enterprise network, protocols (Modbus/RS485/MQTT), calibration.",
  "Custom builds: PCBs, firmware (ESP32/MCU/Linux boards), APIs and integrations (ERP/MES/1C/Odoo/SAP), backend (Python/Node/containers), UI/UX/dashboards.",
  "IoT platform: VT platform setup, dashboards/charts/alerts/reports, on-prem or cloud, roles/access, data export.",
  "Smart automation: rules and scenarios, control actuators (fans/valves/pumps/relays), local and cloud logic, intelligent triggers.",
  "Analytics and efficiency: downtime reduction, energy analysis, vibration/parameter diagnostics, process analytics, reports.",
  "AI integration: data capture for AI, models (anomaly detection, failure prediction), AI insights in dashboards, automation from AI outputs.",
  "Service and support: helpdesk, sensor checks, updates (OTA/server/UI), monitoring, SLA 24/7.",
  "Cloud and on-prem servers: deploy locally, cloud (VPS/containers) or hybrid, data backups, security and logging.",
  "Security: TLS1.3/AES-256, device authentication, segmented IoT network, logs/audit, protection from spoofing/sabotage.",
  "CV, local LLMs and agents: image/video processing on-site, local models without data leaving the plant, agents for monitoring/alerts/actions.",
];

const stepsEn = [
  { title: "Discovery", desc: "Audit, inventory, success metrics" },
  { title: "Design", desc: "Architecture, specs, protocol choices" },
  { title: "Prototype/Pilot", desc: "1–3 nodes, validate data and alerts" },
  { title: "Deploy", desc: "Installation/commissioning, integrations, training" },
  { title: "Support", desc: "SLA, OTA/server/UI updates" },
];

export default function ServicesEn() {
  return (
    <>
      <Header navItems={navItemsEn} ctaPrimaryText="Request a demo" />
      <main className="content-wrap container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-b)]">
            Services
          </p>
          <p className="text-[var(--text-muted)]">
            Full cycle: from survey and prototype to rollout, training, and
            support. Customers can choose self-service or a service contract.
          </p>
        </section>

        <section className="grid gap-3 md:grid-cols-2">
          {servicesEn.map((item) => (
            <div
              key={item}
              className="card border border-[var(--border)] p-4 text-[var(--text-muted)] transition hover:-translate-y-1 hover:border-[var(--accent-b)]"
            >
              {item}
            </div>
          ))}
        </section>

        <section className="space-y-4" id="how">
          <h2 className="text-2xl font-semibold">How we work</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
          title="Request a work plan"
          subtitle="We’ll estimate scope, propose a pilot, and plan full rollout. On-prem or cloud."
          primaryText="Request a plan"
          secondaryText="Estimate project"
          primaryHref="/en/contacts"
          secondaryHref="/en/contacts"
        />
      </main>
      <div className="footer-note">Veld Tech. PE — industrial IoT</div>
    </>
  );
}
