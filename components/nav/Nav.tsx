"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Why NoblePath", href: "#why" },
  { label: "Our Sites", href: "#network" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
] as const;

const BOOK_HREF =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/fatimaamir404/30-minute-discovery-call";

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
            fontFamily: "var(--font-raleway, Raleway, sans-serif)",
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
            fontFamily: "var(--font-raleway, Raleway, sans-serif)",
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

function BookButton({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <a
      href={BOOK_HREF}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#6A459B",
        color: "#FFFFFF",
        borderRadius: "9999px",
        padding: "8px 20px",
        fontSize: "13px",
        fontFamily: "var(--font-raleway, Raleway, sans-serif)",
        fontWeight: 600,
        textDecoration: "none",
        transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
        width: fullWidth ? "100%" : "auto",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "#7D52B0";
        el.style.transform = "translateY(-1px)";
        el.style.boxShadow = "0 6px 20px rgba(106,69,155,0.40)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "#6A459B";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      Book a Call
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(29,29,27,0.92)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(106,69,155,0.22)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
        }}
        className="h-16 md:h-16 max-md:h-14 max-md:px-4"
      >
        {/* LEFT — Logo */}
        <Logo />

        {/* CENTER — Desktop nav links (hidden on mobile) */}
        <nav aria-label="Primary" className="hidden md:flex" style={{ gap: "32px", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-raleway, Raleway, sans-serif)",
                fontWeight: 500,
                fontSize: "13px",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                display: "inline-flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#fff";
                const ul = el.querySelector("[data-ul]") as HTMLElement | null;
                if (ul) ul.style.width = "100%";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "rgba(255,255,255,0.75)";
                const ul = el.querySelector("[data-ul]") as HTMLElement | null;
                if (ul) ul.style.width = "0%";
              }}
            >
              {link.label}
              <span
                data-ul
                style={{
                  display: "block",
                  height: "1px",
                  width: "0%",
                  background: "#6A459B",
                  transition: "width 0.25s ease",
                }}
              />
            </a>
          ))}
        </nav>

        {/* RIGHT — Book a Call + mobile hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <BookButton />

          {/* Hamburger — mobile only */}
          <div className="flex md:hidden" style={{ alignItems: "center" }}>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open navigation menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Menu size={22} />
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              style={{
                background: "#1D1D1B",
                borderLeft: "1px solid rgba(106,69,155,0.22)",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Close button */}
              <SheetClose
                aria-label="Close navigation menu"
                style={{
                  alignSelf: "flex-end",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "24px",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <X size={20} />
              </SheetClose>

              {/* Nav links */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {NAV_LINKS.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "var(--font-raleway, Raleway, sans-serif)",
                      fontWeight: 500,
                      fontSize: "18px",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "12px 0",
                      borderBottom:
                        i < NAV_LINKS.length - 1
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "none",
                      display: "block",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Book a Call at bottom */}
              <div style={{ marginTop: "32px" }}>
                <BookButton fullWidth />
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
