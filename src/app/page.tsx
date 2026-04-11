function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg viewBox="0 0 32 32" width="28" height="28" style={{ flexShrink: 0 }}>
        <rect width="32" height="32" rx="4" fill="#113355" />
        <rect x="5" y="20" width="4" height="4" rx="0.5" fill="#2F80FF" opacity="0.35" />
        <rect x="11" y="16" width="4" height="8" rx="0.5" fill="#2F80FF" opacity="0.55" />
        <rect x="17" y="12" width="4" height="12" rx="0.5" fill="#2F80FF" opacity="0.75" />
        <rect x="23" y="7" width="4" height="17" rx="0.5" fill="#2F80FF" opacity="1.0" />
        <line x1="7" y1="14" x2="25" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="22,4 26,5 24,8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: "15px", letterSpacing: "-0.01em" }}>
        <span style={{ fontWeight: 400, color: "#E6EDF5" }}>Extract</span>
        <span style={{ fontWeight: 600, color: "#2F80FF" }}>Signal</span>
      </span>
    </div>
  );
}

function Nav() {
  return (
    <nav style={{ borderBottom: "1px solid #1F3B5B", background: "#0A2540" }}>
      <div className="es-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "56px" }}>
        <Logo />
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <a href="#methodology" style={{ fontSize: "12px", color: "#9FB3C8", textDecoration: "none" }}>How it works</a>
          <a href="#verticals" style={{ fontSize: "12px", color: "#9FB3C8", textDecoration: "none" }}>Verticals</a>
          <a href="#contact" style={{ fontSize: "12px", color: "#9FB3C8", textDecoration: "none" }}>Results</a>
          <a
            href="#contact"
            style={{
              background: "#2F80FF",
              color: "white",
              fontSize: "12px",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: "3px",
              textDecoration: "none",
            }}
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ background: "#0A2540", borderBottom: "1px solid #1F3B5B" }}>
      <div className="es-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "560px" }}>
          <span
            style={{
              display: "inline-block",
              background: "#113355",
              border: "1px solid #1F3B5B",
              borderRadius: "2px",
              padding: "4px 10px",
              fontSize: "10px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(159,179,200,0.75)",
              marginBottom: "24px",
            }}
          >
            Growth Marketing
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "16px" }}>
            <span style={{ color: "#E6EDF5" }}>Signal from </span>
            <span style={{ color: "#2F80FF", fontWeight: 600 }}>noise.</span>
          </h1>
          <p style={{ fontSize: "12px", color: "rgba(159,179,200,0.75)", opacity: 0.7, marginBottom: "12px" }}>
            Signal extraction for structured settlement and legal data.
          </p>
          <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.6, color: "#9FB3C8", maxWidth: "480px" }}>
            We extract and qualify high-intent prospects at the source. Delivering structured opportunities to operators who convert them.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "32px" }}>
            <a
              href="#contact"
              style={{
                background: "#2F80FF",
                color: "white",
                fontSize: "13px",
                fontWeight: 600,
                padding: "12px 26px",
                borderRadius: "3px",
                textDecoration: "none",
              }}
            >
              Start a conversation
            </a>
            <a
              href="#methodology"
              style={{
                border: "1px solid #2F80FF",
                color: "#2F80FF",
                fontSize: "13px",
                fontWeight: 600,
                padding: "12px 26px",
                borderRadius: "3px",
                textDecoration: "none",
                background: "none",
              }}
            >
              View methodology
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const stats = [
    { value: "94%", label: "Qualified lead rate" },
    { value: "3.2×", label: "Average client ROI" },
    { value: "48hr", label: "Median delivery time" },
  ];
  return (
    <section style={{ borderBottom: "1px solid #1F3B5B", background: "#0A2540" }}>
      <div className="es-container">
        <div className="metrics-grid">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={i > 0 ? "metrics-cell-bordered" : "metrics-cell"}
              style={{ paddingTop: "32px", paddingBottom: "32px" }}
            >
              <div style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.02em", color: "#E6EDF5", marginBottom: "4px" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(159,179,200,0.75)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  const steps = [
    { num: "01", title: "Extract", body: "Extract high-intent signals from source data." },
    { num: "02", title: "Qualify", body: "Every lead verified and scored against your criteria." },
    { num: "03", title: "Deliver", body: "Delivered to your CRM. No noise. No lag." },
  ];
  return (
    <section id="methodology" style={{ background: "#0A2540", borderBottom: "1px solid #1F3B5B" }}>
      <div className="es-container">
        <div style={{ paddingTop: "48px", paddingBottom: "32px" }}>
          <span style={{ display: "block", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(159,179,200,0.75)", marginBottom: "12px" }}>
            How it works
          </span>
          <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.015em", color: "#E6EDF5" }}>
            A conversion system, <span style={{ color: "#2F80FF" }}>end-to-end.</span>
          </h2>
        </div>
        <div className="pipeline-grid" style={{ borderTop: "1px solid #1F3B5B" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={i > 0 ? "pipeline-cell-bordered" : "pipeline-cell"}
              style={{ paddingTop: "32px", paddingBottom: "32px" }}
            >
              <div style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#2F80FF", marginBottom: "16px" }}>
                {step.num}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "8px" }}>
                {step.title}
              </div>
              <p style={{ fontSize: "12px", color: "rgba(159,179,200,0.75)", opacity: 0.8, lineHeight: 1.55 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Verticals() {
  const items = [
    { title: "Structured settlements", subtitle: "Plaintiff & claimant targeting", tag: "CORE", tagType: "core" as const },
    { title: "Legal services", subtitle: "Mass tort & personal injury", tag: "ACTIVE", tagType: "active" as const },
    { title: "Financial services", subtitle: "Annuity & insurance buyers", tag: "ACTIVE", tagType: "active" as const },
    { title: "Healthcare", subtitle: "Patient acquisition & referrals", tag: "SOON", tagType: "soon" as const },
  ];

  const tagStyles = {
    core: { background: "#2F80FF", color: "white", border: "none" },
    active: { background: "none", color: "#2F80FF", border: "1px solid #2F80FF" },
    soon: { background: "none", color: "rgba(159,179,200,0.5)", border: "1px solid rgba(47,128,255,0.35)" },
  };

  return (
    <section id="verticals" style={{ background: "#113355", borderBottom: "1px solid #1F3B5B" }}>
      <div className="es-container">
        <div style={{ paddingTop: "48px", paddingBottom: "32px" }}>
          <span style={{ display: "block", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(159,179,200,0.75)", marginBottom: "12px" }}>
            Verticals
          </span>
          <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.015em", color: "#E6EDF5" }}>
            Built for <span style={{ color: "#2F80FF" }}>high-stakes</span> decision systems.
          </h2>
        </div>
        <div className="verticals-grid" style={{ marginBottom: "48px" }}>
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#0A2540",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>{item.title}</div>
                <div style={{ fontSize: "11px", color: "rgba(159,179,200,0.75)", marginTop: "2px" }}>{item.subtitle}</div>
              </div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "2px 8px",
                  borderRadius: "2px",
                  ...tagStyles[item.tagType],
                }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFooter() {
  return (
    <footer id="contact" style={{ background: "#0A2540" }}>
      <div className="es-container cta-layout" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.015em", color: "#E6EDF5" }}>
            Ready to extract the <span style={{ color: "#2F80FF" }}>right signal?</span>
          </h2>
          <p style={{ fontSize: "12px", color: "rgba(159,179,200,0.75)" }}>
            Direct access to verified, high-intent opportunities.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(159,179,200,0.55)" }}>
            <a href="mailto:zach@extractsignal.com" style={{ color: "inherit", textDecoration: "none" }}>
              zach@extractsignal.com
            </a>
          </p>
        </div>
        <a
          href="mailto:zach@extractsignal.com"
          style={{
            background: "#2F80FF",
            color: "white",
            fontSize: "13px",
            fontWeight: 600,
            padding: "13px 28px",
            borderRadius: "3px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            alignSelf: "center",
          }}
        >
          Let&apos;s talk
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Metrics />
      <Pipeline />
      <Verticals />
      <CTAFooter />
    </>
  );
}
