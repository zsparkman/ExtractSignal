import HeroZone from "./hero-zone";
import Reveals from "./reveals";

const EMAIL = "info@extractsignal.com";
const MAILTO = `mailto:${EMAIL}`;

function BrandMark() {
  return (
    <svg viewBox="0 0 40 32" width="28" height="22" aria-hidden="true">
      <line x1="5" y1="14" x2="5" y2="18" stroke="#2F80FF" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <line x1="12" y1="11" x2="12" y2="21" stroke="#2F80FF" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <line x1="19" y1="8" x2="19" y2="24" stroke="#2F80FF" strokeWidth="4" strokeLinecap="round" opacity="0.72" />
      <line x1="26" y1="5" x2="26" y2="27" stroke="#2F80FF" strokeWidth="4" strokeLinecap="round" />
      <line x1="33" y1="10" x2="33" y2="22" stroke="#e9e9ed" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

const METHODOLOGY = [
  {
    num: "01",
    title: "Extract at the source",
    body: "We work upstream of lists and lead exchanges — monitoring primary-source data for the events that indicate someone is preparing to act, before that intent is diluted into a shared list.",
  },
  {
    num: "02",
    title: "Qualify against your criteria",
    body: "Every record is checked for identity, eligibility and timing against your written criteria. What doesn't clear the bar is discarded — never discounted and passed along anyway.",
  },
  {
    num: "03",
    title: "Deliver with provenance",
    body: "Qualified opportunities arrive as structured records in your CRM, each carrying its source and qualification trail. Delivered once, to one client.",
  },
];

const METHODOLOGY_NOTE =
  "The same pipeline that surfaces leads surfaces market intelligence: what your prospects are doing before they're prospects.";

const VERTICALS = [
  {
    title: "Leadgen & Research",
    sub: "Court-sourced datasets & lead origination",
    tag: "Founding vertical",
    tagClass: "tag-accent",
  },
  {
    title: "Political Ads & Compliance",
    sub: "FCC public files, rate intelligence & LUR monitoring",
    tag: "Active",
    tagClass: "tag-outline",
  },
  {
    title: "Platform Monetization",
    sub: "Yield platforms, dashboards & pricing tools",
    tag: "Active",
    tagClass: "tag-outline",
  },
  { title: "Workflow Automation", sub: "Parsing pipelines & agent workflows", tag: "Active", tagClass: "tag-outline" },
];

const STATS = [
  { display: "1 client", label: "Per lead — sold once, never resold" },
  { display: "Source-verified", label: "Every record carries its provenance" },
  { display: "Same-day", label: "Response from a principal" },
];

export default function Home() {
  return (
    <>
      <Reveals />

      <nav className="nav">
        <span className="nav-brand brand">
          <BrandMark />
          <span className="wm">
            Extract<b>Signal</b>
          </span>
        </span>
        <a href="#methodology">Methodology</a>
        <a href="#verticals">Verticals</a>
        <a href="#contact">Contact</a>
        <a className="btn btn-primary" href={MAILTO}>
          Start a conversation
        </a>
      </nav>

      <div className="wrap">
        <HeroZone>
          <section className="hero">
            <h1 className="display">
              <span className="line">The market is noise.</span>{" "}
              <span className="line">
                We extract the <span className="accent">signal.</span>
              </span>
            </h1>
            <p className="sub">
              Every market broadcasts intent — most of it drowned out. We work both directions: finding the
              prospects who are ready to buy from you, and making sure the prospects ready to buy find you first.
            </p>
            <div className="row">
              <a className="btn btn-primary" href={MAILTO}>
                Start a conversation
              </a>
              <a className="btn btn-ghost" href="#methodology">
                See the methodology
              </a>
            </div>
          </section>
        </HeroZone>

        <section className="duplex">
          <div className="dx reveal">
            <span className="dx-label">RX — receive</span>
            <h2 className="dx-title">Find the buyers hiding in the noise.</h2>
            <p className="dx-copy">
              Lead generation, research, and market intelligence. We identify high-intent prospects at the
              source — verified, scored, and delivered exclusively, ready to act on.
            </p>
          </div>
          <div className="dx reveal" style={{ "--rd": "0.12s" } as React.CSSProperties}>
            <span className="dx-label">TX — transmit</span>
            <h2 className="dx-title">Make sure the buyers find you.</h2>
            <p className="dx-copy">
              Advertising, design, and advocacy. When it&rsquo;s your message going out, we build creative that
              carries and campaigns that cut through the competing noise.
            </p>
          </div>
        </section>
      </div>

      <section className="stats" aria-label="ExtractSignal, by the numbers">
        <div className="wrap">
          <div className="grid">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="reveal" style={{ "--rd": `${i * 0.12}s` } as React.CSSProperties}>
                <p className="stat-num">{stat.display}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="features" id="methodology">
          <span className="kicker reveal">Methodology</span>
          {METHODOLOGY.map((step) => (
            <div className="feature reveal" key={step.num}>
              <p className="f-num">{step.num}</p>
              <h2 className="f-title">{step.title}</h2>
              <p className="f-copy">{step.body}</p>
            </div>
          ))}
          <div className="feature reveal">
            <p className="f-num" aria-hidden="true" />
            <div aria-hidden="true" />
            <p className="f-copy">{METHODOLOGY_NOTE}</p>
          </div>
        </section>

        <section className="split" id="verticals">
          <div className="split-copy reveal">
            <span className="kicker">Services</span>
            <h2 className="split-title">What we do.</h2>
            <p className="note">
              We started in high-stakes, heavily regulated verticals — where a bad number costs real money and
              provenance isn&rsquo;t optional. The discipline that requires is now our standard everywhere.
            </p>
          </div>
          <div className="vgrid reveal" style={{ "--rd": "0.15s" } as React.CSSProperties}>
            {VERTICALS.map((v) => (
              <div className="vcell" key={v.title}>
                <div>
                  <div className="t">{v.title}</div>
                  <div className="s">{v.sub}</div>
                </div>
                <span className={`tag ${v.tagClass}`}>{v.tag}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="quote">
          <figure className="reveal">
            <blockquote>
              &ldquo;A lead is a claim about a person&rsquo;s intent. We treat it like one — sourced, verified, and
              delivered with provenance.&rdquo;
            </blockquote>
            <figcaption>— ExtractSignal operating principles</figcaption>
          </figure>
        </section>

        <hr className="rule" />

        <section className="close" id="contact">
          <h3 className="reveal">Ready to hear what your market is telling you?</h3>
          <p className="sub reveal">Write to us — a principal answers, usually the same day.</p>
          <div className="row reveal">
            <a className="btn btn-primary" href={MAILTO}>
              Email {EMAIL}
            </a>
            <a className="btn btn-ghost" href="#methodology">
              Review the methodology
            </a>
          </div>
        </section>

        <footer>
          <span>© 2026 ExtractSignal — an SPK Holdings LLC company</span>
          <a className="mail" href={MAILTO}>
            {EMAIL}
          </a>
        </footer>
      </div>
    </>
  );
}
