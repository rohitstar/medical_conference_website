import React from "react";
import { useInView } from "../hooks";
import SectionTitle from "./SectionTitle";
import { SPEAKERS } from "../data/constants";

function Card({ s, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)";
        e.currentTarget.style.borderColor = s.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = inView ? "none" : "translateY(28px)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "#efefef";
      }}
      style={{
        textAlign: "center",
        padding: "36px 24px",
        borderRadius: 16,
        border: "1px solid #efefef",
        background: "#fff",
        cursor: "default",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}, box-shadow 0.3s, border-color 0.3s`,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          margin: "0 auto 18px",
          background: `${s.color}18`,
          border: `3px solid ${s.color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 26,
          fontWeight: 800,
          color: s.color,
        }}
      >
        {s.initials}
      </div>
      <h4
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 20,
          fontWeight: 700,
          color: "#0a1628",
          marginBottom: 4,
        }}
      >
        {s.name}
      </h4>
      <p style={{ color: "#5a6a7a", fontSize: 13, marginBottom: 12 }}>
        {s.role}
      </p>
      <span
        style={{
          background: `${s.color}18`,
          color: s.color,
          padding: "4px 14px",
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        {s.specialty}
      </span>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" style={{ padding: "96px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
        <SectionTitle
          subtitle="Distinguished Faculty"
          title="Meet Our Eminent Speakers"
        />
        <div
          className="spk-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 26,
          }}
        >
          {SPEAKERS.map((s, i) => (
            <Card key={i} s={s} delay={`${i * 0.1}s`} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
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
              padding: "13px 38px",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1.5,
              transition: "all 0.3s",
            }}
          >
            VIEW ALL FACULTY →
          </button>
        </div>
      </div>
      <style>{`@media(max-width:860px){.spk-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){.spk-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
