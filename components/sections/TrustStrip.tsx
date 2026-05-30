"use client";

import type { ComponentType } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Award,
  Globe,
  FlaskConical,
} from "lucide-react";

type IconProps = { size?: number; color?: string; className?: string };

const DIVIDER = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(106,69,155,0.28), transparent)",
} as const;

interface BadgeItem {
  label: string;
  Icon: ComponentType<IconProps>;
}

const BADGES: BadgeItem[] = [
  { label: "TITCK",        Icon: ShieldCheck  },
  { label: "ICH-GCP",      Icon: CheckCircle2 },
  { label: "KVKK",         Icon: Lock         },
  { label: "GDPR",         Icon: Lock         },
  { label: "JCI",          Icon: Award        },
  { label: "ICH Member",   Icon: Globe        },
  { label: "PIC/S Member", Icon: FlaskConical },
];

function Badge({ label, Icon }: BadgeItem) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(106,69,155,0.25)",
        borderRadius: "9999px",
        padding: "8px 20px",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-raleway, Raleway, sans-serif)",
        fontWeight: 500,
        fontSize: "13px",
        color: "rgba(255,255,255,0.7)",
        flexShrink: 0,
      }}
    >
      <Icon size={14} color="#6A459B" />
      {label}
    </span>
  );
}

export default function TrustStrip() {
  const doubled = [...BADGES, ...BADGES];

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(106,69,155,0.06) 0%, transparent 100%)",
        overflow: "hidden",
      }}
    >
      
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div aria-hidden="true" style={DIVIDER} />

      <div style={{
  textAlign: 'center',
  marginTop:'40px',
  marginBottom: '20px',
  fontFamily: 'var(--font-raleway)',
  fontSize: '11px',
  fontWeight: 500,
  color: '#6A459B',
  letterSpacing: '0.20em',
  textTransform: 'uppercase',
}}>
  Compliance & Certifications
</div>

      <div
        style={{
          padding: "16px 0",
          minHeight: "72px",
          display: "flex",
          alignItems: "center",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          overflow: "hidden",
        }}
      >
        
        <div className="marquee-track">
          {doubled.map((badge, i) => (
            <Badge key={`${badge.label}-${i}`} {...badge} />
          ))}
        </div>
      </div>

      <div aria-hidden="true" style={DIVIDER} />
    </div>
  );
}
