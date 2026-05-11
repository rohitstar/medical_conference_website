import React from "react";
import { NAV_LINKS, SERVICES } from "../data/constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#040200",
        borderTop: "1px solid rgba(200,150,46,0.15)",
      }}
    >
      <div
        style={{ maxWidth: 1260, margin: "0 auto", padding: "56px 32px 28px" }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <img
              src="/glorious-logo.webp"
              alt="Glorious Conferences"
              style={{
                height: 48,
                width: "auto",
                filter:
                  "brightness(0) invert(1) sepia(1) saturate(4) hue-rotate(3deg)",
                marginBottom: 20,
              }}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: 13,
                lineHeight: 1.8,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              Glorious Professional Conference Organiser. Crafting extraordinary
              events that inspire, connect, and elevate.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["📘", "📷", "💼", "▶️"].map((icon, i) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={i}
                  href="#"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,150,46,0.2)";
                    e.currentTarget.style.borderColor = "rgba(200,150,46,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5
              style={{
                color: "#c8962e",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Quick Links
            </h5>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#c8962e";
                  e.currentTarget.style.paddingLeft = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.38)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.38)",
                  fontSize: 13,
                  marginBottom: 10,
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h5
              style={{
                color: "#c8962e",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Services
            </h5>
            {SERVICES?.map((s, i) => (
              <a
                key={i}
                href="#services"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#c8962e";
                  e.currentTarget.style.paddingLeft = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.38)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.38)",
                  fontSize: 13,
                  marginBottom: 10,
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
              >
                {s?.title}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h5
              style={{
                color: "#c8962e",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Contact
            </h5>
            {[
              [
                "📍",
                "411-13, Plot No. 5-0, Al Barsha First, Pinnacle Sheikh Zayed Road, Dubai - United Arab Emirates",
              ],
              ["📞", "+91 9899889003"],
              ["✉️", "contact@glorioustc.ae"],
            ].map(([icon, val], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 8,
                  marginBottom: 12,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 13, flexShrink: 0 }}>{icon}</span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.38)",
                    fontSize: 12,
                    lineHeight: 1.6,
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
            © 2025 Glorious Conferences LLC. All Rights Reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
            Powered by Concept Conferences Pvt. Ltd.
          </p>
        </div>
      </div>
      <style>{`@media(max-width:860px){.footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}}@media(max-width:500px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
