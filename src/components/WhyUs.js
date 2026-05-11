import React from "react";
import { useInView } from "../hooks";
import SectionTitle from "./SectionTitle";
import { WHY_US } from "../data/constants";

export default function WhyUs() {
  const [ref, inView] = useInView();

  return (
    <section
      id="whyus"
      style={{
        padding: "100px 0",
        background: "#080600",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(90px,16vw,220px)",
          fontWeight: 900,
          color: "rgba(200,150,46,0.03)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-6px",
        }}
      >
        GLORIOUS
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionTitle
          subtitle="Our Community"
          title="Connect, Collaborate, Advance"
          light
        />
        <p
          style={{
            color: "rgba(255,255,255,0.68)",
            fontSize: "15px",
            lineHeight: 1.9,
            textAlign: "center",
          }}
        >
          Whether you seek to stay abreast of the latest evidence, present your
          work to a global audience, build collaborations or explore innovations
          in healthcare delivery, Glorious Conferences provides an enriching and
          professionally rewarding experience.
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.68)",
            fontSize: "15px",
            lineHeight: 1.9,
            textAlign: "center",
          }}
        >
          Glorious Conferences offers a dynamic platform for healthcare
          professionals and stakeholders to engage with the latest scientific
          advances, clinical practices and healthcare innovations. Through
          expert-led sessions, global perspectives and meaningful professional
          interactions, participants gain practical insights, build valuable
          connections and contribute to advancing patient care and medical
          science.
        </p>

        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "38px",
            marginTop: "60px",
          }}
        >
          {WHY_US.map((item, i) => (
            <div
              key={i}
              className={`why-card ${i % 2 !== 0 ? "reverse" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "36px",
                padding: "28px",
                borderRadius: "26px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(200,150,46,0.22)",
                backdropFilter: "blur(8px)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0px)" : "translateY(40px)",
                transition: `all 0.7s ease ${i * 0.12}s`,
              }}
            >
              {/* Image */}
              <div
                style={{
                  flex: "0 0 340px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "-8px",
                    background:
                      "linear-gradient(135deg,rgba(200,150,46,0.25),transparent)",
                    borderRadius: "22px",
                    filter: "blur(16px)",
                  }}
                />

                <img
                  src={item?.image}
                  alt={item?.title}
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: "#c8962e",
                    fontSize: "clamp(24px,3vw,34px)",
                    fontWeight: 800,
                    marginBottom: "16px",
                    lineHeight: 1.2,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.68)",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    maxWidth: "720px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          style={{
            marginTop: "70px",
            textAlign: "center",
            maxWidth: "1000px",
            marginInline: "auto",
          }}
        >
          <h3
            style={{
              color: "#c8962e",
              fontSize: "clamp(24px,3vw,40px)",
              fontWeight: 800,
              lineHeight: 1.4,
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Attending Glorious Conferences enables every stakeholder in the
            healthcare ecosystem to learn, connect and contribute toward better
            health outcomes.
          </h3>
        </div>
      </div>

      <style>{`
        .why-card:hover{
          transform: translateY(-6px) !important;
          border-color: rgba(200,150,46,0.45) !important;
          background: rgba(200,150,46,0.05) !important;
        }

        @media(max-width: 900px){
          .why-card{
            flex-direction: column !important;
            text-align: center;
          }

          .why-card.reverse{
            flex-direction: column !important;
          }
        }

        @media(max-width: 640px){
          .why-card{
            padding: 22px !important;
          }

          .why-card img{
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
