function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" width="28" height="28" className="flex-shrink-0">
        <rect width="32" height="32" rx="4" fill="#113355" />
        <rect x="5" y="20" width="4" height="4" rx="0.5" fill="#2F80FF" opacity="0.35" />
        <rect x="11" y="16" width="4" height="8" rx="0.5" fill="#2F80FF" opacity="0.55" />
        <rect x="17" y="12" width="4" height="12" rx="0.5" fill="#2F80FF" opacity="0.75" />
        <rect x="23" y="7" width="4" height="17" rx="0.5" fill="#2F80FF" opacity="1.0" />
        <line x1="7" y1="14" x2="25" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="22,4 26,5 24,8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[15px] tracking-[-0.01em]">
        <span className="font-normal text-[#E6EDF5]">Extract</span>
        <span className="font-semibold text-[#2F80FF]">Signal</span>
      </span>
    </div>
  );
}

function Nav() {
  return (
    <nav className="border-b border-[#1F3B5B] bg-[#0A2540]">
      <div className="mx-auto max-w-[1080px] px-6 flex items-center justify-between h-[52px]">
        <Logo />
        <div className="flex items-center gap-7">
          <a href="#methodology" className="text-[12px] text-[#9FB3C8] hover:text-[#E6EDF5] transition-colors">Methodology</a>
          <a href="#verticals" className="text-[12px] text-[#9FB3C8] hover:text-[#E6EDF5] transition-colors">Verticals</a>
          <a href="#contact" className="text-[12px] text-[#9FB3C8] hover:text-[#E6EDF5] transition-colors">Contact</a>
          <a
            href="#contact"
            className="bg-[#2F80FF] hover:bg-[#4DA3FF] transition-colors text-white text-[12px] font-semibold px-5 py-2 rounded-[3px]"
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
    <section className="bg-[#0A2540] border-b border-[#1F3B5B]">
      <div className="mx-auto max-w-[1080px] px-6 py-20">
        <div className="max-w-[560px]">
          <span className="inline-block bg-[#113355] border border-[#1F3B5B] rounded-[2px] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(159,179,200,0.75)] mb-5">
            Growth Marketing
          </span>
          <h1 className="text-[42px] font-normal tracking-[-0.025em] leading-[1.1] mb-3">
            <span className="text-[#E6EDF5]">Signal from </span>
            <span className="text-[#2F80FF] font-semibold">noise.</span>
          </h1>
          <p className="text-[12px] text-[rgba(159,179,200,0.75)] opacity-70 mb-5">
            Signal extraction for structured settlement and legal data.
          </p>
          <p className="text-[15px] font-normal leading-[1.6] text-[#9FB3C8] mb-8 max-w-[480px]">
            We extract and qualify high-intent prospects at the source. Delivering structured opportunities to operators who convert them.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="bg-[#2F80FF] hover:bg-[#4DA3FF] transition-colors text-white text-[13px] font-semibold px-[26px] py-[12px] rounded-[3px]"
            >
              Start a conversation
            </a>
            <a
              href="#methodology"
              className="border border-[#2F80FF] text-[#2F80FF] hover:bg-[#2F80FF] hover:text-white transition-colors text-[13px] font-semibold px-[26px] py-[12px] rounded-[3px]"
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
    <section className="border-b border-[#1F3B5B] bg-[#0A2540]">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1F3B5B]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 px-6 ${i > 0 ? "md:border-l border-t md:border-t-0 border-[#1F3B5B]" : ""}`}
            >
              <div className="text-[28px] font-semibold tracking-[-0.02em] text-[#E6EDF5] mb-1">
                {stat.value}
              </div>
              <div className="text-[12px] text-[rgba(159,179,200,0.75)]">
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
    <section id="methodology" className="bg-[#0A2540] border-b border-[#1F3B5B]">
      <div className="mx-auto max-w-[1080px] px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-10 gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[rgba(159,179,200,0.75)]">
            How it works
          </span>
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-[#E6EDF5]">
            A conversion system, <span className="text-[#2F80FF]">end-to-end.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1F3B5B]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`py-8 pr-8 ${i > 0 ? "md:border-l md:pl-8 border-t md:border-t-0 border-[#1F3B5B]" : ""}`}
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2F80FF] mb-3">
                {step.num}
              </div>
              <div className="text-[14px] font-bold text-white mb-2">
                {step.title}
              </div>
              <p className="text-[12px] text-[rgba(159,179,200,0.75)] opacity-80 leading-[1.55]">
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
    { title: "Structured settlements", tag: "CORE", tagStyle: "bg-[#2F80FF] text-white" },
    { title: "Legal services", tag: "ACTIVE", tagStyle: "border border-[#2F80FF] text-[#2F80FF]" },
    { title: "Financial services", tag: "ACTIVE", tagStyle: "border border-[#2F80FF] text-[#2F80FF]" },
    { title: "Healthcare", tag: "SOON", tagStyle: "border border-[rgba(47,128,255,0.35)] text-[rgba(159,179,200,0.5)]" },
  ];
  return (
    <section id="verticals" className="bg-[#113355] border-b border-[#1F3B5B]">
      <div className="mx-auto max-w-[1080px] px-6 py-16">
        <h2 className="text-[22px] font-bold tracking-[-0.015em] text-[#E6EDF5] mb-8">
          Built for <span className="text-[#2F80FF]">high-stakes</span> decision systems.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1F3B5B]">
          {items.map((item) => (
            <div key={item.title} className="bg-[#0A2540] p-5 flex items-center justify-between">
              <div>
                <div className="text-[13px] font-semibold text-white">{item.title}</div>
                <div className="text-[11px] text-[rgba(159,179,200,0.75)] mt-0.5">Vertical</div>
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-[2px] ${item.tagStyle}`}>
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
    <footer id="contact" className="bg-[#0A2540]">
      <div className="mx-auto max-w-[1080px] px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-[#E6EDF5] mb-2">
            Ready to extract the <span className="text-[#2F80FF]">right signal?</span>
          </h2>
          <p className="text-[12px] text-[rgba(159,179,200,0.75)] mb-2">
            Direct access to verified, high-intent opportunities.
          </p>
          <p className="text-[12px] text-[rgba(159,179,200,0.55)]">
            <a href="mailto:zach@extractsignal.com" className="hover:text-[#9FB3C8] transition-colors">
              zach@extractsignal.com
            </a>
            {" · "}
            <a href="tel:+13104963376" className="hover:text-[#9FB3C8] transition-colors">
              310.496.3376
            </a>
          </p>
        </div>
        <a
          href="mailto:zach@extractsignal.com"
          className="bg-[#2F80FF] hover:bg-[#4DA3FF] transition-colors text-white text-[13px] font-semibold px-[28px] py-[13px] rounded-[3px] whitespace-nowrap self-start md:self-center"
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
