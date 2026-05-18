/* global React */
const { useEffect, useRef, useState } = React;

/* ============ Token stream — live AI activity ============ */
function TokenStream() {
  const tokens = [
    "agent.invoke", "→", "tool:vapi_call", "intent=booking", "lang=ar-SA",
    "context.load", "→", "memory:patient_history", "embed=512d",
    "tool:airtable.upsert", "ok", "status=200",
    "agent.reply", "→", "tts.stream", "voice=layla", "ms=320",
    "workflow.next", "→", "node:confirm_slot", "ok",
    "metrics.emit", "calls=2,431", "cost=−62%",
  ];
  const [i, setI] = useState(8);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % tokens.length), 220);
    return () => clearInterval(id);
  }, []);
  const visible = [];
  for (let k = 0; k < 9; k++) {
    visible.push(tokens[(i + k) % tokens.length]);
  }
  return (
    <div className="token-stream">
      {visible.map((t, idx) => {
        const isArrow = t === "→";
        const isOk = t === "ok" || t.startsWith("status=200");
        const cls = `tok ${isArrow ? "arrow" : ""} ${isOk ? "ok" : ""} ${t.includes("=") ? "kv" : ""}`;
        return <span key={idx} className={cls} style={{ opacity: 0.4 + (idx / 9) * 0.6 }}>{t}</span>;
      })}
      <span className="caret" />
    </div>
  );
}

/* ============ Agent network — node graph SVG ============ */
function AgentNetwork() {
  // five nodes connected
  return (
    <svg viewBox="0 0 320 220" className="agent-net" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ln" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.80 0.135 70)" stopOpacity="0.0" />
          <stop offset="0.5" stopColor="oklch(0.80 0.135 70)" stopOpacity="0.8" />
          <stop offset="1" stopColor="oklch(0.80 0.135 70)" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      {/* edges */}
      <g stroke="oklch(0.40 0.018 65)" strokeWidth="1" fill="none">
        <path d="M160 30 L60 110" />
        <path d="M160 30 L260 110" />
        <path d="M60 110 L160 190" />
        <path d="M260 110 L160 190" />
        <path d="M60 110 L260 110" />
        <path d="M160 30 L160 190" strokeDasharray="3 4" />
      </g>
      {/* animated pulses on a couple of edges */}
      <circle r="3" fill="oklch(0.80 0.135 70)">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M160 30 L60 110" />
      </circle>
      <circle r="3" fill="oklch(0.80 0.135 70)">
        <animateMotion dur="3.2s" repeatCount="indefinite" path="M60 110 L260 110" />
      </circle>
      <circle r="3" fill="oklch(0.80 0.135 70)">
        <animateMotion dur="2.8s" repeatCount="indefinite" path="M260 110 L160 190" />
      </circle>
      {/* nodes */}
      {[
        { x: 160, y: 30, l: "orchestrator", primary: true },
        { x: 60, y: 110, l: "voice" },
        { x: 260, y: 110, l: "data" },
        { x: 160, y: 190, l: "output" },
      ].map((n) => (
        <g key={n.l} transform={`translate(${n.x},${n.y})`}>
          <circle r="10" fill="oklch(0.185 0.014 60)" stroke={n.primary ? "oklch(0.80 0.135 70)" : "oklch(0.55 0.012 70)"} strokeWidth="1.2" />
          <circle r={n.primary ? 4 : 2.5} fill={n.primary ? "oklch(0.80 0.135 70)" : "oklch(0.78 0.012 75)"} />
          <text x="0" y="26" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill="oklch(0.65 0.012 70)" letterSpacing="0.12em">
            {n.l.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ============ Mini agent graph for service cards ============ */
function MiniAgentGraph({ variant = 1 }) {
  if (variant === 1) {
    return (
      <svg viewBox="0 0 140 140" className="svc-patch" xmlns="http://www.w3.org/2000/svg">
        <g stroke="oklch(0.40 0.018 65)" fill="none" strokeWidth="1">
          <path d="M70 20 L20 70" />
          <path d="M70 20 L120 70" />
          <path d="M20 70 L70 120" />
          <path d="M120 70 L70 120" />
          <path d="M70 20 L70 120" strokeDasharray="2 3" />
        </g>
        {[[70,20],[20,70],[120,70],[70,120]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="4" fill={i===0?"oklch(0.80 0.135 70)":"oklch(0.55 0.012 70)"} />
        ))}
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 140 140" className="svc-patch" xmlns="http://www.w3.org/2000/svg">
        <g stroke="oklch(0.40 0.018 65)" fill="none" strokeWidth="1">
          <path d="M20 30 L60 70 L100 30 L120 70 L60 110 L20 80" />
        </g>
        {[[20,30],[60,70],[100,30],[120,70],[60,110],[20,80]].map(([x,y],i)=>(
          <rect key={i} x={x-3} y={y-3} width="6" height="6" fill={i%2===0?"oklch(0.80 0.135 70)":"oklch(0.55 0.012 70)"} />
        ))}
      </svg>
    );
  }
  if (variant === 3) {
    // concentric
    return (
      <svg viewBox="0 0 140 140" className="svc-patch" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="oklch(0.40 0.018 65)" strokeWidth="1">
          <circle cx="70" cy="70" r="50" />
          <circle cx="70" cy="70" r="32" strokeDasharray="3 4" />
          <circle cx="70" cy="70" r="14" />
        </g>
        <circle cx="70" cy="70" r="3" fill="oklch(0.80 0.135 70)" />
        <circle cx="120" cy="70" r="3" fill="oklch(0.78 0.012 75)" />
        <circle cx="70" cy="20" r="3" fill="oklch(0.78 0.012 75)" />
        <circle cx="38" cy="38" r="3" fill="oklch(0.78 0.012 75)" />
      </svg>
    );
  }
  // variant 4 — tree
  return (
    <svg viewBox="0 0 140 140" className="svc-patch" xmlns="http://www.w3.org/2000/svg">
      <g stroke="oklch(0.40 0.018 65)" fill="none" strokeWidth="1">
        <path d="M70 20 L40 60 M70 20 L100 60 M40 60 L20 100 M40 60 L60 100 M100 60 L80 100 M100 60 L120 100" />
      </g>
      <circle cx="70" cy="20" r="4" fill="oklch(0.80 0.135 70)" />
      {[[40,60],[100,60],[20,100],[60,100],[80,100],[120,100]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill="oklch(0.55 0.012 70)" />
      ))}
    </svg>
  );
}

/* ============ Live signal meter (model load) ============ */
function ModelMeter({ label, segs = 18, fill = 0.62, peak }) {
  const on = Math.round(segs * fill);
  return (
    <div className="meter">
      <div className="lbl">{label}</div>
      <div className="bar">
        {Array.from({ length: segs }).map((_, i) => {
          const isPeak = peak !== undefined && i === peak;
          return <div key={i} className={`seg ${i < on ? (isPeak ? "peak" : "on") : ""}`} />;
        })}
      </div>
      <div className="val">{Math.round(fill * 100)}%</div>
    </div>
  );
}

function LiveStatus() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT(Date.now()), 700);
    return () => clearInterval(id);
  }, []);
  // pseudo-random values that change each tick
  const rng = (seed) => {
    let x = Math.sin(seed + Math.floor(t / 700)) * 10000;
    return Math.abs(x - Math.floor(x));
  };
  return (
    <div className="signal-panel">
      <div className="sp-head">
        <div className="ttl">SYSTEM · LIVE</div>
        <div className="freq">MODEL · CLAUDE 4.5 · AR-SA</div>
      </div>
      <div className="meter-row">
        <ModelMeter label="VOICE" fill={0.45 + rng(1) * 0.4} peak={Math.floor((0.45 + rng(1) * 0.4) * 18)} />
        <ModelMeter label="AGENTS" fill={0.55 + rng(2) * 0.3} />
        <ModelMeter label="WORKFLOWS" fill={0.4 + rng(3) * 0.4} />
        <ModelMeter label="LATENCY" fill={0.25 + rng(4) * 0.2} />
      </div>
      <div className="sp-foot">
        <div><b>2,431</b> calls today</div>
        <div><b>320</b><span>ms</span> avg</div>
        <div><b>99.7%</b> uptime</div>
      </div>
    </div>
  );
}

