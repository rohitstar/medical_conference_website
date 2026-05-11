import React from "react";
import { useInView } from "../hooks";
import SectionTitle from "./SectionTitle";

export default function About() {
  const [lr, li] = useInView();
  const [rr, ri] = useInView();

  const timeline = [
    {
      year: "1998",
      label: "Founded in Dubai - United Arab Emirates",
    },
    { year: "2005", label: "First International Conference (Dubai)" },
    {
      year: "2012",
      label: "Launched Proprietary Event App Platform",
    },
    { year: "2020", label: "Pioneered Hybrid Events in Dubai" },
    { year: "2025", label: "500+ Events · 50+ Countries" },
  ];

  return (
    <section id="about" style={{ padding: "96px 0", background: "#faf8f4" }}>
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle
          subtitle="Who We Are"
          title="About Glorious Conferences LLC"
        />

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          {/* Left — Story */}
          <div
            ref={lr}
            style={{
              opacity: li ? 1 : 0,
              transform: li ? "none" : "translateX(-36px)",
              transition: "all 0.85s ease",
            }}
          >
            <div style={{ position: "relative", marginBottom: 32 }}>
              {/* Gold accent block */}
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: -12,
                  width: 80,
                  height: 80,
                  background: "rgba(200,150,46,0.1)",
                  borderRadius: 12,
                  zIndex: 0,
                }}
              />
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "clamp(26px,3vw,38px)",
                  fontWeight: 800,
                  color: "#0a0600",
                  lineHeight: 1.25,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Transforming events into
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg,#c8962e,#d4a84b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  extraordinary experiences
                </span>
              </h3>
            </div>

            <p
              style={{
                color: "#5a5040",
                lineHeight: 1.9,
                fontSize: 15,
                marginBottom: 20,
              }}
            >
              <strong>Glorious Conferences LLC </strong>a Dubai based
              Professional Conference Organizer dedicated to curating
              high-impact medical congresses across focused specialties such as
              Pulmonology, Obstetrics & Gynaecology, IVF & Reproductive
              Medicine, Orthopaedics and Internal Medicine. Our mission is to
              create meaningful academic platforms that bring together knowledge
              seekers and leading experts from around the world to exchange the
              latest scientific advances, clinical practices and research
              insights within their respective fields.
            </p>
            <p
              style={{
                color: "#5a5040",
                lineHeight: 1.9,
                fontSize: 15,
                marginBottom: 32,
              }}
            >
              Glorious Conferences LLC has its roots in India through its sister
              concern, Concept Conferences Pvt. Ltd., a well-established
              organization renowned for its expertise in planning and executing
              medical conferences. Drawing on this strong legacy and domain
              knowledge, Glorious extends the same commitment to scientific
              quality and professional excellence in its global initiatives.
            </p>

            <p
              style={{
                color: "#5a5040",
                lineHeight: 1.9,
                fontSize: 15,
                marginBottom: 32,
              }}
            >
              With a strong commitment to academic excellence and seamless
              execution, Glorious Conferences LLC aims to serve as a trusted
              global platform where clinicians, researchers and healthcare
              professionals connect, learn and contribute to advancing medical
              science. The organization conceptualizes and executes conferences
              that foster knowledge exchange, professional collaboration and
              clinical advancement.
            </p>

            <p
              style={{
                color: "#5a5040",
                lineHeight: 1.9,
                fontSize: 15,
                marginBottom: 32,
              }}
            >
              We believe that progress in healthcare thrives on collaboration,
              continuing education and global dialogue. Each of our conferences
              is thoughtfully designed to foster peer learning,
              multidisciplinary engagement and practical knowledge transfer that
              can directly enhance patient care. We work closely with
              distinguished faculty, medical societies and industry partners to
              ensure our programs remain relevant, evidence-based and
              future-focused.
            </p>

            {/* Timeline */}
            {timeline?.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  marginBottom: 14,
                }}
              >
                <div style={{ width: 54, flexShrink: 0, textAlign: "right" }}>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontWeight: 800,
                      fontSize: 15,
                      color: "#c8962e",
                    }}
                  >
                    {item.year}
                  </span>
                </div>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#c8962e",
                    flexShrink: 0,
                    boxShadow: "0 0 0 3px rgba(200,150,46,0.2)",
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: "rgba(200,150,46,0.15)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 12,
                      top: -9,
                      color: "#5a5040",
                      fontSize: 13,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Cards */}
          <div
            ref={rr}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
              opacity: ri ? 1 : 0,
              transform: ri ? "none" : "translateX(36px)",
              transition: "all 0.85s ease 0.15s",
            }}
          >
            {[
              {
                num: "500+",
                label: "Events Delivered",
                bg: "linear-gradient(135deg,#c8962e,#d4a84b)",
                dark: true,
              },
              {
                num: "25+",
                label: "Years of Excellence",
                bg: "#fff",
                dark: false,
              },
              {
                num: "50+",
                label: "Countries Reached",
                bg: "#fff",
                dark: false,
              },
              {
                num: "98%",
                label: "Client Satisfaction",
                bg: "linear-gradient(135deg,#0a0600,#1a1200)",
                dark: true,
              },
            ].map((c, i) => (
              <div
                key={i}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0,0,0,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.06)";
                }}
                style={{
                  background: c.bg,
                  borderRadius: 16,
                  padding: "32px 24px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 50,
                    fontWeight: 800,
                    lineHeight: 1,
                    color: c.dark ? "#fff" : "#c8962e",
                    marginBottom: 8,
                  }}
                >
                  {c.num}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: c.dark ? "rgba(255,255,255,0.7)" : "#5a5040",
                    letterSpacing: 0.5,
                  }}
                >
                  {c.label}
                </div>
              </div>
            ))}

            {/* Wide card */}
            <div
              style={{
                gridColumn: "1/-1",
                background: "#fff",
                borderRadius: 16,
                padding: "24px 28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "linear-gradient(135deg,#c8962e22,#c8962e44)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  flexShrink: 0,
                }}
              >
                🏆
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 15,
                    color: "#0a0600",
                    marginBottom: 4,
                  }}
                >
                  Best PCO Award — Events
                </div>
                <div
                  style={{ color: "#7a6a50", fontSize: 13, lineHeight: 1.6 }}
                >
                  Recognised by the Events & Exhibition Industry Association as
                  Dubai Best Professional Conference Organiser.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}
