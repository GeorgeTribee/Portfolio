import { PERSONA, WORK, SKILLS, TIMELINE } from "./data/portfolio";
import profilePic from "./assets/profilepic.png";

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconGitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

// ── Header ────────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 48px",
      borderBottom: "1px solid #f0f0f0",
    }}>
      <span style={{ fontWeight: 600, fontSize: 15 }}>{PERSONA.name}</span>
      <nav style={{ display: "flex", gap: 32 }}>
        <a href="#work"    style={{ fontSize: 14, color: "#111", fontWeight: 500 }}>Work</a>
        <a href="#skills"  style={{ fontSize: 14, color: "#111", fontWeight: 500 }}>Skills</a>
        <a href="#contact" style={{ fontSize: 14, color: "#111", fontWeight: 500 }}>Contact</a>
      </nav>
    </header>
  );
}

// ── Divider ───────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <hr style={{
      border: "none",
      borderTop: "1px dashed #e0e0e0",
      margin: "56px 0",
    }} />
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <main style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "64px 24px 120px",
      }}>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: 80, display: "flex", alignItems: "flex-start", gap: 48 }}>

          {/* Left: text */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 20, lineHeight: 1.3 }}>
              Hi, I'm Giorgi 👋
            </h1>

            <p style={{ fontSize: 15, color: "#333", marginBottom: 14 }}>
              I'm a software engineer, AI builder, and startup founder. I've been building
              production systems for 6+ years, from AI pipelines to funded startups.
              Many people call me <strong>Sky</strong>.
            </p>

            <p style={{ fontSize: 15, color: "#333", marginBottom: 14 }}>
              Currently building{" "}
              <strong>OpenBot</strong>, a platform where AI agents collaborate inside a unified system.
              Previously at Krea-IDE and founded Bnollar ($300K raised).
            </p>

            <p style={{ fontSize: 15, color: "#333", marginBottom: 24 }}>
              I'm open to select opportunities and conversations about AI, startups, and investment.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <a
                href={PERSONA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "#0a66c2", display: "flex", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <IconLinkedIn />
              </a>
              <a
                href={PERSONA.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: "#111", display: "flex", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <IconGitHub />
              </a>
            </div>

            {/* Email as plain text */}
            <p style={{ fontSize: 13, color: "#999" }}>{PERSONA.email}</p>
          </div>

          {/* Right: profile photo */}
          <img
            src={profilePic}
            alt="Giorgi Daraselia"
            style={{
              width: 200,
              height: "100%",
              objectFit: "cover",
              flexShrink: 0,
              border: "1px solid #e8e8e8",
              marginLeft: "auto",
              marginRight: -80,
              alignSelf: "stretch",
            }}
          />
        </section>

        <Divider />

        {/* ── Work ─────────────────────────────────────────────────── */}
        <section id="work" style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 28 }}>Work</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {WORK.map((w, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  padding: "13px 0",
                  borderBottom: "1px solid #f2f2f2",
                  gap: 16,
                }}
              >
                {/* Left: company + note */}
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{w.company}</div>
                  <div style={{ fontSize: 12, color: "#aaa", marginTop: 1 }}>{w.note}</div>
                </div>

                {/* Right: role · period · url */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexShrink: 0, whiteSpace: "nowrap" }}>
                  <span style={{ fontSize: 13, color: "#555" }}>{w.role}</span>
                  <span style={{ fontSize: 12, color: "#bbb" }}>·</span>
                  <span style={{ fontSize: 12, color: "#999" }}>{w.period}</span>
                  {w.href && (
                    <>
                      <span style={{ fontSize: 12, color: "#bbb" }}>·</span>
                      <a
                        href={w.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 12, color: "#999", textDecoration: "underline", textDecorationStyle: "dotted", textUnderlineOffset: 2 }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#111")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#999")}
                      >
                        {w.url}
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Timeline ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 28 }}>Timeline</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TIMELINE.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 24,
                  padding: "10px 0",
                  borderBottom: i < TIMELINE.length - 1 ? "1px solid #f2f2f2" : "none",
                }}
              >
                <span style={{ fontSize: 12, color: "#bbb", minWidth: 36, fontVariantNumeric: "tabular-nums" }}>{t.year}</span>
                <span style={{ fontSize: 14, color: "#333" }}>{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Skills ───────────────────────────────────────────────── */}
        <section id="skills" style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 28 }}>Skills</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SKILLS.map((s) => (
              <div key={s.category} style={{ display: "flex", gap: 24, alignItems: "baseline" }}>
                <span style={{ fontSize: 12, color: "#999", minWidth: 140, flexShrink: 0 }}>{s.category}</span>
                <span style={{ fontSize: 14, color: "#333" }}>{s.items}</span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Contact ──────────────────────────────────────────────── */}
        <section id="contact">
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Get in touch</h2>
          <p style={{ fontSize: 15, color: "#555", marginBottom: 20 }}>
            You can{" "}
            <a
              href={`mailto:${PERSONA.email}`}
              style={{ textDecoration: "underline", textDecorationStyle: "dotted", textUnderlineOffset: 3 }}
            >
              email me
            </a>{" "}
            directly or reach out on{" "}
            <a
              href={PERSONA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", textDecorationStyle: "dotted", textUnderlineOffset: 3 }}
            >
              LinkedIn
            </a>
            . I'm open to conversations about AI, startups, and investment.
          </p>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "I actively build and advise AI startups",
              "I'm open to select engineering opportunities",
              "I enjoy helping founders with product and fundraising",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#444" }}>
                <span style={{ color: "#bbb", marginTop: 1 }}>▶</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #f0f0f0",
        padding: "20px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{ fontSize: 12, color: "#bbb" }}>{PERSONA.name}</span>
        <span style={{ fontSize: 12, color: "#bbb" }}>© 2026</span>
      </footer>
    </div>
  );
}
