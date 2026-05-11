import React, { useState } from "react";
import { useInView } from "../hooks";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inp = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(200,150,46,0.2)",
    borderRadius: 8,
    padding: "13px 16px",
    color: "#fff",
    fontSize: 14,
    fontFamily: "'Outfit',sans-serif",
    outline: "none",
    transition: "border-color 0.25s,background 0.25s",
    boxSizing: "border-box",
  };

  return (
    <section id="contact" style={{ padding: "96px 0", background: "#080600" }}>
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 32px" }}>
        <SectionTitle
          subtitle="Let's Talk"
          title="Get in Touch With Us"
          light
        />

        <div
          ref={ref}
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Left — Info */}
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(22px,3vw,36px)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Let's create something
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#c8962e,#f0c060)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                extraordinary together
              </span>
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.48)",
                fontSize: 15,
                lineHeight: 1.85,
                marginBottom: 40,
              }}
            >
              Whether you're planning a national medical congress, an
              international summit, or a corporate gala — our team is ready to
              bring your vision to life. Share your idea and we'll get back
              within 24 hours.
            </p>

            {[
              {
                icon: "📍",
                label: "Address",
                val: "411-13, Plot No. 5-0, Al Barsha First, Pinnacle Sheikh Zayed Road, Dubai - United Arab Emirates",
              },
              { icon: "📞", label: "Phone", val: "+91 9899889003" },
              { icon: "✉️", label: "Email", val: "contact@glorioustc.ae" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 24,
                  padding: "18px 20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(200,150,46,0.12)",
                  borderRadius: 10,
                }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div
                    style={{
                      color: "#c8962e",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: 13,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.val}
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              {[
                ["📘", "FB"],
                ["📷", "IG"],
                ["💼", "LI"],
                ["▶️", "YT"],
                ["𝕏", "TW"],
              ].map(([icon, label]) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={label}
                  href="#"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,150,46,0.2)";
                    e.currentTarget.style.borderColor = "rgba(200,150,46,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.12)";
                  }}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(200,150,46,0.15)",
              borderRadius: 18,
              padding: "36px 32px",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  Message Sent!
                </h4>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                  Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p
                  style={{
                    color: "#c8962e",
                    fontSize: 11,
                    letterSpacing: 3,
                    fontWeight: 700,
                    marginBottom: 24,
                  }}
                >
                  REQUEST A PROPOSAL
                </p>

                <div
                  className="form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <input
                    placeholder="Your Name *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inp}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(200,150,46,0.6)";
                      e.target.style.background = "rgba(255,255,255,0.07)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(200,150,46,0.2)";
                      e.target.style.background = "rgba(255,255,255,0.05)";
                    }}
                  />
                  <input
                    placeholder="Email Address *"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    style={inp}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(200,150,46,0.6)";
                      e.target.style.background = "rgba(255,255,255,0.07)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(200,150,46,0.2)";
                      e.target.style.background = "rgba(255,255,255,0.05)";
                    }}
                  />
                </div>
                <div
                  className="form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    style={inp}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(200,150,46,0.6)";
                      e.target.style.background = "rgba(255,255,255,0.07)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(200,150,46,0.2)";
                      e.target.style.background = "rgba(255,255,255,0.05)";
                    }}
                  />
                  <input
                    placeholder="Organisation"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    style={inp}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(200,150,46,0.6)";
                      e.target.style.background = "rgba(255,255,255,0.07)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(200,150,46,0.2)";
                      e.target.style.background = "rgba(255,255,255,0.05)";
                    }}
                  />
                </div>
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  style={{ ...inp, marginBottom: 14, cursor: "pointer" }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(200,150,46,0.6)";
                    e.target.style.background = "rgba(255,255,255,0.07)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(200,150,46,0.2)";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  <option value="" style={{ background: "#080600" }}>
                    Select Service
                  </option>
                  <option value="conf" style={{ background: "#080600" }}>
                    Conference Management
                  </option>
                  <option value="virtual" style={{ background: "#080600" }}>
                    Virtual / Hybrid Events
                  </option>
                  <option value="abstract" style={{ background: "#080600" }}>
                    Abstract Management
                  </option>
                  <option value="exhibition" style={{ background: "#080600" }}>
                    Exhibition & Sponsorship
                  </option>
                  <option value="tech" style={{ background: "#080600" }}>
                    Event Technology
                  </option>
                  <option value="other" style={{ background: "#080600" }}>
                    Other
                  </option>
                </select>
                <textarea
                  placeholder="Describe your event / requirements..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{ ...inp, resize: "vertical", marginBottom: 20 }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(200,150,46,0.6)";
                    e.target.style.background = "rgba(255,255,255,0.07)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(200,150,46,0.2)";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                />
                <button
                  type="submit"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 36px rgba(200,150,46,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow =
                      "0 6px 24px rgba(200,150,46,0.4)";
                  }}
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg,#c8962e,#f0c060)",
                    color: "#0a0600",
                    padding: "15px",
                    borderRadius: 8,
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: 1.5,
                    border: "none",
                    boxShadow: "0 6px 24px rgba(200,150,46,0.4)",
                    transition: "all 0.3s",
                    cursor: "pointer",
                    fontFamily: "'Outfit',sans-serif",
                  }}
                >
                  SEND REQUEST →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:860px){.contact-grid{grid-template-columns:1fr!important;gap:36px!important}}
        @media(max-width:500px){.form-row{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
