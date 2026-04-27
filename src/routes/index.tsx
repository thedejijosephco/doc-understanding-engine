import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

// Design system preview
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero — demonstrates surface-hero, eyebrow, display type, button variants */}
      <section className="surface-hero">
        <div className="container-page section">
          <span className="eyebrow eyebrow-on-dark">Design System Preview</span>
          <h1 className="mt-6 max-w-3xl text-primary-foreground">
            Empowering the next generation of researchers and science professionals
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            A reusable theme of tokens, typography, and components shaped for an academic,
            mission-driven NGO. Clean white surfaces, deep blue and teal accents, warm calls
            to action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg">Join the Community</Button>
            <Button variant="outline-light" size="lg">Become a Partner</Button>
          </div>
        </div>
      </section>

      {/* Color tokens */}
      <section className="section">
        <div className="container-page">
          <span className="eyebrow">Color Tokens</span>
          <h2 className="mt-4">Semantic palette</h2>
          <div className="divider-accent mt-4" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Primary", cls: "bg-primary text-primary-foreground" },
              { name: "Primary Soft", cls: "bg-primary-soft text-primary" },
              { name: "Accent", cls: "bg-accent text-accent-foreground" },
              { name: "Accent Soft", cls: "bg-accent-soft text-foreground" },
              { name: "Highlight", cls: "bg-highlight text-highlight-foreground" },
              { name: "Surface", cls: "bg-surface text-foreground border border-border" },
              { name: "Muted", cls: "bg-muted text-muted-foreground" },
              { name: "Foreground", cls: "bg-foreground text-background" },
            ].map((swatch) => (
              <div
                key={swatch.name}
                className={`card-elevated overflow-hidden`}
              >
                <div className={`flex h-24 items-end p-4 ${swatch.cls}`}>
                  <span className="text-sm font-medium">{swatch.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section surface-soft">
        <div className="container-page">
          <span className="eyebrow">Typography</span>
          <h2 className="mt-4">Display + body pairing</h2>
          <div className="divider-accent mt-4" />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="card-feature">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Fraunces · Display
              </p>
              <h1 className="mt-3">Heading 1 — A confident, academic voice</h1>
              <h2 className="mt-4">Heading 2 — Section title</h2>
              <h3 className="mt-3">Heading 3 — Subsection</h3>
              <h4 className="mt-3">Heading 4 — Card title</h4>
            </div>
            <div className="card-feature">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Inter · Body
              </p>
              <p className="mt-3 text-base">
                Body text is comfortable for long-form reading, with generous line-height
                and a calm neutral foreground. Use it across program descriptions,
                founder bios, and partner narratives.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Muted text supports primary content — captions, helper copy, footnotes.
              </p>
              <a className="link-quiet mt-4 inline-block text-sm font-medium" href="#">
                Inline link example →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="section">
        <div className="container-page">
          <span className="eyebrow">Components</span>
          <h2 className="mt-4">Buttons</h2>
          <div className="divider-accent mt-4" />
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="accent">Accent (Teal)</Button>
            <Button variant="hero">Hero (Highlight)</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl" variant="hero">Extra large CTA</Button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section surface-soft">
        <div className="container-page">
          <span className="eyebrow">Components</span>
          <h2 className="mt-4">Cards</h2>
          <div className="divider-accent mt-4" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Research Training",
                body: "Foundational research skills, scientific writing, and mentored projects.",
              },
              {
                title: "Career Development",
                body: "Mentorship, career navigation, and postgraduate guidance.",
              },
              {
                title: "Community & Exposure",
                body: "Career fairs, panels, workshops, and conference opportunities.",
              },
            ].map((c) => (
              <article key={c.title} className="card-feature">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <span className="font-display text-lg font-semibold">✦</span>
                </div>
                <h3 className="mt-5">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.body}</p>
                <a className="link-quiet mt-5 inline-block text-sm font-medium" href="#">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing scale */}
      <section className="section">
        <div className="container-page">
          <span className="eyebrow">Spacing</span>
          <h2 className="mt-4">Rhythm & layout</h2>
          <div className="divider-accent mt-4" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card-elevated p-6">
              <h4>Container</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.container-page</code>{" "}
                — max-width 80rem, responsive horizontal padding.
              </p>
            </div>
            <div className="card-elevated p-6">
              <h4>Section</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.section</code>{" "}
                — fluid vertical padding (3rem → 5.5rem).
              </p>
            </div>
            <div className="card-elevated p-6">
              <h4>Surfaces</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.surface-hero</code>,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.surface-soft</code>,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.surface-accent</code>.
              </p>
            </div>
            <div className="card-elevated p-6">
              <h4>Eyebrow & divider</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.eyebrow</code>{" "}
                pills introduce sections;{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.divider-accent</code>{" "}
                adds a teal accent rule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
