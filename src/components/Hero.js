import React, { useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";
import { STATS } from "../data/constants";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const anim = (delay = 0) =>
    loaded ? { animation: `fadeUp 0.9s ease ${delay}s both` } : { opacity: 0 };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#080600 0%,#0f0c02 35%,#100800 65%,#060400 100%)",
        overflow: "hidden",
      }}
    >
      <ParticleCanvas />

      {/* Dynamic glow that follows mouse */}
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          zIndex: 0,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(200,150,46,0.12) 0%,transparent 70%)",
          left: `calc(${mousePos.x * 100}% - 300px)`,
          top: `calc(${mousePos.y * 100}% - 300px)`,
          transition: "left 0.8s ease, top 0.8s ease",
        }}
      />

      {/* Decorative lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: 1,
          height: "100%",
          background:
            "linear-gradient(to bottom,transparent,rgba(200,150,46,0.08),transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: 1,
          background:
            "linear-gradient(to right,transparent,rgba(200,150,46,0.05),transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Rotating ring decoration */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(200,150,46,0.07)",
          animation: "spin-slow 30s linear infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 240,
          height: 240,
          margin: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(200,150,46,0.05)",
          animation: "spin-slow 20s linear infinite reverse",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1260,
          margin: "0 auto",
          padding: "0 32px",
          paddingTop: 100,
          paddingBottom: 70,
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 440px",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* ── LEFT ── */}
          <div>
            {/* Tag */}
            <div
              style={{
                ...anim(0.05),
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  height: 1,
                  width: 40,
                  background: "linear-gradient(to right,transparent,#c8962e)",
                }}
              />
              <span
                style={{
                  color: "#c8962e",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                Professional Conference Organiser
              </span>
              <div
                style={{
                  height: 1,
                  width: 40,
                  background: "linear-gradient(to left,transparent,#c8962e)",
                }}
              />
            </div>

            {/* Headline */}
            <h1
              style={{
                ...anim(0.18),
                fontFamily: "'Cormorant Garamond',serif",
                fontWeight: 800,
                lineHeight: 1.0,
                color: "#fff",
                marginBottom: 18,
              }}
            >
              <span
                style={{ display: "block", fontSize: "clamp(48px,7vw,90px)" }}
              >
                Crafting
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(48px,7vw,90px)",
                  background: "linear-gradient(90deg,#c8962e,#f0c060,#d4a84b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200%",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                Extraordinary
              </span>
              <span
                style={{ display: "block", fontSize: "clamp(48px,7vw,90px)" }}
              >
                Conferences
              </span>
            </h1>

            <p
              style={{
                ...anim(0.35),
                color: "rgba(255,255,255,0.55)",
                fontSize: "clamp(15px,1.5vw,18px)",
                lineHeight: 1.85,
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              Glorious Conferences LLC is Dubai premier Professional
              Conference Organiser, transforming medical congresses, academic
              summits and corporate events into unforgettable experiences that
              inspire, connect, and elevate.
            </p>

            <p
              style={{
                ...anim(0.35),
                fontFamily: "'Cormorant Garamond',serif",
                fontStyle: "italic",
                fontSize: "clamp(18px,2.5vw,26px)",
                color: "rgba(255,255,255,0.65)",
                marginBottom: 8,
              }}
            >
              Medicine: Basics to Advancements
            </p>

            <p
              style={{
                ...anim(0.45),
                color: "rgba(255,255,255,0.45)",
                fontSize: 14,
                marginBottom: 12,
              }}
            >
              📍 411-13, Plot No. 5-0, Al Barsha First, Pinnacle Sheikh Zayed
              Road, Dubai - United Arab Emirates
            </p>
            <p
              style={{
                ...anim(0.45),
                color: "rgba(255,255,255,0.45)",
                fontSize: 14,
                marginBottom: 36,
              }}
            >
              📞 +91 9899889003
            </p>

            {/* Buttons */}
            <div
              style={{
                ...anim(0.48),
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 56,
              }}
            >
              <a
                href="#services"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(200,150,46,0.65)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 6px 28px rgba(200,150,46,0.42)";
                }}
                style={{
                  background: "linear-gradient(135deg,#c8962e,#f0c060)",
                  color: "#0a0600",
                  padding: "16px 40px",
                  borderRadius: 4,
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: 1.8,
                  boxShadow: "0 6px 28px rgba(200,150,46,0.42)",
                  transition: "all 0.3s",
                  textDecoration: "none",
                }}
              >
                OUR SERVICES
              </a>
              <a
                href="#events"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(200,150,46,0.12)";
                  e.currentTarget.style.borderColor = "rgba(200,150,46,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(200,150,46,0.04)";
                  e.currentTarget.style.borderColor = "rgba(200,150,46,0.3)";
                }}
                style={{
                  background: "rgba(200,150,46,0.04)",
                  border: "1.5px solid rgba(200,150,46,0.3)",
                  color: "#c8962e",
                  padding: "16px 40px",
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: 1.8,
                  transition: "all 0.3s",
                  textDecoration: "none",
                }}
              >
                VIEW EVENTS
              </a>
            </div>

            {/* Mini stats */}
            <div
              style={{
                ...anim(0.6),
                display: "flex",
                gap: 36,
                flexWrap: "wrap",
              }}
            >
              {STATS.map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 34,
                      fontWeight: 800,
                      color: "#f0c060",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: 11,
                      letterSpacing: 1.5,
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Glassy Card ── */}
          <div
            style={{
              animation: loaded ? "slideRight 1s ease 0.4s both" : "none",
              opacity: loaded ? undefined : 0,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(200,150,46,0.18)",
                borderRadius: 20,
                padding: "36px 30px",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow top-right */}
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(200,150,46,0.15),transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <p
                style={{
                  color: "#c8962e",
                  fontSize: 11,
                  letterSpacing: 3,
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                WHY CHOOSE GLORIOUS?
              </p>

              {[
                [
                  "🏆",
                  "Award-Winning PCO",
                  "Recognised as India's Best Conference Organiser 2023",
                ],
                [
                  "🤝",
                  "Full-Service Partner",
                  "From concept to curtain-call, we own every detail",
                ],
                [
                  "📱",
                  "Tech-Powered Events",
                  "Proprietary platforms for seamless digital experiences",
                ],
                [
                  "🌐",
                  "Global Network",
                  "50+ countries, 1,000+ vendor partners worldwide",
                ],
                [
                  "💰",
                  "ROI Focused",
                  "Proven sponsorship models that maximise your revenue",
                ],
              ].map(([icon, title, sub], i) => (
                <div
                  key={i}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,150,46,0.07)";
                    e.currentTarget.style.paddingLeft = "16px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s",
                    borderRadius: 6,
                    cursor: "default",
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 14,
                        marginBottom: 2,
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: 12,
                        lineHeight: 1.5,
                      }}
                    >
                      {sub}
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="#contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 24,
                  background: "linear-gradient(135deg,#c8962e,#f0c060)",
                  color: "#0a0600",
                  padding: "13px",
                  borderRadius: 8,
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: 1.5,
                  textDecoration: "none",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                REQUEST A PROPOSAL →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "bounceY 2.5s ease-in-out infinite",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: 10,
            letterSpacing: 3,
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom,rgba(200,150,46,0.5),transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
        @keyframes slideRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:none}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes bounceY{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-10px)}}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @media(max-width:960px){.hero-grid{grid-template-columns:1fr!important}.hero-grid>div:last-child{display:none!important}}
      `}</style>
    </section>
  );
}