/* ============ Voice waveform — for case study ============ */
function VoiceWave({ bars = 64 }) {
  return (
    <div className="voice-wave">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="bar"
          style={{
            animationDelay: `${(i % 16) * 60}ms`,
            height: `${20 + Math.abs(Math.sin(i * 0.6)) * 80}%`,
            opacity: 0.4 + Math.abs(Math.sin(i * 0.6)) * 0.6,
          }}
        />
      ))}
    </div>
  );
}

/* ============ Pipeline graph (one input → many outputs) ============ */
function ContentPipeline() {
  return (
    <div>
      <div className="pipeline">
        <div className="node in">1 LONG-FORM VIDEO</div>
        <div className="flow" />
        <div className="node">AI PIPELINE</div>
      </div>
      <div className="pipe-out">
        <div className="out">3× SHORTS</div>
        <div className="out">5× POSTS</div>
        <div className="out">2× REELS</div>
        <div className="out">2× ADS</div>
        <div className="out">1× BLOG</div>
        <div className="out">2× EMAILS</div>
      </div>
    </div>
  );
}

/* ============ Workflow diagram ============ */
function WorkflowGraph() {
  const steps = [
    { l: "LEAD IN", k: "webhook" },
    { l: "ENRICH", k: "agent" },
    { l: "ROUTE", k: "logic" },
    { l: "PROPOSAL", k: "claude" },
    { l: "SEND", k: "out" },
  ];
  return (
    <div className="wf">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className="step">
            <div style={{ color: "var(--accent)", fontSize: 9, marginBottom: 6 }}>{`0${i+1}`}</div>
            {s.l}
            <div style={{ color: "var(--ink-3)", fontSize: 9, marginTop: 6, letterSpacing: "0.08em" }}>{s.k}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

Object.assign(window, {
  TokenStream, AgentNetwork, MiniAgentGraph, ModelMeter, LiveStatus,
  VoiceWave, ContentPipeline, WorkflowGraph,
});
