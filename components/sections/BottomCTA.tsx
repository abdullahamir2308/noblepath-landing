"use client";

import { motion } from "motion/react";

const RALEWAY = "var(--font-raleway, Raleway, sans-serif)";

interface ContactLine {
  text: string;
  href?: string;
}

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/fatimaamir404/30-minute-discovery-call";

const CONTACT_LINES: ContactLine[] = [
  { text: "NoblePath CRO — Ankara, Türkiye" },
  { text: "info@noblepathcro.com", href: "mailto:info@noblepathcro.com" },
  { text: "+90 553 425 54 15", href: "tel:+905534255415" },
];

export default function BottomCTA() {
  return (
    <section
      style={{
        background: "#6A459B",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .cta-book {
          position: relative;
          overflow: hidden;
        }
        .cta-book::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(106,69,155,0.15) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: shimmer 2.5s ease-in-out infinite;
          pointer-events: none;
        }
        .cta-contact-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .cta-contact-link:hover {
          color: #ffffff;
        }
      `}</style>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontFamily: RALEWAY,
          fontWeight: 600,
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          color: "#FFFFFF",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        Let&apos;s Discuss Your Next Clinical Study
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        style={{
          fontFamily: RALEWAY,
          fontWeight: 300,
          fontSize: "16px",
          color: "rgba(255,255,255,0.8)",
          lineHeight: 1.6,
          maxWidth: "560px",
          margin: "16px auto 0",
        }}
      >
        Send a feasibility request or book a 30-minute call directly with our
        team.
      </motion.p>

      <motion.a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-book"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 14px 36px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
        }}
        style={{
          display: "inline-block",
          background: "#FFFFFF",
          color: "#6A459B",
          borderRadius: "9999px",
          padding: "14px 36px",
          fontFamily: RALEWAY,
          fontWeight: 600,
          fontSize: "15px",
          textDecoration: "none",
          marginTop: "36px",
          transition: "box-shadow 0.25s ease",
        }}
      >
        Book a Call
      </motion.a>

      {/* Contact block */}
      <div style={{ marginTop: "40px" }}>
        {CONTACT_LINES.map((line) => (
          <div
            key={line.text}
            style={{
              fontFamily: RALEWAY,
              fontWeight: 300,
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 2.2,
            }}
          >
            {line.href ? (
              <a href={line.href} className="cta-contact-link">
                {line.text}
              </a>
            ) : (
              line.text
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
