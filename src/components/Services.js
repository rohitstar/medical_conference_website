import React from "react";
import { useInView } from "../hooks";
import SectionTitle from "./SectionTitle";
import { SERVICES } from "../data/constants";

export default function Services() {
  const [ref, inView] = useInView();
  return (
    <section id="services" style={{ padding: "96px 0", background: "#080600" }}>
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle
          subtitle="What We Do"
          title="Expertise & Services"
          light
        />
        <div
          ref={ref}
          className="svc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,150,46,0.1)";
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "none";
              }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "28px 22px",
                cursor: "default",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(28px)",
                transition: `opacity 0.7s ease ${i * 0.07}s,transform 0.7s ease ${i * 0.07}s,background 0.3s,border-color 0.3s`,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 2,
                  background: s.color,
                  borderRadius: 1,
                  marginBottom: 14,
                }}
              />
              <h4
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.42)",
                  fontSize: 13,
                  lineHeight: 1.75,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:540px){.svc-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
