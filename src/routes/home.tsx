import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Building the Researchers Initiative — Empowering future scientists" },
      {
        name: "description",
        content:
          "A student-led NGO equipping the next generation of life-science researchers with training, mentorship, and community.",
      },
      {
        property: "og:title",
        content: "Building the Researchers Initiative",
      },
      {
        property: "og:description",
        content:
          "Training, mentorship, and community for the next generation of life-science researchers.",
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    title: "Research Training",
    body: "Hands-on workshops in scientific writing, lab methods, and reproducible analysis — guided by active researchers.",
  },
  {
    title: "Career Development",
    body: "Mentorship, postgraduate guidance, and one-on-one coaching to navigate academia and industry.",
  },
  {
    title: "Community & Exposure",
    body: "Career fairs, panels, and conferences that connect students with mentors, partners, and peers.",
  },
];

const stats = [
  { value: "1,200+", label: "Students reached" },
  { value: "40+", label: "Mentors & researchers" },
  { value: "15", label: "Partner institutions" },
  { value: "8", label: "Programs running" },
];

const programs = [
  {
    tag: "Workshop series",
    title: "Foundations of Research",
    body: "A 6-week introduction to scientific method, literature review, and lab safety for first- and second-year students.",
  },
  {
    tag: "Mentorship",
    title: "Mentor Match",
    body: "Pairs students with researchers in their field of interest for a structured semester of one-on-one mentorship.",
  },
  {
    tag: "Community",
    title: "Annual Symposium",
    body: "A two-day showcase of student research, panels with senior scientists, and partner-led career sessions.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="surface-hero">
        <div className="container-page section grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow eyebrow-on-dark">Life Science · Student-led NGO</span>
            <h1 className="mt-6 max-w-2xl text-primary-foreground">
              Empowering the next generation of researchers and science professionals.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
              We train, mentor, and connect undergraduate life-science students across the
              region — building a pipeline of curious, capable, and community-minded researchers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                Join the Community
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link to="/career-pathways">Explore Career Pathways</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="card-elevated relative overflow-hidden bg-card/95 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Our impact, so far
              </p>
              <div className="mt-5 grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-semibold text-primary">
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="divider-accent mt-6" />
              <p className="mt-4 text-sm text-foreground">
                Built by students, supported by researchers, guided by purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4">Three pillars of a researcher's journey</h2>
            <div className="divider-accent mt-4" />
            <p className="mt-5 text-muted-foreground">
              Every program we run reinforces one of three goals: building research skill,
              opening career doors, and growing a community that makes science feel reachable.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="card-feature">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <span className="font-display text-lg font-semibold">✦</span>
                </div>
                <h3 className="mt-5">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section surface-soft">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow">Programs</span>
              <h2 className="mt-4">Where students take their first steps</h2>
              <div className="divider-accent mt-4" />
            </div>
            <Button variant="outline">See all programs</Button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="card-elevated p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {program.tag}
                </p>
                <h3 className="mt-3">{program.title}</h3>
                <p className="mt-3 text-muted-foreground">{program.body}</p>
                <a className="link-quiet mt-5 inline-block text-sm font-medium" href="#">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="surface-hero overflow-hidden rounded-3xl">
            <div className="grid items-center gap-8 p-10 md:grid-cols-[1.4fr_1fr] md:p-14">
              <div>
                <span className="eyebrow eyebrow-on-dark">Get involved</span>
                <h2 className="mt-5 text-primary-foreground">
                  Whether you mentor, partner, or learn — there's a place for you here.
                </h2>
                <p className="mt-4 max-w-xl text-primary-foreground/85">
                  Join as a student, host a workshop, fund a cohort, or open your lab to a
                  visit. Every contribution shapes a future researcher.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Button variant="hero" size="lg">
                  Become a Member
                </Button>
                <Button variant="outline-light" size="lg">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
