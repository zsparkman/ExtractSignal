function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" width="28" height="28" className="shrink-0">
        <rect width="32" height="32" rx="4" fill="#113355" />
        <rect x="5" y="20" width="4" height="4" rx="0.5" fill="#2F80FF" opacity="0.35" />
        <rect x="11" y="16" width="4" height="8" rx="0.5" fill="#2F80FF" opacity="0.55" />
        <rect x="17" y="12" width="4" height="12" rx="0.5" fill="#2F80FF" opacity="0.75" />
        <rect x="23" y="7" width="4" height="17" rx="0.5" fill="#2F80FF" opacity="1.0" />
        <line x1="7" y1="14" x2="25" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="22,4 26,5 24,8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-body tracking-tight">
        <span className="font-normal text-text-primary">Extract</span>
        <span className="font-semibold text-accent">Signal</span>
      </span>
    </div>
  );
}

function Nav() {
  return (
    <nav className="border-b border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-14">
        <Logo />
        <div className="flex items-center gap-7">
          <a href="#methodology" className="text-nav text-text-secondary hover:text-text-primary transition-colors">How it works</a>
          <a href="#verticals" className="text-nav text-text-secondary hover:text-text-primary transition-colors">Verticals</a>
          <a href="#contact" className="text-nav text-text-secondary hover:text-text-primary transition-colors">Results</a>
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover transition-colors text-white text-nav font-semibold px-5 py-2 rounded-sm"
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
    <section className="bg-bg-primary border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-xl">
          <span className="inline-block bg-bg-card border border-border rounded-sm px-2.5 py-1 text-label font-semibold uppercase tracking-widest text-text-secondary/75 mb-6">
            Growth Marketing
          </span>
          <h1 className="text-hero font-normal tracking-tighter leading-tight mb-4">
            <span className="text-text-primary">Signal from </span>
            <span className="text-accent font-semibold">noise.</span>
          </h1>
          <p className="text-nav text-text-secondary/75 opacity-70 mb-3">
            Signal extraction for structured settlement and legal data.
          </p>
          <p className="text-body font-normal leading-relaxed text-text-secondary max-w-lg">
            We extract and qualify high-intent prospects at the source. Delivering structured opportunities to operators who convert them.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-hover transition-colors text-white text-btn font-semibold px-7 py-3 rounded-sm"
            >
              Start a conversation
            </a>
            <a
              href="#methodology"
              className="border border-accent text-accent hover:bg-accent hover:text-white transition-colors text-btn font-semibold px-7 py-3 rounded-sm"
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
  return (
    <section className="border-b border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="py-8 md:pr-12">
            <div className="text-stat font-semibold tracking-tight text-text-primary mb-1">
              94%
            </div>
            <div className="text-nav text-text-secondary/75">
              Qualified lead rate
            </div>
          </div>
          <div className="py-8 md:px-12 border-t md:border-t-0 md:border-l border-border">
            <div className="text-stat font-semibold tracking-tight text-text-primary mb-1">
              3.2×
            </div>
            <div className="text-nav text-text-secondary/75">
              Average client ROI
            </div>
          </div>
          <div className="py-8 md:pl-12 border-t md:border-t-0 md:border-l border-border">
            <div className="text-stat font-semibold tracking-tight text-text-primary mb-1">
              48hr
            </div>
            <div className="text-nav text-text-secondary/75">
              Median delivery time
            </div>
          </div>
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
    <section id="methodology" className="bg-bg-primary border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="pt-12 pb-8">
          <span className="block text-label font-semibold uppercase tracking-widest text-text-secondary/75 mb-3">
            How it works
          </span>
          <h2 className="text-section font-bold tracking-tight text-text-primary">
            A conversion system, <span className="text-accent">end-to-end.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`py-8 ${i === 0 ? "md:pr-8" : i === 1 ? "md:px-8" : "md:pl-8"} ${i > 0 ? "md:border-l border-t md:border-t-0 border-border" : ""}`}
            >
              <div className="text-label font-semibold uppercase tracking-widest text-accent mb-4">
                {step.num}
              </div>
              <div className="text-step-title font-bold text-white mb-2">
                {step.title}
              </div>
              <p className="text-nav text-text-secondary/75 opacity-80 leading-relaxed">
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
    { title: "Structured settlements", subtitle: "Plaintiff & claimant targeting", tag: "CORE", tagStyle: "bg-accent text-white" },
    { title: "Legal services", subtitle: "Mass tort & personal injury", tag: "ACTIVE", tagStyle: "border border-accent text-accent" },
    { title: "Financial services", subtitle: "Annuity & insurance buyers", tag: "ACTIVE", tagStyle: "border border-accent text-accent" },
    { title: "Healthcare", subtitle: "Patient acquisition & referrals", tag: "SOON", tagStyle: "border border-accent/35 text-text-secondary/50" },
  ];
  return (
    <section id="verticals" className="bg-bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="pt-12 pb-8">
          <span className="block text-label font-semibold uppercase tracking-widest text-text-secondary/75 mb-3">
            Verticals
          </span>
          <h2 className="text-section font-bold tracking-tight text-text-primary">
            Built for <span className="text-accent">high-stakes</span> decision systems.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border pb-12">
          {items.map((item) => (
            <div key={item.title} className="bg-bg-primary p-6 flex items-center justify-between">
              <div>
                <div className="text-cell-title font-semibold text-white">{item.title}</div>
                <div className="text-sub text-text-secondary/75 mt-0.5">{item.subtitle}</div>
              </div>
              <span className={`text-label font-semibold uppercase tracking-wide px-2 py-0.5 rounded-sm ${item.tagStyle}`}>
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
    <footer id="contact" className="bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-section font-bold tracking-tight text-text-primary">
            Ready to extract the <span className="text-accent">right signal?</span>
          </h2>
          <p className="text-nav text-text-secondary/75">
            Direct access to verified, high-intent opportunities.
          </p>
          <p className="text-nav text-text-secondary/55">
            <a href="mailto:zach@extractsignal.com" className="hover:text-text-secondary transition-colors">
              zach@extractsignal.com
            </a>
          </p>
        </div>
        <a
          href="mailto:zach@extractsignal.com"
          className="bg-accent hover:bg-accent-hover transition-colors text-white text-btn font-semibold px-7 py-3.5 rounded-sm whitespace-nowrap self-start md:self-center"
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
