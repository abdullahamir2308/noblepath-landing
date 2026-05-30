"use client";

import { motion } from "motion/react";

const RALEWAY = "var(--font-raleway, Raleway, sans-serif)";
const MONO = "var(--font-mono, 'IBM Plex Mono', monospace)";

const DIVIDER = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(106,69,155,0.28), transparent)",
} as const;

const eyebrowStyle = {
  display: "inline-block",
  fontFamily: RALEWAY,
  fontWeight: 500,
  fontSize: "11px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.20em",
  color: "#6A459B",
  border: "1px solid rgba(106,69,155,0.35)",
  borderRadius: "9999px",
  padding: "4px 14px",
  background: "rgba(106,69,155,0.08)",
} as const;

interface StepData {
  numeral: string;
  pill: string;
  title: string;
  body: string;
  delay: number;
}

const STEPS: StepData[] = [
  {
    numeral: "01",
    pill: "Step 01",
    title: "Feasibility (≤ 48 hours)",
    body: "Site-verified assessment of patient pool, competing trials, and enrollment risk — sponsor-ready output delivered within 48 hours.",
    delay: 0,
  },
  {
    numeral: "02",
    pill: "Step 02",
    title: "Regulatory Start-Up (~6–8 weeks)",
    body: "Parallel TITCK and Ethics Committee submissions through institutional ECs, with end-to-end documentation management and IP import coordination.",
    delay: 0.1,
  },
  {
    numeral: "03",
    pill: "Step 03",
    title: "Site Activation & Monitoring",
    body: "Project management, vendor and SMO oversight, risk-based monitoring, and continuous sponsor communication from first patient in to database lock.",
    delay: 0.2,
  },
];

function Step({ numeral, pill, title, body, delay }: StepData) {
  return (
    <motion.div
      className="hww-step"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay, duration: 0.45 }}
      style={{
        flex: 1,
        position: "relative",
        padding: "0 32px",
      }}
    >
      {/* Ghost numeral */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: MONO,
          fontWeight: 600,
          fontSize: "100px",
          color: "rgba(106,69,155,0.22)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          lineHeight: 1,
        }}
      >
        {numeral}
      </span>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <span style={{ ...eyebrowStyle, marginBottom: "12px" }}>{pill}</span>
        <h3
          style={{
            fontFamily: RALEWAY,
            fontWeight: 600,
            fontSize: "18px",
            color: "#FFFFFF",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: RALEWAY,
            fontWeight: 300,
            fontSize: "14px",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            marginTop: "10px",
            marginBottom: 0,
          }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      style={{
        background: "#1D1D1B",
        backgroundImage:
          "radial-gradient(rgba(106,69,155,0.10) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        position: "relative",
      }}
    >
      <style>{`
        .hww-steps {
          display: flex;
          flex-direction: column;
          gap: 56px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }
        .hww-step {
          text-align: left;
        }
        .hww-connector {
          display: none;
        }
        @media (min-width: 768px) {
          .hww-steps {
            flex-direction: row;
            gap: 0;
            align-items: flex-start;
          }
          .hww-step {
            text-align: center;
          }
          .hww-connector {
            display: block;
          }
        }
      `}</style>

      <div aria-hidden="true" style={DIVIDER} />

      <div style={{ padding: "110px 24px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <span style={{ ...eyebrowStyle, marginBottom: "16px" }}>
            The Process
          </span>
          <h2
            style={{
              fontFamily: RALEWAY,
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            How We Work With Sponsors
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="hww-steps">
          {/* Animated connector line (desktop only) — drawn left to right.
              The connector spans the centers of the first and last steps
              (each step is 1/3 of the row, so inset by 1/6 on each side). */}
          <div
            className="hww-connector"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "48px",
              left: "16.666%",
              right: "16.666%",
              height: "2px",
              zIndex: 0,
            }}
          >
            <svg
              width="100%"
              height="2"
              viewBox="0 0 1000 2"
              preserveAspectRatio="none"
              style={{ display: "block", overflow: "visible" }}
            >
              <motion.path
                d="M0 1 L1000 1"
                stroke="rgba(106,69,155,0.35)"
                strokeWidth="1"
                strokeDasharray="4 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {STEPS.map((step) => (
            <Step key={step.numeral} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
