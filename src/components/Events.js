import React, { useState } from "react";
import { useInView } from "../hooks";
import SectionTitle from "./SectionTitle";
import { EVENTS } from "../data/constants";

export default function Events() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="events" style={{ padding: "96px 0", background: "#faf8f4" }}>
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle
          subtitle="Our Portfolio"
          title="Signature Events We've Organised"
        />

        <div
          ref={ref}
          className="ev-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow:
                  hovered === i
                    ? "0 20px 52px rgba(0,0,0,0.14)"
                    : "0 4px 20px rgba(0,0,0,0.07)",
                transition: "all 0.4s ease",
                cursor: "default",
                transform: hovered === i ? "translateY(-6px)" : "none",
                opacity: inView ? 1 : 0,
                animation: inView
                  ? `fadeUp 0.7s ease ${i * 0.1}s both`
                  : "none",
              }}
            >
              {/* Card top — coloured banner */}
              <div
                style={{
                  background: `linear-gradient(135deg,${ev.color}22,${ev.color}44)`,
                  padding: "32px 28px",
                  borderBottom: `3px solid ${ev.color}`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: `${ev.color}15`,
                  }}
                />
                <span
                  style={{
                    display: "inline-block",
                    background: ev.color,
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                    padding: "4px 12px",
                    borderRadius: 20,
                    marginBottom: 14,
                  }}
                >
                  {ev.category}
                </span>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#0a0600",
                    marginBottom: 8,
                    lineHeight: 1.2,
                  }}
                >
                  {ev.title}
                </h4>
                <p
                  style={{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {ev.month}
                </p>
              </div>
              {/* Card bottom */}
              <div
                style={{
                  background: "#fff",
                  padding: "22px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{ color: "#7a6a50", fontSize: 12, marginBottom: 4 }}
                  >
                    📍 {ev.location}
                  </div>
                  <div
                    style={{ fontWeight: 800, color: "#0a0600", fontSize: 15 }}
                  >
                    {ev.delegates}{" "}
                    <span style={{ color: ev.color }}>delegates</span>
                  </div>
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: `${ev.color}14`,
                    border: `2px solid ${ev.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ev.color,
                    fontWeight: 800,
                    fontSize: 16,
                    transition: "all 0.3s",
                    transform: hovered === i ? "rotate(45deg)" : "none",
                  }}
                >
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 52 }}>
          <button
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#c8962e";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#c8962e";
            }}
            style={{
              border: "2px solid #c8962e",
              color: "#c8962e",
              background: "transparent",
              padding: "13px 40px",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1.5,
              transition: "all 0.3s",
              cursor: "pointer",
            }}
          >
            VIEW ALL EVENTS →
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
        @media(max-width:900px){.ev-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.ev-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
