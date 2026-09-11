"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { images } from "@/config/images";

const RALEWAY = "var(--font-raleway, Raleway, sans-serif)";
const MONO = "var(--font-mono, 'IBM Plex Mono', monospace)";

const DIVIDER = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(106,69,155,0.28), transparent)",
} as const;

// Full-width cards: 1100px container + 24px section padding each side
const SITE_IMAGE_SIZES = "(min-width: 1148px) 1100px, 100vw";

// ─── Sub-components ────────────────────────────────────────────────────────────

function AccreditationBadge({
  label,
  purple = false,
}: {
  label: string;
  purple?: boolean;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        border: `1px solid ${
          purple ? "rgba(106,69,155,0.4)" : "rgba(255,255,255,0.12)"
        }`,
        borderRadius: "9999px",
        padding: "4px 12px",
        fontFamily: RALEWAY,
        fontWeight: 500,
        fontSize: "11px",
        color: purple ? "#6A459B" : "rgba(255,255,255,0.55)",
        background: purple ? "rgba(106,69,155,0.1)" : "transparent",
        marginRight: "6px",
        marginBottom: "6px",
      }}
    >
      {label}
    </span>
  );
}

function StatCallout({
  value,
  label,
  numeric,
  mounted,
}: {
  value: number | string;
  label: string;
  numeric: boolean;
  mounted: boolean;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: MONO,
          fontWeight: 500,
          fontSize: "32px",
          color: "#FFFFFF",
          lineHeight: 1,
        }}
      >
        {numeric && mounted && typeof value === "number" ? (
          <CountUp
            end={value}
            duration={2}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        ) : (
          <span>{String(value)}</span>
        )}
      </div>
      <div
        style={{
          fontFamily: RALEWAY,
          fontWeight: 300,
          fontSize: "12px",
          color: "rgba(255,255,255,0.55)",
          marginTop: "6px",
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const HACETTEPE_METRICS = [
  "264 active clinical trials across the institution",
  "109 active Medical Oncology trials · 526 oncology patients actively followed",
  "13 Medical Oncology faculty · 10 fellows in training",
  "117 inpatient beds (Medical Oncology, Oncology ICU, Bone Marrow Transplantation, Pediatric Oncology)",
  "Phase I Unit: 4 private rooms on Level 5; Oncology ICU one floor below for rapid escalation",
  "Cancer Registry with linked Biobank (25,000-sample storage capacity)",
];

const HACETTEPE_EQUIPMENT = ["2 PET-CT", "Cyberknife", "Novalis", "ZAP-X", "3 LINACs"];

const HACETTEPE_PIS = [
  { name: "Prof. Dr. Mustafa Erman", role: "Phase I Lead · Lung & GU" },
  { name: "Prof. Dr. Ömer Dizdar", role: "Phase I · GI & Melanoma" },
  { name: "Prof. Dr. Sercan Aksoy", role: "Phase I · Breast & H&N" },
  { name: "Prof. Dr. Zafer Arık", role: "Phase I · Gynecological" },
  { name: "Asst. Prof. Dr. Burak Yasin Aktaş", role: "Phase I · Lung & GU" },
  { name: "Assoc. Prof. Dr. Serkan Akın", role: "Hematological Malignancies" },
  { name: "Assoc. Prof. Dr. Deniz Can Güven", role: "Breast, H&N, GI, Melanoma" },
];

const BILKENT_METRICS = [
  "4,050 inpatient beds · 968 ICU beds · 583 polyclinics · 117 operating rooms",
  "18,000+ healthcare professionals — including 400+ Professors, 300+ Associate Professors",
  "2,500+ scientific research projects annually",
  "Phase 1 CRC (est. Apr 2021, recertified Oct 2023): 1,310 m², 24 beds in 12 private rooms, 1 reserved ICU bed",
  "Dedicated IMP storage (−20°C, 2–8°C, ambient) + lab storage (−80°C, −20°C, 2–8°C)",
  "On-site Clinical Research Ethics Committee: 2–3 week review timeline",
  "Two additional IRBs for non-interventional studies",
];

const ANKARA_ONCOLOGY_METRICS = [
  "125 active clinical studies in 2025 — 74 Medical Oncology · 51 Hematology",
  "116 trials conducted since 2019 (62 Medical Oncology · 54 Hematology)",
  "Clinical trial enrollment nearly doubled: 154 (2022) → 162 (2023) → 234 (2024)",
  "Hematology-oncology registry (2017–2024): 23,110 patients — including 8,249 lymphoma, 5,910 myeloma, 4,962 leukemia",
  "CAR-T Cell Therapy Program: 3 active protocols (autologous & allogeneic, Phase I/II), 39 infusions delivered with zero Grade 3–4 adverse events",
  "Clinical Research Ethics Committee: 13 members across 11 specialties, weekly sessions, ~2-week decision turnaround",
  "Site team: 43 dedicated site coordinators, 7 research nurses, plus Quality Management, Feasibility, and Statistics units",
];

const ANKARA_ONCOLOGY_PROGRAMS = [
  "CAR-T Program",
  "43 Coordinators",
  "Weekly EC Sessions",
  "7–10 Day Contract Turnaround",
];

// ─── PI List (shared render, toggled on mobile) ────────────────────────────────

function PIList() {
  return (
    <>
      {HACETTEPE_PIS.map((pi) => (
        <div key={pi.name} style={{ marginBottom: "6px" }}>
          <span
            style={{
              fontFamily: RALEWAY,
              fontWeight: 400,
              fontSize: "13px",
              color: "#FFFFFF",
            }}
          >
            {pi.name}
          </span>
          <span
            style={{
              fontFamily: RALEWAY,
              fontWeight: 400,
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {" — "}
            {pi.role}
          </span>
        </div>
      ))}
    </>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────────

export default function NetworkSites() {
  const [mounted, setMounted] = useState(false);
  const [showPIs, setShowPIs] = useState(false);
  useEffect(() => setMounted(true), []);

  const hacettepeBg = images.siteHacettepe;
  const bilkentBg = images.siteBilkent;
  const ankaraOncologyBg = images.siteAnkaraOncology;

  return (
    <section
      id="network"
      style={{ background: "#1D1D1B", position: "relative" }}
    >
      <style>{`
        .ns-card-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          padding: 36px;
        }
        @media (min-width: 768px) {
          .ns-card-inner {
            grid-template-columns: 40fr 60fr;
            gap: 48px;
            padding: 48px;
          }
        }
        .ns-metric-item {
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 10px 0;
          font-family: var(--font-raleway, Raleway, sans-serif);
          font-weight: 300;
          font-size: 14px;
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
        }
        .ns-metric-item:last-child {
          border-bottom: none;
        }
        .ns-pi-mobile {
          display: block;
        }
        .ns-pi-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .ns-pi-mobile { display: none; }
          .ns-pi-desktop { display: block; }
        }
      `}</style>

      <div aria-hidden="true" style={DIVIDER} />

      <div style={{ padding: "110px 24px" }}>
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: RALEWAY,
              fontWeight: 500,
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.20em",
              color: "#6A459B",
              border: "1px solid rgba(106,69,155,0.35)",
              borderRadius: "9999px",
              padding: "4px 14px",
              background: "rgba(106,69,155,0.08)",
              marginBottom: "16px",
            }}
          >
            Our Network
          </span>
          <h2
            style={{
              fontFamily: RALEWAY,
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              margin: "0 0 20px 0",
            }}
          >
            Featured Sites &amp; Principal Investigators
          </h2>
          <p
            style={{
              fontFamily: RALEWAY,
              fontWeight: 300,
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            NoblePath's network includes Türkiye's most experienced academic
            medical centers — with multidisciplinary investigators, Phase 1
            infrastructure, and institutional Ethics Committees that accelerate
            study start-up.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* ── Card 1 — Hacettepe ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: 0,
            }}
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              background: hacettepeBg
                ? "rgba(255,255,255,0.025)"
                : "linear-gradient(135deg, rgba(106,69,155,0.15), rgba(29,29,27,0.95))",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {hacettepeBg && (
              <Image
                src={hacettepeBg}
                alt=""
                fill
                sizes={SITE_IMAGE_SIZES}
                style={{ objectFit: "cover", opacity: 0.15 }}
              />
            )}
            <div
              className="ns-card-inner"
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* LEFT */}
              <div>
                <h3
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#FFFFFF",
                    margin: "0 0 8px 0",
                  }}
                >
                  Hacettepe University Oncology Hospital
                </h3>
                <p
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.7,
                    margin: "0 0 16px 0",
                  }}
                >
                  Ankara, Türkiye — First academic center in Türkiye accredited
                  by Joint Commission International (JCI). Home to Türkiye's
                  only Phase I unit dedicated to oncology trials.
                </p>
                <div style={{ marginBottom: "28px" }}>
                  <AccreditationBadge label="JCI" purple />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px",
                  }}
                >
                  <StatCallout
                    value={264}
                    label="active clinical trials"
                    numeric
                    mounted={mounted}
                  />
                  <StatCallout
                    value="Only"
                    label="oncology Phase I unit in Türkiye"
                    numeric={false}
                    mounted={mounted}
                  />
                  <StatCallout
                    value={25000}
                    label="sample biobank capacity"
                    numeric
                    mounted={mounted}
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {HACETTEPE_METRICS.map((item) => (
                    <li key={item} className="ns-metric-item">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Equipment pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "16px",
                  }}
                >
                  {HACETTEPE_EQUIPMENT.map((eq) => (
                    <span
                      key={eq}
                      style={{
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "9999px",
                        padding: "4px 12px",
                        fontFamily: RALEWAY,
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {eq}
                    </span>
                  ))}
                </div>

                {/* Investigators heading */}
                <div
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "#6A459B",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginTop: "20px",
                    marginBottom: "12px",
                  }}
                >
                  Investigators
                </div>

                {/* Desktop list */}
                <div className="ns-pi-desktop">
                  <PIList />
                </div>

                {/* Mobile accordion */}
                <div className="ns-pi-mobile">
                  <button
                    onClick={() => setShowPIs((s) => !s)}
                    style={{
                      fontFamily: RALEWAY,
                      fontWeight: 400,
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.55)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    {showPIs ? "Hide Investigators ↑" : "Show Investigators ↓"}
                  </button>
                  {showPIs && (
                    <div style={{ marginTop: "12px" }}>
                      <PIList />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 2 — Bilkent ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: 0.12,
            }}
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              background: bilkentBg
                ? "rgba(255,255,255,0.025)"
                : "linear-gradient(135deg, rgba(59,89,140,0.15), rgba(29,29,27,0.95))",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {bilkentBg && (
              <Image
                src={bilkentBg}
                alt=""
                fill
                sizes={SITE_IMAGE_SIZES}
                style={{ objectFit: "cover", opacity: 0.15 }}
              />
            )}
            <div
              className="ns-card-inner"
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* LEFT */}
              <div>
                <h3
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#FFFFFF",
                    margin: "0 0 8px 0",
                  }}
                >
                  Ankara Bilkent City Hospital CRC
                </h3>
                <p
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.7,
                    margin: "0 0 16px 0",
                  }}
                >
                  Ankara, Türkiye — One of Türkiye's largest hospital complexes.
                  TITCK-certified Phase 1 Clinical Research Center, ICH and
                  PIC/S member, GCP-certified.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: "28px",
                  }}
                >
                  {["TITCK", "ICH", "PIC/S", "GCP"].map((b) => (
                    <AccreditationBadge key={b} label={b} purple />
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px",
                  }}
                >
                  <StatCallout
                    value={4050}
                    label="inpatient beds"
                    numeric
                    mounted={mounted}
                  />
                  <StatCallout
                    value="2–3 wk"
                    label="Ethics Committee review"
                    numeric={false}
                    mounted={mounted}
                  />
                  <StatCallout
                    value={24}
                    label="bed Phase 1 CRC"
                    numeric
                    mounted={mounted}
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {BILKENT_METRICS.map((item) => (
                    <li key={item} className="ns-metric-item">
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "20px" }}>
                  <div
                    style={{
                      fontFamily: RALEWAY,
                      fontWeight: 500,
                      fontSize: "12px",
                      color: "#6A459B",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginBottom: "10px",
                    }}
                  >
                    Investigator Team
                  </div>
                  <p
                    style={{
                      fontFamily: RALEWAY,
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0 0 6px 0",
                      lineHeight: 1.6,
                    }}
                  >
                    13 Principal Investigators — 8 Oncologists, 2 Hematologists,
                    1 Pediatric Neurologist, 1 Dermatologist
                  </p>
                  <p
                    style={{
                      fontFamily: RALEWAY,
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    6 dedicated Site Coordinators
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card 3 — Ankara Oncology ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: 0.24,
            }}
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              background: ankaraOncologyBg
                ? "rgba(255,255,255,0.025)"
                : "linear-gradient(135deg, rgba(139,69,19,0.12), rgba(29,29,27,0.95))",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {ankaraOncologyBg && (
              <Image
                src={ankaraOncologyBg}
                alt=""
                fill
                sizes={SITE_IMAGE_SIZES}
                style={{ objectFit: "cover", opacity: 0.15 }}
              />
            )}
            <div
              className="ns-card-inner"
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* LEFT */}
              <div>
                <h3
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#FFFFFF",
                    margin: "0 0 8px 0",
                  }}
                >
                  Ankara Oncology Hospital Clinical Research Center
                </h3>
                <p
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.7,
                    margin: "0 0 16px 0",
                  }}
                >
                  Ankara, Türkiye — University of Health Sciences, Dr.
                  Abdurrahman Yurtarslan Ankara Oncology Training and Research
                  Hospital, Clinical Research Center. One of Türkiye&apos;s most
                  active hematology-oncology trial centers, with an established
                  CAR-T cell therapy program.
                </p>
                <div style={{ marginBottom: "28px" }}>
                  <AccreditationBadge label="TITCK" purple />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px",
                  }}
                >
                  <StatCallout
                    value={125}
                    label="active studies (2025)"
                    numeric
                    mounted={mounted}
                  />
                  <StatCallout
                    value={23110}
                    label="patient hematology registry"
                    numeric
                    mounted={mounted}
                  />
                  <StatCallout
                    value={11}
                    label="sponsor & regulatory audits passed"
                    numeric
                    mounted={mounted}
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {ANKARA_ONCOLOGY_METRICS.map((item) => (
                    <li key={item} className="ns-metric-item">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Program pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "16px",
                  }}
                >
                  {ANKARA_ONCOLOGY_PROGRAMS.map((program) => (
                    <span
                      key={program}
                      style={{
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "9999px",
                        padding: "4px 12px",
                        fontFamily: RALEWAY,
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {program}
                    </span>
                  ))}
                </div>

                {/* Leadership heading */}
                <div
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "#6A459B",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginTop: "20px",
                    marginBottom: "12px",
                  }}
                >
                  Leadership
                </div>
                <p
                  style={{
                    fontFamily: RALEWAY,
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                  }}
                >
                  Clinical Research Center led by{" "}
                  <span style={{ color: "#FFFFFF" }}>
                    Prof. Dr. Fevzi Altuntaş
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Footer microcopy ── */}
        <p
          style={{
            fontFamily: RALEWAY,
            fontWeight: 300,
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
            textAlign: "center",
            marginTop: "32px",
            marginBottom: 0,
          }}
        >
          Additional network sites are available based on protocol requirements
          and therapeutic focus.
        </p>
      </div>
    </section>
  );
}
