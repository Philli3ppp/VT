import type { Step } from "./processSteps";

export const processStepsEn: Step[] = [
  {
    title: "Step 1. Discovery",
    detail:
      "Site survey, current data, bottlenecks (downtime, scrap, energy). Pick 3–5 use cases with the best ROI.",
  },
  {
    title: "Step 2. Scope & ROI",
    detail:
      "Fix expected savings, costs, and integrations (SCADA/PLC/MES/ERP). Example: scrap 3.4%→1.1%, ROI ~2.6 months.",
  },
  {
    title: "Step 3. IIoT foundation",
    detail:
      "Sensors for vibration/temperature/current/pressure/CV/acoustics/RFID, gateways (Modbus/OPC-UA/MQTT/RS485/4–20mA/LoRa), data bus and asset map.",
  },
  {
    title: "Step 4. Data collection",
    detail:
      "CV: 30–80k images + defect labels. Acoustics: baseline modes and events. IoT/ML: vibration/temperature/current/pressure/flow telemetry.",
  },
  {
    title: "Step 5. Pilot (PoC)",
    detail:
      "One line / one goal / one result (6–10 weeks): CV ≤0.5% errors, PredMaintenance alert 7–14 days ahead, process ML (gas -12…-25%). Recalculate ROI.",
  },
  {
    title: "Step 6. IT/OT integration",
    detail:
      "Connect PLC/SCADA/MES/ERP via OPC-UA/MQTT/Modbus/LoRa; data streams, alerts (Telegram/SCADA), dashboards and roles.",
  },
  {
    title: "Step 7. Scale + MLOps",
    detail:
      "Copy models across lines, more control stations, central AI hub; updates, drift control, logs, versioning, retraining.",
  },
  {
    title: "Step 8. Training & improvement",
    detail:
      "Train teams, handle anomalies, mark events, monthly error analysis, add sensors if needed, OTA updates.",
  },
];
