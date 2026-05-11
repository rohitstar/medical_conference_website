import React, { useState, useEffect } from "react";
import { useInView } from "../hooks";
import SectionTitle from "./SectionTitle";
import { TESTIMONIALS } from "../data/constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      style={{ padding: "96px 0", background: "#faf8f4" }}
    >
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle subtitle="Client Voices" title="What Our Clients Say" />

        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(28px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Main testimonial */}
          <div
            style={{
              background: "#080600",
              borderRadius: 20,
              padding: "clamp(32px,5vw,60px)",
              position: "relative",
              overflow: "hidden",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(200,150,46,0.1),transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(200,150,46,0.06),transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                fontSize: 72,
                lineHeight: 1,
                color: "rgba(200,150,46,0.2)",
                fontFamily: "Georgia",
                marginBottom: 16,
                position: "relative",
                zIndex: 1,
              }}
            >
              "
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontStyle: "italic",
                fontSize: "clamp(18px,2.5vw,28px)",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.7,
                maxWidth: 820,
                marginBottom: 36,
                position: "relative",
                zIndex: 1,
              }}
            >
              {t.quote}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: `${t.color}20`,
                  border: `3px solid ${t.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: t.color,
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
                  {t.name}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 13,
                    marginTop: 2,
                  }}
                >
                  {t.role}
                </div>
              </div>
              {/* Gold stars */}
              <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#f0c060", fontSize: 18 }}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dots & mini cards */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: active === i ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background:
                    active === i ? "#c8962e" : "rgba(200,150,46,0.25)",
                  border: "none",
                  transition: "all 0.4s",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* All testimonial avatars */}
          <div
            className="tcard-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 16,
            }}
          >
            {TESTIMONIALS.map((t2, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = t2.color;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    active === i ? t2.color : "#ede8de";
                  e.currentTarget.style.transform = "none";
                }}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "18px 16px",
                  border: `2px solid ${active === i ? t2.color : "#ede8de"}`,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `${t2.color}18`,
                    border: `2px solid ${t2.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontWeight: 800,
                    fontSize: 16,
                    color: t2.color,
                    margin: "0 auto 10px",
                  }}
                >
                  {t2.initials}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#0a0600",
                    marginBottom: 2,
                  }}
                >
                  {t2.name}
                </div>
                <div style={{ color: "#7a6a50", fontSize: 11 }}>{t2.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:600px){.tcard-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}
