import React, { useState } from "react";
import { useScrolled } from "../hooks";
import { NAV_LINKS } from "../data/constants";

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(8,6,2,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(200,160,60,0.18)"
          : "1px solid transparent",
        transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        style={{
          maxWidth: 1260,
          margin: "0 auto",
          padding: "0 32px",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── LOGO ── */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <img
            src="/glorious-logo.webp"
            alt="Glorious Conferences LLC"
            style={{
              height: 56,
              width: "auto",
              display: "block",
              filter:
                "brightness(0) invert(1) sepia(1) saturate(4) hue-rotate(3deg)",
              transition: "transform 0.3s, filter 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>

        {/* ── DESKTOP NAV ── */}
        <div
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {NAV_LINKS.slice(0, 6).map((l) => (
            <a
              key={l.label}
              href={l.href}
              onMouseEnter={() => setHover(l.label)}
              onMouseLeave={() => setHover(null)}
              style={{
                color: hover === l.label ? "#c8962e" : "rgba(255,255,255,0.82)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.6,
                textDecoration: "none",
                transition: "color 0.25s",
                position: "relative",
              }}
            >
              {l.label}
              {hover === l.label && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 1.5,
                    background: "#c8962e",
                    borderRadius: 1,
                  }}
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 32px rgba(200,150,46,0.65)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(200,150,46,0.4)";
            }}
            style={{
              background: "linear-gradient(135deg,#c8962e,#f0c060)",
              color: "#0a0600",
              padding: "10px 26px",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1.2,
              boxShadow: "0 4px 20px rgba(200,150,46,0.4)",
              transition: "all 0.3s",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            GET IN TOUCH
          </a>
        </div>

        {/* ── HAMBURGER ── */}
        <button
          className="hamburger"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            padding: 8,
            cursor: "pointer",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                height: 2,
                borderRadius: 2,
                background: "#c8962e",
                transition: "all 0.3s",
                width: i === 2 ? (open ? 24 : 14) : 24,
                transform: open
                  ? i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : "none"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {open && (
        <div
          style={{
            background: "rgba(8,6,2,0.98)",
            padding: "12px 32px 32px",
            borderTop: "1px solid rgba(200,150,46,0.12)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.8)",
                padding: "14px 0",
                fontSize: 15,
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-block",
              marginTop: 20,
              background: "linear-gradient(135deg,#c8962e,#f0c060)",
              color: "#0a0600",
              padding: "12px 32px",
              borderRadius: 4,
              fontWeight: 800,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            GET IN TOUCH
          </a>
        </div>
      )}

      <style>{`@media(max-width:960px){.nav-links{display:none!important}.hamburger{display:flex!important}}`}</style>
    </nav>
  );
}
