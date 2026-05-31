"use client";

import { motion } from "motion/react";
import type { Transition } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

const TRUST_PILLS = [
  "TITCK Regulatory",
  "ICH-GCP Aligned",
  "KVKK & GDPR Compliant",
  "Ethics-First Governance",
] as const;

const BOOK_HREF = "mailto:dilek.coban@noblepathcro.com";

function fade(delay: number) {
  const transition: Transition = { duration: 0.7, ease: "easeOut", delay };
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition,
  };
}

function ScrollCue() {
  const handleClick = () => {
    document.getElementById("why")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to discover more"
      className="bob-animation"
      style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        animation: "bob-center 2.4s ease-in-out infinite",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        zIndex: 10,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-raleway, Raleway, sans-serif)",
          fontWeight: 500,
          fontSize: "9px",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
        }}
      >
        Discover
      </span>
      <ChevronDown size={15} color="rgba(255,255,255,0.35)" />
    </button>
  );
}

export default function Hero() {
  const handleNovaClick = () => {
    if (typeof window !== "undefined" && typeof (window as Window & { __novaOpen?: () => void }).__novaOpen === "function") {
      (window as Window & { __novaOpen?: () => void }).__novaOpen?.();
    } else {
      window.location.href = "#contact";
    }
  };

  return (
    <>
      <style>{`
        @keyframes pillShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .pill-shimmer {
          position: relative;
          overflow: hidden;
        }
        .pill-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.12) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: pillShimmer 1.2s ease-out forwards;
          pointer-events: none;
        }
        .pill-shimmer-1::after { animation-delay: 0.9s; }
        .pill-shimmer-2::after { animation-delay: 1.1s; }
        .pill-shimmer-3::after { animation-delay: 1.3s; }
        .pill-shimmer-4::after { animation-delay: 1.5s; }

        @keyframes bob-center {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
            opacity: 0.35;
          }
          50% {
            transform: translateX(-50%) translateY(9px);
            opacity: 0.65;
          }
        }
      `}</style>
      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
        background: "#1D1D1B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Layer 0: Gradient orbs ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Orb 1 — large, top-left */}
        <div
          style={{
            position: "absolute",
            width: "720px",
            height: "720px",
            left: "-200px",
            top: "-180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(106,69,155,0.50) 0%, transparent 68%)",
            filter: "blur(80px)",
            animation: "driftA 14s ease-in-out infinite",
          }}
        />
        {/* Orb 2 — medium, top-right */}
        <div
          style={{
            position: "absolute",
            width: "560px",
            height: "560px",
            right: "-140px",
            top: "60px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(106,69,155,0.33) 0%, transparent 68%)",
            filter: "blur(100px)",
            animation: "driftB 19s ease-in-out infinite",
          }}
        />
        {/* Orb 3 — small, bottom-center */}
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            left: "calc(50% - 210px)",
            bottom: "-80px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(106,69,155,0.22) 0%, transparent 70%)",
            filter: "blur(120px)",
            animation: "driftC 24s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Layer 2: EKG trace ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: '40px',
          zIndex: 2,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1000 70"
          preserveAspectRatio="none"
          width="100%"
          height="70px"
          display="block"
        >
          <path
            className="ekg-path"
            d="M 0,35 L 80,35 C 90,35 95,22 105,20 C 115,18 120,35 130,35 L 175,35 L 179,44 L 185,2 L 191,46 L 196,35 L 235,35 C 248,35 262,18 272,20 C 284,22 293,35 308,35 L 1000,35"
            fill="none"
            stroke="#6A459B"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* ── Layer 10: Hero content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "860px",
          width: "100%",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        {/* 1. Trust pills */}
        <motion.div
          {...fade(0.15)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "28px",
          }}
        >
          {TRUST_PILLS.map((pill, i) => (
            <span
              key={pill}
              className={`pill-shimmer pill-shimmer-${i + 1}`}
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "9999px",
                padding: "6px 16px",
                fontFamily: "var(--font-raleway, Raleway, sans-serif)",
                fontWeight: 400,
                fontSize: "12px",
                color: "rgba(255,255,255,0.72)",
                letterSpacing: "0.04em",
                cursor: "default",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.background = "rgba(106,69,155,0.15)";
                el.style.borderColor = "rgba(106,69,155,0.50)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.background = "rgba(255,255,255,0.05)";
                el.style.borderColor = "rgba(255,255,255,0.18)";
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* 2. H1 — gradient text */}
        <motion.h1
          {...fade(0.38)}
          className="gradient-text"
          style={{
            fontFamily: "var(--font-raleway, Raleway, sans-serif)",
            fontWeight: 600,
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            marginBottom: "22px",
            margin: "0 0 22px",
          }}
        >
          Your Clinical Research Partner in{" "}
          <span
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <motion.span
              {...fade(0.68)}
              className="gradient-text"
              style={{ display: "inline-block" }}
            >
              Türkiye
            </motion.span>
            {/* Underline — wavy path that draws in, then a pulse travels along it */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                bottom: "-6px",
                left: 0,
                width: "100%",
                height: "10px",
                overflow: "visible",
              }}
            >
              {/* Base wave — draws in on load */}
              <motion.path
                d="M 0,5 C 25,0 50,10 75,5 C 100,0 125,10 150,5 C 175,0 200,8 200,5"
                fill="none"
                stroke="#6A459B"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 0.8, ease: "easeInOut", delay: 1.4 },
                  opacity: { duration: 0.01, delay: 1.4 },
                }}
              />
              {/* Pulse — bright highlight travelling along the wave after draw completes */}
              <motion.path
                d="M 0,5 C 25,0 50,10 75,5 C 100,0 125,10 150,5 C 175,0 200,8 200,5"
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="30 200"
                initial={{ strokeDashoffset: 230, opacity: 0 }}
                animate={{
                  strokeDashoffset: -230,
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  delay: 2.4,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          {...fade(0.58)}
          style={{
            fontFamily: "var(--font-raleway, Raleway, sans-serif)",
            fontWeight: 300,
            fontSize: "clamp(0.95rem, 2vw, 1.12rem)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.76)",
            maxWidth: "660px",
            margin: "0 auto 40px",
          }}
        >
          Full-service CRO across oncology, cardiovascular, CNS, metabolic,
          infectious disease, and immunology — with 48-hour feasibility
          turnaround, on-site Ethics Committee access, and full TITCK regulatory
          navigation. Built for global sponsors.
        </motion.p>

        {/* 4. CTA row */}
        <motion.div
          {...fade(0.78)}
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Primary — Book a Call */}
          <motion.a
            href={BOOK_HREF}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#6A459B",
              color: "#FFFFFF",
              borderRadius: "9999px",
              padding: "14px 36px",
              fontFamily: "var(--font-raleway, Raleway, sans-serif)",
              fontWeight: 600,
              fontSize: "15px",
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "background 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#7D52B0";
              el.style.boxShadow = "0 14px 36px rgba(106,69,155,0.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#6A459B";
              el.style.boxShadow = "none";
            }}
          >
            Book a Call
          </motion.a>

          {/* Secondary — send a feasibility brief */}
          <motion.a
            href="https://forms.gle/EZ3eW68p2kFShuan8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: "9999px",
              padding: "14px 28px",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "rgba(255,255,255,0.72)",
              fontFamily: "var(--font-raleway, Raleway, sans-serif)",
              fontWeight: 400,
              fontSize: "14px",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(106,69,155,0.55)";
              el.style.color = "#fff";
              el.style.background = "rgba(106,69,155,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(255,255,255,0.22)";
              el.style.color = "rgba(255,255,255,0.72)";
              el.style.background = "transparent";
            }}
          >
            Or send a feasibility brief
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>

      {/* 5. Scroll indicator */}
      <motion.div {...fade(0.98)}>
        <ScrollCue />
      </motion.div>
    </section>
    </>
  );
}
