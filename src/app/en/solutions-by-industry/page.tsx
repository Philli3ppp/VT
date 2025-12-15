import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";
import { navItemsEn } from "@/content/navItemsEn";

const industriesEn = [
  {
    title: "Metals & machining",
    items: [
      "Vibration diagnostics of machines",
      "Power consumption monitoring",
      "Warehouse microclimate control",
      "Furnace and thermal zone temperatures",
      "CO gas control for welding areas",
    ],
  },
  {
    title: "Food production",
    items: [
      "Cold room temperature/humidity",
      "CO₂ control in fermentation",
      "Raw material tracking (QR/RFID)",
      "Water/steam/gas consumption",
      "Downtime tracking and plan/fact board",
    ],
  },
  {
    title: "Logistics & warehouses",
    items: [
      "Pallet tracking with RFID/QR",
      "Storage zone temperature",
      "Warehouse doors control",
      "Equipment energy usage",
      "Fire and smoke monitoring",
    ],
  },
  {
    title: "Energy",
    items: [
      "Boiler pressure/temperature control",
      "Pump/compressor vibration",
      "Gas leak detection",
      "Fuel consumption tracking",
      "Heat exchanger efficiency",
    ],
  },
  {
    title: "Chemicals / pharma / coatings",
    items: [
      "VOC control",
      "Reactor and tank temperatures",
      "Chemical leak detection",
      "Pipeline pressure",
      "Reagent warehouse microclimate",
    ],
  },
  {
    title: "Textile",
    items: [
      "Humidity in workshops",
      "Equipment temperature",
      "Line downtime tracking",
      "Steam and water usage",
      "Fabric batch tracking",
    ],
  },
  {
    title: "Woodworking",
    items: [
      "Wood humidity control",
      "Bearing temperatures",
      "Motor load",
      "Fire control in aspiration systems",
      "Finished goods tracking",
    ],
  },
  {
    title: "Agro / greenhouses",
    items: [
      "Climate parameters",
      "CO₂ and ventilation",
      "Water level and silos",
      "Grain storage temperature",
      "GPS tracking of machinery",
    ],
  },
  {
    title: "Building materials",
    items: [
      "Raw material moisture",
      "Mixer monitoring",
      "Molding chamber temperature",
      "Product batch tracking",
      "Warehouse analytics",
    ],
  },
  {
    title: "Oil & gas",
    items: [
      "Pipeline pressure and temperature",
      "Gas analyzers (H₂S, CH₄)",
      "Pump station vibration",
      "Oil and gas leak detection",
      "Remote well monitoring",
    ],
  },
];

export default function SolutionsByIndustryEn() {
  return (
    <>
      <Header navItems={navItemsEn} ctaPrimaryText="Request a demo" />
      <main className="content-wrap container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-b)]">
            Industry solutions
          </p>
          <p className="text-[var(--text-muted)]">
            For every industry: problem → solution (sensors/analytics/integration)
            → measurable effect. On-prem or cloud, data stays with the customer.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {industriesEn.map((industry) => (
            <div
              key={industry.title}
              className="card border border-[var(--border)] p-5 transition duration-150 hover:-translate-y-1 hover:border-[var(--accent-b)]"
            >
              <h3 className="text-xl font-semibold">{industry.title}</h3>
              <ul className="mt-3 space-y-1 text-[var(--text-muted)]">
                {industry.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <button className="mt-3 text-sm font-semibold text-[var(--accent-b)]">
                Discuss your industry →
              </button>
            </div>
          ))}
        </section>

        <CtaBlock
          eyebrow="CTA"
          title="Discuss your industry"
          subtitle="We’ll pick a pilot for your site, connect 1–3 zones, and show the effect."
          primaryText="Request a demo"
          secondaryText="Contact"
        />
      </main>
      <div className="footer-note">Veld Tech. PE — industrial IoT</div>
    </>
  );
}
