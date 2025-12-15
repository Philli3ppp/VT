import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";
import { navItemsEn } from "@/content/navItemsEn";

const sectionsEn = [
  {
    title: "Network and access",
    points: [
      "Segmentation (separate VLAN), VPN/ZeroTrust, least privilege",
      "RBAC, MFA for admins, click-to-reveal contacts",
    ],
  },
  {
    title: "Encryption and signing",
    points: [
      "TLS 1.3 for external connections",
      "AES-256 locally, HMAC-SHA256 for message signing",
      "Integrity checks for updates",
    ],
  },
  {
    title: "Devices and OTA",
    points: [
      "Device registration/certificates",
      "Version control, signed OTA with rollback",
    ],
  },
  {
    title: "Logs and audit",
    points: [
      "Connection history, admin activity log",
      "Config logs, anomaly alerts",
    ],
  },
  {
    title: "Deployment",
    points: [
      "On-prem server (data stays on site) or cloud/VPS, hybrid",
      "Local cache if the link drops, backup power for gateways",
    ],
  },
  {
    title: "Compliance and rights",
    points: [
      "ISO/IEC 27001, IEC 62443, NIST, GDPR if needed",
      "Data and system belong to the customer; source transfer by agreement",
    ],
  },
];

const threatsEn = [
  "Device spoofing → HMAC + unique tokens",
  "Data interception → TLS/AES",
  "Unauthorized access → RBAC/2FA",
  "Network attacks → VLAN/firewall",
  "Sabotage → logs + signing",
];

export default function SecurityPageEn() {
  return (
    <>
      <Header navItems={navItemsEn} ctaPrimaryText="Request a demo" />
      <main className="content-wrap container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
            Security
          </p>
          <h1 className="text-4xl font-semibold leading-tight">Security</h1>
          <p className="text-[var(--text-muted)]">
            Protecting data and infrastructure: encryption, segmentation,
            signed OTA, on-prem deployments if required. Data belongs to the
            customer.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {sectionsEn.map((section) => (
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
          <h2 className="text-2xl font-semibold">Common threats and controls</h2>
          <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
            {threatsEn.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Request the security policy"
          subtitle="Policies, segmentation settings, cryptography, OTA, and audit."
          primaryText="Request policy"
          secondaryText="Contact"
        />
      </main>
      <div className="footer-note">Veld Tech. PE — industrial IoT</div>
    </>
  );
}
