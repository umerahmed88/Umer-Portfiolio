/* global React, ReactDOM, Nav, Hero, About, Services, CaseStudies, Process, Why, Ticker, FinalCTA, Footer, TweaksPanel, useTweaks, TweakSection, TweakColor, TweakRadio, TweakToggle */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#e9b66a",
  "background": "warm",
  "italicAccents": true,
  "density": "comfortable"
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const root = document.documentElement;
  // Convert hex accent to oklch-like usage via custom property
  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--accent-soft", t.accent + "29"); // ~16% alpha

  if (t.background === "warm") {
    root.style.setProperty("--bg", "oklch(0.155 0.012 60)");
    root.style.setProperty("--bg-1", "oklch(0.185 0.014 60)");
    root.style.setProperty("--bg-2", "oklch(0.215 0.015 62)");
  } else if (t.background === "cool") {
    root.style.setProperty("--bg", "oklch(0.155 0.012 250)");
    root.style.setProperty("--bg-1", "oklch(0.185 0.014 250)");
    root.style.setProperty("--bg-2", "oklch(0.215 0.015 252)");
  } else if (t.background === "neutral") {
    root.style.setProperty("--bg", "oklch(0.16 0.005 0)");
    root.style.setProperty("--bg-1", "oklch(0.19 0.006 0)");
    root.style.setProperty("--bg-2", "oklch(0.22 0.007 0)");
  }
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  React.useEffect(() => {
    if (!t.italicAccents) {
      document.documentElement.style.setProperty("--serif", "Space Grotesk, sans-serif");
    } else {
      document.documentElement.style.setProperty("--serif", '"Instrument Serif", "Cormorant Garamond", Georgia, serif');
    }
  }, [t.italicAccents]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Process />
        <Why />
        <Ticker />
        <FinalCTA />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent color" />
        <TweakColor
          label="Accent"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={["#e9b66a", "#d97757", "#7fb3a0", "#9da5e8", "#e8c89a", "#c98a5b"]}
        />
        <TweakSection label="Surface" />
        <TweakRadio
          label="Background tone"
          value={t.background}
          options={["warm", "cool", "neutral"]}
          onChange={(v) => setTweak("background", v)}
        />
        <TweakSection label="Typography" />
        <TweakToggle
          label="Editorial italics"
          value={t.italicAccents}
          onChange={(v) => setTweak("italicAccents", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
