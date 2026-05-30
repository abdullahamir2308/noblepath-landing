"use client";

import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { images } from "@/config/images";

const RALEWAY = "var(--font-raleway, Raleway, sans-serif)";

const DIVIDER = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(106,69,155,0.28), transparent)",
} as const;

const PHOTO_PLACEHOLDER =
  "linear-gradient(135deg, rgba(106,69,155,0.1), rgba(29,29,27,0.95))";

interface CourseData {
  title: string;
  description: string;
  delay: number;
}

const COURSES: CourseData[] = [
  {
    title: "GCP Training",
    description:
      "ICH E6(R2) Good Clinical Practice — foundational certification for all clinical research professionals operating under international standards.",
    delay: 0,
  },
  {
    title: "Source Document Training",
    description:
      "Best-practice training on source data integrity, contemporaneous recording, and audit-trail requirements for site teams.",
    delay: 0.06,
  },
  {
    title: "Site Management Training",
    description:
      "End-to-end site management methodology — qualification, activation, performance oversight, and close-out.",
    delay: 0.12,
  },
  {
    title: "Site Coordination Training",
    description:
      "Practical coordination skills for study coordinators — patient scheduling, ICF management, regulatory documentation, and sponsor communication.",
    delay: 0.18,
  },
];

function CourseCard({ title, description, delay }: CourseData) {
  return (
    <motion.div
      className="academy-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 90, damping: 14, delay, duration: 0.45 }}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Photo slot — image when available, dark gradient placeholder when null */}
      <div
        style={{
          height: "116px",
          background: images.academy
            ? `url(${images.academy}) center / cover no-repeat`
            : PHOTO_PLACEHOLDER,
          display: "flex",
          alignItems: "flex-end",
          padding: "0 24px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "24px",
            bottom: "-22px",
            width: "44px",
            height: "44px",
            borderRadius: "11px",
            background: "rgba(106,69,155,0.18)",
            border: "1px solid rgba(106,69,155,0.40)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BookOpen size={20} color="#6A459B" />
        </div>
      </div>

      <div style={{ padding: "34px 24px 28px" }}>
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
      </div>
    </motion.div>
  );
}

export default function Academy() {
  return (
    <section
      id="academy"
      style={{ background: "#1D1D1B", position: "relative", overflow: "hidden" }}
    >
      <style>{`
        .academy-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
          max-width: 900px;
          margin: 0 auto;
        }
        .academy-card {
          flex: 0 1 100%;
        }
        @media (min-width: 768px) {
          .academy-card {
            flex: 0 1 calc((100% - 18px) / 2);
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
            style={{ textAlign: "center", marginBottom: "48px" }}
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
              Education &amp; Training
            </span>
            <h2
              style={{
                fontFamily: RALEWAY,
                fontWeight: 600,
                fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              NoblePath Academy
            </h2>
            <p
              style={{
                fontFamily: RALEWAY,
                fontWeight: 300,
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              We believe better-trained site teams produce better trials.
              NoblePath Academy is our commitment to raising the standard of
              clinical research practice across Türkiye — open to coordinators,
              investigators, and regulatory professionals beyond our own
              organisation.
            </p>
          </motion.div>

          <div className="academy-grid">
            {COURSES.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>

          {/* Sponsor closing line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              fontFamily: RALEWAY,
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: "560px",
              margin: "40px auto 0",
            }}
          >
            When your trial activates at a NoblePath site, the coordination team
            has been trained to our standard — not just to the minimum.
          </motion.p>

          {/* CTA link */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a
              href="https://www.noblepathcro.com/courses"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: RALEWAY,
                fontWeight: 500,
                fontSize: "14px",
                color: "#6A459B",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#7D52B0";
                el.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#6A459B";
                el.style.textDecoration = "none";
              }}
            >
              Explore NoblePath Academy →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
