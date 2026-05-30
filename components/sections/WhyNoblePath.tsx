"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import { Activity, Clock, ShieldCheck } from "lucide-react";

type IconProps = { size?: number; color?: string; className?: string };

const DIVIDER = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(106,69,155,0.28), transparent)",
} as const;

interface CardData {
  Icon: ComponentType<IconProps>;
  title: string;
  body: string;
  delay: number;
}

const CARDS: CardData[] = [
  {
    Icon: Activity,
    title: "Therapeutic Breadth",
    body: "Six therapeutic areas under one CRO roof — oncology, cardiovascular, CNS, endocrine metabolic disorders, infectious disease, and internal medicine & immunology. No hand-offs, no gaps.",
    delay: 0.06,
  },
  {
    Icon: Clock,
    title: "48-Hour Feasibility",
    body: "Site-verified, KOL-driven feasibility assessments delivered within 48 hours — realistic enrollment projections, not optimistic assumptions.",
    delay: 0.12,
  },
  {
    Icon: ShieldCheck,
    title: "On-Site Ethics Committee Access",
    body: "Network sites with institutional Ethics Committees enable parallel TITCK and EC submissions — reducing review timelines from 6–8 weeks to 2–3 weeks at top sites.",
    delay: 0.18,
  },
];

type Particle = { x: number; y: number; vx: number; vy: number };

function setupParticleCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
): () => void {
  const COUNT = 28;
  const CONNECT_DIST = 120;
  const SPEED = 0.25;
  const DOT_RADIUS = 1.5;

  let particles: Particle[] = [];
  let animId = 0;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() * 2 - 1) * SPEED,
      vy: (Math.random() * 2 - 1) * SPEED,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    }

    ctx.strokeStyle = "rgba(106,69,155,0.15)";
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const pi = particles[i];
        const pj = particles[j];
        if (!pi || !pj) continue;
        const dx = pi.x - pj.x;
        const dy = pi.y - pj.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = "rgba(106,69,155,0.5)";
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }

    animId = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener("resize", resize);

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
  };
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    return setupParticleCanvas(canvas, ctx);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

function Card({ Icon, title, body, delay }: CardData) {
  const [hovered, setHovered] = useState(false);

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
        background: hovered
          ? "rgba(106,69,155,0.07)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? "rgba(106,69,155,0.40)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        padding: "36px 28px",
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
          fontFamily: "var(--font-raleway, Raleway, sans-serif)",
          fontWeight: 600,
          fontSize: "17px",
          color: "#FFFFFF",
          lineHeight: 1.3,
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-raleway, Raleway, sans-serif)",
          fontWeight: 300,
          fontSize: "14px",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        {body}
      </p>
    </motion.div>
  );
}

export default function WhyNoblePath() {
  return (
    <section
      id="why"
      style={{ background: "#1D1D1B", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          max-width: 1080px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .why-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <ParticleCanvas />

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
              Why Choose NoblePath
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
              Why Sponsors Choose NoblePath
            </h2>
          </motion.div>

          <div className="why-grid">
            {CARDS.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
