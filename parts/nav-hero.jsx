/* global React, TokenStream, LiveStatus, AgentNetwork */
const { useEffect, useState } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <nav className="nav" style={{ background: scrolled ? "oklch(0.155 0.012 60 / 0.82)" : undefined }}>
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-portrait">
            <img src="assets/umer.png" alt="Umer Mukhtar" />
          </span>
          <span className="brand-text">
            <span className="nm">Umer Mukhtar</span>
            <span className="rl">AI Solutions · Riyadh</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Case Studies</a>
          <a href="#process">Process</a>
        </div>
        <div className="nav-right">
          <a href="#contact" className="nav-cta">
            <span className="pulse" />
            Book a call
          </a>
          <button
            className={`nav-burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
        <div className="nav-overlay-inner" onClick={(e) => e.stopPropagation()}>
          <div className="nav-overlay-meta">
            <div className="kicker"><span className="dot">●</span> Menu</div>
          </div>
          <nav className="nav-overlay-links">
            <a href="#about" onClick={closeMenu}><span className="n">01</span>About</a>
            <a href="#services" onClick={closeMenu}><span className="n">02</span>Services</a>
            <a href="#work" onClick={closeMenu}><span className="n">03</span>Case Studies</a>
            <a href="#process" onClick={closeMenu}><span className="n">04</span>Process</a>
            <a href="#contact" onClick={closeMenu}><span className="n">05</span>Book a call</a>
          </nav>
          <div className="nav-overlay-foot">
            <div className="kicker" style={{ color: "var(--ink-3)" }}>// CONTACT</div>
            <a href="mailto:umer.a.mukhtar@gmail.com">umer.a.mukhtar@gmail.com</a>
            <a href="https://wa.me/966566512356">+966 566 512 356 · WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
}

function PortraitCard() {
  return (
    <div className="portrait-card">
      <div className="portrait-frame">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
        <div className="portrait-tag tl-tag">
          <span className="t">// FRAME 01</span>
          <span className="t">UMER · 2026</span>
        </div>
        <div className="portrait-tag tr-tag">
          <span className="portrait-status">
            <span className="dot" /> Available
          </span>
        </div>
        <img src="assets/umer-portrait.png" alt="Umer Mukhtar" className="portrait-img" />
        <div className="portrait-overlay">
          <div className="po-row">
            <span className="lbl">// SUBJECT</span>
            <span className="val">Umer Mukhtar</span>
          </div>
          <div className="po-row">
            <span className="lbl">// ROLE</span>
            <span className="val">AI Solutions Consultant<br />Product Strategist</span>
          </div>
          <div className="po-row">
            <span className="lbl">// BASED</span>
            <span className="val">Riyadh · Saudi Arabia</span>
          </div>
          <div className="po-row last">
            <span className="lbl">// SINCE</span>
            <span className="val">15+ years in systems<br /><span style={{ color: "var(--accent)" }}>now building production AI</span></span>
          </div>
        </div>
      </div>
    </div>);

}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="grid-bg" />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="hero-top">
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <div className="onair">
              <span className="dot" />
              <span className="tx">Agent online · Layla</span>
            </div>
            <div className="kicker">
              <span className="dot">●</span> Now consulting · 2026 Q2 — limited slots
            </div>
          </div>
          <div className="coords">
            <div><b>24.7136°N · 46.6753°E</b></div>
            <div>RIYADH · GMT+03</div>
          </div>
        </div>

        <div className="hero-main">
          <div className="hero-left">
            <h1 className="hero-headline">
              Production <em>AI systems</em><br />
              for Saudi businesses<br />
              that <em>actually</em> ship.
              <span style={{ display: "block", marginTop: 18, fontSize: "0.32em", color: "var(--ink-3)", fontFamily: "var(--sans)", fontWeight: 400, letterSpacing: "-0.01em" }}>
                <span className="arabic" style={{ fontFamily: "\"Times New Roman\"" }}>أنظمة ذكاء اصطناعي عملية تُحقق نتائج قابلة للقياس.</span>
              </span>
            </h1>

            <div className="hero-sub" style={{ marginTop: 36 }}>
              I architect and deploy <strong>Voice AI agents, automation pipelines, and AI growth infrastructure</strong> — designed around measurable business outcomes, not demos.
              <br /><br />
              15 years of enterprise systems experience, now applied to building the production AI that Saudi businesses are betting on.
            </div>

            <div className="cta-row">
              <a href="#contact" className="btn btn-primary">
                Book a strategy call
                <span className="arrow">↗</span>
              </a>
              <a href="#work" className="btn btn-ghost">
                View case studies
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <PortraitCard />
          </div>
        </div>

        <div className="hero-live-row">
          <TokenStream />
          <LiveStatus />
        </div>

        <div className="trust">
          <span className="label">Trusted across</span>
          <span className="item">Healthcare</span>
          <span className="item">E-commerce</span>
          <span className="item">Media & Broadcast</span>
          <span className="item">Service businesses</span>
          <span className="item">Enterprise ops</span>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Nav, Hero, PortraitCard });