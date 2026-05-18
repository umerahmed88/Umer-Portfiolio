/* global React, VoiceWave, ContentPipeline, WorkflowGraph */

function CaseStudies() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sect-head">
          <span className="num">03 ·</span>
          <span className="label">Selected work</span>
        </div>

        <h2 className="h-section" style={{ maxWidth: "16ch", marginBottom: 24 }}>
          Real systems<em>,</em><br />running in production.
        </h2>
        <p className="lead" style={{ marginBottom: 40 }}>
          A small sample of deployed work. Every project is scoped, measured, and held to operational standards — uptime, cost, response time, accuracy.
        </p>

        {/* CASE 01 — Layla */}
        <div className="case">
          <div className="case-side">
            <div className="case-id">CASE · 01 / HEALTHCARE</div>
            <span className="case-tag">▲ Deployed · production</span>
            <h3 className="case-title" style={{ marginTop: 18 }}>
              Layla<em> —</em><br />Arabic AI<br />receptionist
            </h3>
            <p className="case-blurb">
              Saudi-dialect voice agent for a Riyadh dental clinic. Handles bookings, inquiries, and follow-ups around the clock, in conversational Arabic. Zero wait time. Full data capture.
            </p>
          </div>
          <div className="case-body">
            <div className="case-vis">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div className="kicker"><span className="dot">●</span> Live · voice · ar-SA</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.14em" }}>CALL · 00:01:24</div>
              </div>
              <VoiceWave />
              <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", letterSpacing: "0.06em" }}>
                <div>
                  <div style={{ color: "var(--ink-3)", marginBottom: 4 }}>// PATIENT</div>
                  <div style={{ direction: "rtl", fontFamily: "'IBM Plex Sans Arabic', 'Reem Kufi', sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.5 }}>
                    أبغى أحجز موعد عند الدكتور بكره الصبح
                  </div>
                </div>
                <div>
                  <div style={{ color: "var(--accent)", marginBottom: 4 }}>// LAYLA</div>
                  <div style={{ direction: "rtl", fontFamily: "'IBM Plex Sans Arabic', 'Reem Kufi', sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.5 }}>
                    أكيد، عندنا فاضي ٩ صباحاً أو ١١:٣٠. أيهما يناسبك؟
                  </div>
                </div>
              </div>
            </div>

            <div className="metric-grid">
              <div className="metric"><div className="v">60<em>%</em></div><div className="l">Cost reduction</div></div>
              <div className="metric"><div className="v">0<em>s</em></div><div className="l">Wait time</div></div>
              <div className="metric"><div className="v">24<em>/7</em></div><div className="l">Availability</div></div>
              <div className="metric"><div className="v">100<em>%</em></div><div className="l">Data capture</div></div>
            </div>

            <div className="stack-line">
              <span style={{ color: "var(--ink-3)", marginRight: 6 }}>STACK</span>
              <span className="stk">Vapi AI</span>
              <span className="stk">n8n</span>
              <span className="stk">Airtable</span>
              <span className="stk">Twilio</span>
              <span className="stk">Claude</span>
            </div>
          </div>
        </div>

        {/* CASE 02 — Growth */}
        <div className="case">
          <div className="case-side">
            <div className="case-id">CASE · 02 / E-COMMERCE</div>
            <span className="case-tag">▲ 90-day program · running</span>
            <h3 className="case-title" style={{ marginTop: 18 }}>
              Growth<em> —</em><br />content<br />multiplier
            </h3>
            <p className="case-blurb">
              For a Saudi fitness retailer. One long-form video, fully automated, becomes 15+ weekly assets across shorts, posts, ads, and email. Paired with Meta ad workflows targeting projected 180% revenue lift.
            </p>
          </div>
          <div className="case-body">
            <div className="case-vis">
              <div className="kicker" style={{ marginBottom: 18 }}><span className="dot">●</span> Pipeline · 1 in → 15 out</div>
              <ContentPipeline />
            </div>

            <div className="metric-grid">
              <div className="metric"><div className="v">15<em>×</em></div><div className="l">Weekly assets</div></div>
              <div className="metric"><div className="v">180<em>%</em></div><div className="l">Projected revenue</div></div>
              <div className="metric"><div className="v">90<em>d</em></div><div className="l">Program window</div></div>
              <div className="metric"><div className="v">1<em>:n</em></div><div className="l">Input → channels</div></div>
            </div>

            <div className="stack-line">
              <span style={{ color: "var(--ink-3)", marginRight: 6 }}>STACK</span>
              <span className="stk">Claude API</span>
              <span className="stk">n8n</span>
              <span className="stk">Whisper</span>
              <span className="stk">Meta Ads</span>
              <span className="stk">Opus Clip</span>
            </div>
          </div>
        </div>

        {/* CASE 03 — Sales ops */}
        <div className="case">
          <div className="case-side">
            <div className="case-id">CASE · 03 / SALES OPS</div>
            <span className="case-tag">▲ Multi-client · ongoing</span>
            <h3 className="case-title" style={{ marginTop: 18 }}>
              Sales &amp;<em><br />onboarding —</em><br />agents
            </h3>
            <p className="case-blurb">
              Multi-agent system for lead capture, proposal generation, client onboarding, and internal workflows. Replaces manual handoffs end-to-end. Up to 80% time saved per workflow.
            </p>
          </div>
          <div className="case-body">
            <div className="case-vis">
              <div className="kicker" style={{ marginBottom: 22 }}><span className="dot">●</span> Workflow · lead → close</div>
              <WorkflowGraph />
              <div style={{ marginTop: 22, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.1em" }}>
                AVG HANDOFF: <span style={{ color: "var(--accent)" }}>− 4h 12m</span> per lead
              </div>
            </div>

            <div className="metric-grid">
              <div className="metric"><div className="v">80<em>%</em></div><div className="l">Time saved</div></div>
              <div className="metric"><div className="v">3<em>×</em></div><div className="l">Response speed</div></div>
              <div className="metric"><div className="v">0<em></em></div><div className="l">Manual handoff</div></div>
              <div className="metric"><div className="v">98<em>%</em></div><div className="l">Consistency</div></div>
            </div>

            <div className="stack-line">
              <span style={{ color: "var(--ink-3)", marginRight: 6 }}>STACK</span>
              <span className="stk">n8n</span>
              <span className="stk">Claude Code</span>
              <span className="stk">OpenAI</span>
              <span className="stk">CRM APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "We map bottlenecks, manual handoffs, and the workflows where AI delivers the highest leverage. Real data, not assumptions." },
    { n: "02", t: "Strategy", d: "A practical implementation roadmap — scoped around business outcomes, with explicit cost, timeline, and success metrics." },
    { n: "03", t: "Build", d: "I design and deploy the agents, automation, or infrastructure. Production-grade from day one. No prototypes left in production." },
    { n: "04", t: "Optimize", d: "Continuous improvement based on real usage data. Latency, accuracy, cost, and outcomes — reviewed and tuned monthly." },
  ];
  return (
    <section id="process">
      <div className="wrap">
        <div className="sect-head">
          <span className="num">04 ·</span>
          <span className="label">Process</span>
        </div>
        <h2 className="h-section" style={{ marginBottom: 48, maxWidth: "16ch" }}>
          How <em>we</em><br />work together.
        </h2>
        <div className="process-grid">
          {steps.map((s) => (
            <div className="process-step" key={s.n}>
              <div className="n">{s.n} ·</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why">
      <div className="wrap">
        <div className="sect-head">
          <span className="num">05 ·</span>
          <span className="label">Why work with me</span>
        </div>
        <h2 className="h-section" style={{ marginBottom: 48, maxWidth: "20ch" }}>
          Built for <em>operations.</em><br />Measured in <em>outcomes.</em>
        </h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg></div>
            <h3>Operations<em> — not just AI</em></h3>
            <p>Most AI consultants come from pure software backgrounds. I bring 15+ years of enterprise infrastructure, broadcast engineering, and automation in mission-critical environments. The result: AI systems that are stable, scalable, and aligned with how businesses actually run.</p>
          </div>
          <div className="why-card">
            <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L4 7l8 5 8-5-8-5z" /><path d="M4 12l8 5 8-5" /><path d="M4 17l8 5 8-5" /></svg></div>
            <h3>ROI<em> over hype</em></h3>
            <p>Every AI solution answers one question: how does this improve the business? Lower cost. Faster execution. Better customer experience. Increased revenue. Scalable operations. If a system can't be measured against those, it doesn't get built.</p>
          </div>
          <div className="why-card">
            <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></div>
            <h3>Built for <em>Saudi</em></h3>
            <p>Native Arabic voice. Saudi market expectations. Local operational culture. Vision 2030 digital transformation alignment. The work is designed to be deployed inside Saudi businesses — not retrofitted from elsewhere.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "AI Voice Agents", "Arabic-native", "n8n Workflows", "Claude Code",
    "Vapi AI", "Multi-agent Systems", "Production AI", "Vision 2030",
    "Voice AI · Arabic", "Automation Pipelines", "AI Growth Infrastructure",
    "Real ROI · not demos",
  ];
  const track = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {track.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="final">
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}><span className="dot">●</span> Open · 2026 Q2 — limited slots</div>
            <h2>
              Ready to build AI systems<br />that <em>actually work?</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Whether it's voice AI, automation, or AI-driven growth — let's build something practical, scalable, and measurable.
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <a href="https://wa.me/966566512356" className="btn btn-primary">
                Schedule a call
                <span className="arrow">↗</span>
              </a>
              <a href="mailto:umer.a.mukhtar@gmail.com" className="btn btn-ghost">
                Discuss your project
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="final-side">
            <div className="final-row"><span>// LOCATION</span><b>Riyadh · Saudi Arabia</b></div>
            <div className="final-row"><span>// MOBILE</span><b>+966 566 512 356</b></div>
            <div className="final-row"><span>// EMAIL</span><b>umer.a.mukhtar@gmail.com</b></div>
            <div className="final-row"><span>// LINKEDIN</span><b>/in/umer-mukhtar</b></div>
            <div className="final-row" style={{ borderBottom: 0 }}><span>// RESPONSE</span><b>&lt; 24h</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18 }}>
              <span className="brand-mark" style={{ width: 32, height: 32, fontSize: 22 }}>U</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>Umer Mukhtar</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>AI Solutions · Product Strategy</div>
              </div>
            </div>
            <p style={{ color: "var(--ink-3)", fontSize: 13, maxWidth: 36, lineHeight: 1.6, maxWidth: "32ch" }}>
              Building production AI systems for Saudi businesses. Voice AI, automation, growth infrastructure. From Riyadh.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Voice AI</a></li>
              <li><a href="#services">Automation</a></li>
              <li><a href="#services">Growth AI</a></li>
              <li><a href="#services">Strategy</a></li>
            </ul>
          </div>
          <div>
            <h4>Work</h4>
            <ul>
              <li><a href="#work">Layla (Healthcare)</a></li>
              <li><a href="#work">Growth (E-com)</a></li>
              <li><a href="#work">Sales Ops</a></li>
              <li><a href="#process">Process</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:umer.a.mukhtar@gmail.com">Email</a></li>
              <li><a href="https://wa.me/966566512356">WhatsApp</a></li>
              <li><a href="https://linkedin.com/in/umer-mukhtar-6737405">LinkedIn</a></li>
              <li><a href="#contact">Book a call</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 · Umer Mukhtar · All rights reserved</div>
          <div>Built in Riyadh · GMT+03 · <span style={{ color: "var(--accent)" }}>● online</span></div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CaseStudies, Process, Why, Ticker, FinalCTA, Footer });
