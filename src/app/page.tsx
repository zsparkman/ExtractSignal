import HeroZone from "./hero-zone";
import Reveals from "./reveals";

const EMAIL = "zach@extractsignal.com";
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
    body: "We work upstream of lists and lead exchanges — monitoring primary-source data and isolating the events that indicate someone is preparing to act, before that intent is diluted into a shared list.",
  },
  {
    num: "02",
    title: "Qualify against your criteria",
    body: "Every record is checked for identity, eligibility and timing against your written criteria. What doesn't clear the bar is discarded — never discounted and passed along anyway.",
  },
  {
    num: "03",
    title: "Deliver with provenance",
    body: "Qualified opportunities arrive in your CRM as structured records, each carrying its source and qualification trail. Delivered once, to one client — no shared lists, no resale.",
  },
];

const VERTICALS = [
  { title: "Structured settlements", sub: "Plaintiff & annuitant origination", tag: "Core", tagClass: "tag-accent" },
  { title: "Legal services", sub: "Mass tort & personal injury", tag: "Active", tagClass: "tag-outline" },
  { title: "Financial services", sub: "Annuity & insurance buyers", tag: "Active", tagClass: "tag-outline" },
  { title: "Healthcare", sub: "Patient acquisition & referrals", tag: "Exploring", tagClass: "tag-neutral" },
];

const STATS = [
  { count: "94", suffix: "%", display: "94%", label: "Qualified lead rate" },
  { count: "3.2", decimals: "1", suffix: "×", display: "3.2×", label: "Average client ROI" },
  { count: "48", suffix: "hr", display: "48hr", label: "Median delivery time" },
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
              Whether we boost your signal or parse your hidden message from the noise — growth marketing works
              both directions. Lead generation, research and market intelligence on one side; advertising, design
              and advocacy on the other.
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
            <h2 className="dx-title">Isolate the signal in the noise.</h2>
            <p className="dx-copy">
              Lead generation, research and market intelligence: we pull high-intent prospects and real answers out
              of the static — verified, scored, and delivered ready to act on.
            </p>
          </div>
          <div className="dx reveal" style={{ "--rd": "0.12s" } as React.CSSProperties}>
            <span className="dx-label">TX — transmit</span>
            <h2 className="dx-title">Boost your signal over the noise.</h2>
            <p className="dx-copy">
              Advertising, design and advocacy: when it&rsquo;s your message in the band, we raise it above every
              competing frequency — creative that carries, campaigns that cut through.
            </p>
          </div>
        </section>
      </div>

      <section className="stats" aria-label="ExtractSignal, by the numbers">
        <div className="wrap">
          <div className="grid">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="reveal" style={{ "--rd": `${i * 0.12}s` } as React.CSSProperties}>
                <p className="stat-num" data-count={stat.count} data-decimals={stat.decimals} data-suffix={stat.suffix}>
                  {stat.display}
                </p>
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
        </section>

        <section className="split" id="verticals">
          <div className="split-copy reveal">
            <span className="kicker">Verticals</span>
            <h2 className="split-title">Proven where the stakes are highest.</h2>
            <p className="note">
              Our first market is structured settlement funding — a heavily regulated transaction where a bad lead
              costs real money and a good one changes someone&rsquo;s life. A methodology that holds there holds
              anywhere.
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
          <h3 className="reveal">Ready to extract the right signal?</h3>
          <p className="sub reveal">
            Direct access to verified, high-intent opportunities. Write to us — a principal answers, usually the
            same day.
          </p>
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
