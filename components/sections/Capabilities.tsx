"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const DIVIDER = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(106,69,155,0.28), transparent)",
} as const;

const labelStyle = {
  fontFamily: "var(--font-raleway, Raleway, sans-serif)",
  fontWeight: 400,
  fontSize: "13px",
  color: "rgba(255,255,255,0.45)",
  letterSpacing: "0.02em",
} as const;

const valueStyle = {
  fontFamily: "var(--font-raleway, Raleway, sans-serif)",
  fontWeight: 400,
  fontSize: "14px",
  color: "rgba(255,255,255,0.88)",
} as const;

const monoValueStyle = {
  fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
  fontWeight: 500,
  fontSize: "14px",
  color: "rgba(255,255,255,0.88)",
} as const;

const eyebrowStyle = {
  display: "inline-block",
  fontFamily: "var(--font-raleway, Raleway, sans-serif)",
  fontWeight: 500,
  fontSize: "11px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.20em",
  color: "#6A459B",
  border: "1px solid rgba(106,69,155,0.35)",
  borderRadius: "9999px",
  padding: "4px 14px",
  background: "rgba(106,69,155,0.08)",
  marginBottom: "16px",
} as const;

function CapRow({
  label,
  delay,
  children,
}: {
  label: string;
  delay: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="cap-row"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "20px 0",
      }}
    >
      <span style={labelStyle}>{label}</span>
      {children}
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section
      style={{
        background: "#1D1D1B",
        backgroundImage:
          "radial-gradient(rgba(106,69,155,0.12) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: scale(1);   opacity: 1;    }
          50%       { transform: scale(1.5); opacity: 0.35; }
        }
        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }
        .cap-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .cap-row {
            grid-template-columns: 1fr 2fr;
            gap: 0;
            align-items: center;
          }
        }
      `}</style>

      <div aria-hidden="true" style={DIVIDER} />

      <div style={{ padding: "110px 24px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span style={eyebrowStyle}>At a Glance</span>
          <h2
            style={{
              fontFamily: "var(--font-raleway, Raleway, sans-serif)",
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Capabilities Snapshot
          </h2>
        </motion.div>

        {/* Data rows */}
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <CapRow label="Location" delay={0}>
            <span style={valueStyle}>Ankara, Türkiye</span>
          </CapRow>

          <CapRow label="Trial Phases" delay={0.06}>
            <span style={valueStyle}>Phase I, II, III &amp; IV</span>
          </CapRow>

          <CapRow label="Therapeutic Areas" delay={0.12}>
            <span style={valueStyle}>
              Oncology · Cardiovascular · CNS · Endocrine Metabolic ·
              Infectious Disease · Internal Medicine &amp; Immunology
            </span>
          </CapRow>

          <CapRow label="Regulatory" delay={0.18}>
            <span style={valueStyle}>
              TITCK approved · ICH-GCP aligned · KVKK &amp; GDPR compliant
            </span>
          </CapRow>

          <CapRow label="Feasibility Turnaround" delay={0.24}>
            <span
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span
                className="pulse-dot"
                aria-hidden="true"
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <span style={monoValueStyle}>≤ 48 hours</span>
            </span>
          </CapRow>

          <CapRow label="Site Network" delay={0.30}>
            <span style={valueStyle}>
              Hacettepe University Oncology Hospital + Ankara Bilkent City
              Hospital CRC + additional academic centers
            </span>
          </CapRow>

          <CapRow label="Patient Access" delay={0.36}>
            <span style={valueStyle}>
              Large, treatment-naïve patient populations across therapeutic
              areas
            </span>
          </CapRow>

          <CapRow label="Governance" delay={0.42}>
            <span style={valueStyle}>
              Ethics-first — 10+ published company policies including
              Anti-Bribery, Sustainability, and Human Rights
            </span>
          </CapRow>
        </div>
      </div>
    </section>
  );
}
