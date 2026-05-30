"use client";

const RALEWAY = "var(--font-raleway, Raleway, sans-serif)";

const NAV_LINKS = [
  { label: "Why NoblePath", href: "#why" },
  { label: "Our Sites", href: "#sites" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
] as const;

const LEGAL_LINKS = ["KVKK Policy", "GDPR Policy", "Cookie Policy"] as const;

function Logo() {
  return (
    <a
      href="/"
      aria-label="NoblePath CRO home"
      style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M2,16 L8,16 L10.5,22 L14,4 L17.5,26 L20.5,16 L30,16"
          stroke="#6A459B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: RALEWAY,
            fontWeight: 600,
            fontSize: "15px",
            color: "#FFFFFF",
            letterSpacing: "0.01em",
          }}
        >
          NoblePath
        </span>
        <span
          style={{
            fontFamily: RALEWAY,
            fontWeight: 400,
            fontSize: "9px",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.25em",
            marginTop: "2px",
          }}
        >
          CRO
        </span>
      </div>
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1D1D1B",
        padding: "48px 24px 32px",
        borderTop: "1px solid rgba(106,69,155,0.2)",
      }}
    >
      <style>{`
        .footer-cols {
          display: flex;
          flex-direction: column;
          gap: 36px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }
        .footer-link {
          text-decoration: none;
          transition: color 0.2s ease;
        }
        @media (min-width: 768px) {
          .footer-cols {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
        }
      `}</style>

      <div className="footer-cols">
        {/* LEFT */}
        <div style={{ maxWidth: "320px" }}>
          <Logo />
          <p
            style={{
              fontFamily: RALEWAY,
              fontWeight: 300,
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
              margin: "8px 0 0",
            }}
          >
            Clinical Research Solutions at Global Standards
          </p>
        </div>

        {/* CENTER */}
        <nav
          aria-label="Footer"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="footer-link"
              style={{
                fontFamily: RALEWAY,
                fontWeight: 400,
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.5)";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.noblepathcro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{
              fontFamily: RALEWAY,
              fontWeight: 400,
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.5)";
            }}
          >
            noblepathcro.com →
          </a>
        </nav>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {LEGAL_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="footer-link"
              style={{
                fontFamily: RALEWAY,
                fontWeight: 400,
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.4)";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: "1280px",
          margin: "40px auto 0",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span
          style={{
            fontFamily: RALEWAY,
            fontWeight: 300,
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          © 2025 NoblePath CRO. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: RALEWAY,
            fontWeight: 300,
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Built for global sponsors.
        </span>
      </div>
    </footer>
  );
}
