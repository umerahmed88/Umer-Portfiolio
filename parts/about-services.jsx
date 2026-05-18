/* global React, MiniAgentGraph, AgentNetwork */

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sect-head">
          <span className="num">01 ·</span>
          <span className="label">About</span>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p>
              Most AI consultants talk possibilities.
              I build <em>production-ready systems</em>.
            </p>
            <p>
              I'm an AI Solutions Consultant and Product Strategist based in Riyadh — helping Saudi businesses adopt AI in ways that create real operational impact, not slide-deck theatre.
            </p>
            <p>
              Before AI, I spent 15+ years inside one of the Middle East's largest media groups, leading complex infrastructure and digital transformation projects. That background taught me how mission-critical systems are designed, deployed, and maintained at scale — and it's exactly the discipline I bring to every AI deployment now.
            </p>
            <p>
              Today I pair that operational mindset with modern AI tooling — <em>Claude, n8n, Vapi, OpenAI, Lovable</em> — to ship Arabic-native voice agents, automation pipelines, and growth infrastructure that hold up in the real world.
            </p>
            <p style={{ marginTop: 28, fontSize: 17 }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--ink-3)", textTransform: "uppercase" }}>The result —</span>
              <br />
              AI systems that aren't just intelligent. They're reliable, scalable, and production-ready.
            </p>
          </div>

          <div>
            <div className="spec-card">
              <div className="ttl">
                <span>// stack · current</span>
                <b>v.2026</b>
              </div>
              <div className="stack-grid">
                {[
                  ["Claude Code", "online"],
                  ["n8n", "deployed"],
                  ["Vapi AI", "live"],
                  ["OpenAI", "online"],
                  ["Lovable", "ready"],
                  ["Whisper", "ready"],
                  ["Airtable", "live"],
                  ["Meta Ads API", "live"],
                ].map(([n, v]) => (
                  <div className="stack-row" key={n}>
                    <span className="nm">{n}</span>
                    <span className="v">● {v.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="spec-card">
              <div className="ttl">
                <span>// trajectory</span>
                <b>15 yrs</b>
              </div>
              <div className="timeline">
                <div className="tl-item active">
                  <span className="tl-year">2025 →</span>
                  <span className="tl-text"><b>AI Solutions Consultant</b> — Voice AI, automation, growth systems for Saudi businesses</span>
                </div>
                <div className="tl-item">
                  <span className="tl-year">2014 — '24</span>
                  <span className="tl-text"><b>Senior IT & Systems Engineer</b> — MBC Group · Riyadh · enterprise infra, automation, transformation</span>
                </div>
                <div className="tl-item">
                  <span className="tl-year">2010 — '13</span>
                  <span className="tl-text"><b>IT & Systems Lead</b> — Creative Edge · led 3-person team, end-to-end systems</span>
                </div>
                <div className="tl-item">
                  <span className="tl-year">2009</span>
                  <span className="tl-text"><b>IT Support Engineer</b> — SIG Combibloc · enterprise foundations</span>
                </div>
              </div>
            </div>

            <div className="spec-card">
              <div className="ttl">
                <span>// certifications</span>
                <b>active</b>
              </div>
              <div style={{ display: "grid", gap: 10, fontSize: 13, color: "var(--ink-2)" }}>
                <div>· Microsoft Certified — Azure Fundamentals</div>
                <div>· Cisco Certified Network Associate (CCNA)</div>
                <div>· MCSE — Microsoft Certified Systems Engineer</div>
                <div>· Information Systems Security Mgmt Professional (ISSMP)</div>
                <div>· Gen AI Bootcamp — agents, workflows, visual AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    n: "01",
    title: "Arabic Voice AI",
    titleEm: "Receptionists",
    sub: "voice · 24/7 · Saudi dialect",
    desc: "Native Arabic AI voice agents that handle appointments, customer inquiries, lead qualification, booking confirmations, and follow-ups — at human-level conversational quality, with sub-second response times.",
    tags: ["Vapi AI", "Twilio", "Claude", "n8n", "Airtable"],
    variant: 1,
  },
  {
    n: "02",
    title: "Business Automation",
    titleEm: "Pipelines",
    sub: "workflows · agents · ops",
    desc: "End-to-end AI workflows that replace repetitive manual work — lead management, proposal generation, client onboarding, CRM automation, reporting, internal ops. Designed for measurable time savings.",
    tags: ["n8n", "Claude Code", "OpenAI", "APIs", "Zapier"],
    variant: 4,
  },
  {
    n: "03",
    title: "AI Growth",
    titleEm: "Infrastructure",
    sub: "content · paid · pipelines",
    desc: "AI-native systems that scale content and marketing ops — one long-form input fans out into 15+ weekly assets across channels. Paired with Meta ad workflows and AI-assisted campaign optimization.",
    tags: ["Claude API", "Whisper", "Meta Ads", "Opus Clip", "n8n"],
    variant: 2,
  },
  {
    n: "04",
    title: "AI Strategy",
    titleEm: "Consulting",
    sub: "advisory · roadmap · ROI",
    desc: "For leadership: where AI creates highest ROI, which processes to automate first, how to deploy AI safely, and how to scale it across teams. Practical roadmaps, not whitepapers.",
    tags: ["Discovery", "Roadmap", "Architecture", "Governance"],
    variant: 3,
  },
];

function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sect-head">
          <span className="num">02 ·</span>
          <span className="label">What I build</span>
        </div>

        <div className="services-intro">
          <h2 className="h-section">
            Four systems.<br />
            <em>One outcome —</em><br />
            measurable ROI.
          </h2>
          <p className="lead">
            Each engagement is scoped around a specific operational outcome: lower cost-per-call, faster lead-to-close, more content output per hour, fewer manual handoffs. The stack adapts. The discipline doesn't.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s) => (
            <article className="svc-card" key={s.n}>
              <MiniAgentGraph variant={s.variant} />
              <div className="svc-head">
                <div>
                  <div className="svc-num">// {s.n}</div>
                </div>
                <div className="svc-icon">
                  {s.n === "01" && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M5 8v8M19 8v8M2 11v2M22 11v2M8 5v14M16 5v14" /></svg>}
                  {s.n === "02" && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 10v6M4.22 4.22l4.24 4.24m7.08 7.08l4.24 4.24M1 12h6m10 0h6M4.22 19.78l4.24-4.24m7.08-7.08l4.24-4.24" /></svg>}
                  {s.n === "03" && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg>}
                  {s.n === "04" && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></svg>}
                </div>
              </div>
              <h3 className="svc-title">
                {s.title} <em>{s.titleEm}</em>
              </h3>
              <div className="svc-sub">{s.sub}</div>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map((t) => <span className="svc-tag" key={t}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About, Services });
