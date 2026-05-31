"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { images } from "@/config/images";
import ParticleBackground from "@/components/ui/ParticleBackground";

const DIVIDER = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(106,69,155,0.28), transparent)",
} as const;

interface CardData {
  area: string;
  accent: string;
  accentRgb: string;
  imageKey: keyof typeof images;
  description: string;
  delay: number;
}

const CARDS: CardData[] = [
  {
    area: "Oncology",
    accent: "#7B3F8C",
    accentRgb: "123,63,140",
    imageKey: "therapeuticOncology",
    description:
      "Solid tumors and hematologic malignancies — Phase I through IV",
    delay: 0,
  },
  {
    area: "Cardiovascular",
    accent: "#8C3F3F",
    accentRgb: "140,63,63",
    imageKey: "therapeuticCardiovascular",
    description: "Acute and chronic cardiovascular disease programs",
    delay: 0.06,
  },
  {
    area: "Central Nervous System",
    accent: "#3F5A8C",
    accentRgb: "63,90,140",
    imageKey: "therapeuticCNS",
    description: "Neurodegenerative and neuroimmunological disorders",
    delay: 0.12,
  },
  {
    area: "Endocrine Metabolic Disorders",
    accent: "#2E7D6E",
    accentRgb: "46,125,110",
    imageKey: "therapeuticEndocrine",
    description:
      "Diabetes, obesity, and endocrine-related metabolic conditions",
    delay: 0.18,
  },
  {
    area: "Infectious Disease",
    accent: "#3D6B3D",
    accentRgb: "61,107,61",
    imageKey: "therapeuticInfectious",
    description: "Antimicrobial, antiviral, and vaccine development programs",
    delay: 0.24,
  },
  {
    area: "Internal Medicine & Immunology",
    accent: "#7A6B2E",
    accentRgb: "122,107,46",
    imageKey: "therapeuticImmunology",
    description: "Autoimmune, inflammatory, and immune-mediated diseases",
    delay: 0.30,
  },
];

function TherapeuticCard({
  area,
  accent,
  accentRgb,
  imageKey,
  description,
  delay,
}: CardData) {
  const [hovered, setHovered] = useState(false);
  const imageSrc = images[imageKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        padding: "32px 24px",
        background: imageSrc
          ? "rgba(255,255,255,0.025)"
          : `radial-gradient(ellipse at 50% 0%, rgba(${accentRgb},0.15) 0%, transparent 70%), rgba(255,255,255,0.025)`,
        borderTop: `1px solid ${hovered ? `rgba(${accentRgb},0.5)` : "rgba(255,255,255,0.07)"}`,
        borderRight: `1px solid ${hovered ? `rgba(${accentRgb},0.5)` : "rgba(255,255,255,0.07)"}`,
        borderBottom: `1px solid ${hovered ? `rgba(${accentRgb},0.5)` : "rgba(255,255,255,0.07)"}`,
        borderLeft: `4px solid ${accent}`,
        transition: "border-color 0.3s ease",
      }}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt=""
          fill
          style={{ objectFit: "cover", opacity: 0.25 }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-raleway, Raleway, sans-serif)",
            fontWeight: 600,
            fontSize: "16px",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          {area}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-raleway, Raleway, sans-serif)",
            fontWeight: 300,
            fontSize: "14px",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.7,
            marginTop: "8px",
            marginBottom: 0,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function TherapeuticFocus() {
  return (
    <section
      id="therapeutic"
      style={{ background: "#1D1D1B", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        .therapeutic-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          max-width: 1080px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .therapeutic-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <ParticleBackground />

      <div style={{ position: "relative", zIndex: 10 }}>
        <div aria-hidden="true" style={DIVIDER} />

        <div style={{ padding: "110px 24px" }}>
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
                fontFamily: "var(--font-raleway, Raleway, sans-serif)",
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
              Therapeutic Expertise
            </span>
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
              Therapeutic Focus
            </h2>
          </motion.div>

          <div className="therapeutic-grid">
            {CARDS.map((card) => (
              <TherapeuticCard key={card.area} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
