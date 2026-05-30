"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import {
  ClipboardList,
  Users,
  BarChart2,
  Wrench,
  FileText,
} from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";

type IconProps = { size?: number; color?: string; className?: string };

const RALEWAY = "var(--font-raleway, Raleway, sans-serif)";

const DIVIDER = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(106,69,155,0.28), transparent)",
} as const;

interface CardData {
  Icon: ComponentType<IconProps>;
  title: string;
  description: string;
  delay: number;
}

const CARDS: CardData[] = [
  {
    Icon: ClipboardList,
    title: "Clinical Trial Management",
    description:
      "End-to-end trial oversight — protocol planning, vendor management, data monitoring, and sponsor reporting from IND to close-out.",
    delay: 0,
  },
  {
    Icon: Users,
    title: "Site Coordination",
    description:
      "Dedicated on-site coordinators managing patient scheduling, ICF execution, case report forms, and regulatory documentation.",
    delay: 0.06,
  },
  {
    Icon: BarChart2,
    title: "Site Management",
    description:
      "Full site qualification, activation, and performance management — with risk-based monitoring and continuous quality oversight.",
    delay: 0.12,
  },
  {
    Icon: Wrench,
    title: "Equipment Supply & Calibrations",
    description:
      "Clinical-grade equipment sourcing, calibration, and maintenance for trial sites — reducing start-up delays.",
    delay: 0.18,
  },
  {
    Icon: FileText,
    title: "Regulatory Services",
    description:
      "TITCK submission strategy, ethics committee navigation, IP import permits, SUSAR reporting, and end-to-end regulatory documentation.",
    delay: 0.24,
  },
];

function ServiceCard({ Icon, title, description, delay }: CardData) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay, duration: 0.45 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: hovered
          ? "rgba(106,69,155,0.07)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? "rgba(106,69,155,0.40)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        padding: "32px 28px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s ease, background 0.3s ease",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(106,69,155,0.65), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "11px",
          background: hovered
            ? "rgba(106,69,155,0.24)"
            : "rgba(106,69,155,0.12)",
          border: `1px solid ${hovered ? "rgba(106,69,155,0.50)" : "rgba(106,69,155,0.25)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <Icon size={20} color="#6A459B" />
      </div>

      <h3
        style={{
          fontFamily: RALEWAY,
          fontWeight: 600,
          fontSize: "16px",
          color: "#FFFFFF",
          lineHeight: 1.3,
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: RALEWAY,
          fontWeight: 300,
          fontSize: "13px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "#1D1D1B", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        .services-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .service-card {
          flex: 0 1 100%;
        }
        @media (min-width: 768px) {
          .service-card {
            flex: 0 1 calc((100% - 36px) / 3);
          }
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
              Full-Service Capabilities
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
              What We Deliver
            </h2>
          </motion.div>

          <div className="services-grid">
            {CARDS.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
