import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/career-pathways")({
  head: () => ({
    meta: [
      {
        title: "Career Pathways Map — Building the Researchers Initiative",
      },
      {
        name: "description",
        content:
          "Explore career routes for life-science students: academia, industry R&D, public health, science communication, and entrepreneurship.",
      },
      {
        property: "og:title",
        content: "Career Pathways Map — Life Sciences",
      },
      {
        property: "og:description",
        content:
          "A guided map of where a life-sciences degree can take you — with skills, milestones, and resources for each route.",
      },
    ],
  }),
  component: CareerPathwaysPage,
});

type Pathway = {
  tag: string;
  title: string;
  summary: string;
  roles: string[];
  milestones: string[];
};

const pathways: Pathway[] = [
  {
    tag: "Academia",
    title: "Researcher & Academic",
    summary:
      "Pursue deep, original research within universities and research institutes — from MSc to PhD and beyond.",
    roles: ["Research Assistant", "PhD Candidate", "Postdoctoral Fellow", "Lecturer / PI"],
    milestones: [
      "Build a strong undergraduate transcript and a research project",
      "Find a mentor and contribute to a publication",
      "Apply for funded MSc / PhD programs",
      "Establish an independent research line",
    ],
  },
  {
    tag: "Industry",
    title: "Industry R&D & Biotech",
    summary:
      "Translate science into products — pharmaceuticals, diagnostics, agritech, and biotech innovation.",
    roles: ["Lab Scientist", "QA / QC Analyst", "R&D Associate", "Product Scientist"],
    milestones: [
      "Develop applied lab and analytical skills",
      "Complete an internship in a regulated lab",
      "Learn GMP, GLP, and data-handling standards",
      "Specialize: formulation, assay dev, bioinformatics, etc.",
    ],
  },
  {
    tag: "Public Health",
    title: "Public Health & Policy",
    summary:
      "Apply life-science training to population health, epidemiology, and evidence-based policy.",
    roles: ["Field Epidemiologist", "Health Program Officer", "Policy Analyst", "MoH Researcher"],
    milestones: [
      "Take a course in epidemiology or biostatistics",
      "Volunteer with a community health program",
      "Pursue an MPH or fellowship (e.g. FELTP)",
      "Lead a public-health intervention or study",
    ],
  },
  {
    tag: "SciComm",
    title: "Science Communication",
    summary:
      "Turn research into stories, journalism, education, and media that move public understanding.",
    roles: ["Science Writer", "Editor", "Educator", "Museum / Outreach Lead"],
    milestones: [
      "Start a blog, newsletter, or YouTube channel",
      "Pitch to a science magazine or local outlet",
      "Build a portfolio of explainers across formats",
      "Train in editing, pedagogy, or media production",
    ],
  },
  {
    tag: "Entrepreneurship",
    title: "Bio-entrepreneurship",
    summary:
      "Start ventures around diagnostics, devices, agritech, climate, or research tools.",
    roles: ["Founder", "Technical Co-founder", "Product Manager", "Innovation Fellow"],
    milestones: [
      "Identify a real problem in the lab or clinic",
      "Join a hackathon or startup bootcamp",
      "Validate the idea with a small prototype",
      "Apply to incubators and grant programs",
    ],
  },
  {
    tag: "Hybrid",
    title: "Data, AI & Computational Bio",
    summary:
      "Combine biology with computation — bioinformatics, ML for health, and digital research tools.",
    roles: ["Bioinformatician", "Computational Biologist", "ML Engineer (Health)", "Data Scientist"],
    milestones: [
      "Learn Python or R and version control",
      "Reproduce a published bioinformatics analysis",
      "Contribute to an open dataset or pipeline",
      "Specialize in genomics, imaging, or clinical data",
    ],
  },
];

const skillBuckets = [
  {
    name: "Foundational",
    items: ["Scientific method", "Literature review", "Lab safety", "Ethics & integrity"],
  },
  {
    name: "Technical",
    items: ["Wet-lab techniques", "Statistics & R / Python", "Reproducible workflows", "Writing & figures"],
  },
  {
    name: "Professional",
    items: ["Mentor relationships", "Conference networking", "Grant & CV writing", "Public speaking"],
  },
];

function CareerPathwaysPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="surface-hero">
        <div className="container-page section">
          <span className="eyebrow eyebrow-on-dark">Career Pathways Map</span>
          <h1 className="mt-6 max-w-3xl text-primary-foreground">
            A life-science degree opens many doors. Here's a map of where they lead.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            Six pathways — from academia to entrepreneurship — each with the roles, skills, and
            early milestones to start moving toward them today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg">
              Take the Pathway Quiz
            </Button>
            <Button variant="outline-light" size="lg">
              Talk to a Mentor
            </Button>
          </div>
        </div>
      </section>

      {/* Pathways grid */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">Pathways</span>
            <h2 className="mt-4">Six routes worth exploring</h2>
            <div className="divider-accent mt-4" />
            <p className="mt-5 text-muted-foreground">
              These aren't tracks you have to choose between — many researchers cross between
              them across a career. Use the map to spot what excites you and what to try next.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pathways.map((p) => (
              <article key={p.title} className="card-feature flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {p.tag}
                </p>
                <h3 className="mt-3">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.summary}</p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Example roles
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.roles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    First milestones
                  </p>
                  <ol className="mt-3 space-y-2">
                    {p.milestones.map((m, i) => (
                      <li key={m} className="flex gap-3 text-sm text-foreground">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-soft font-display text-xs font-semibold text-accent">
                          {i + 1}
                        </span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <a
                  className="link-quiet mt-6 inline-block text-sm font-medium"
                  href="#"
                >
                  Explore this pathway →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills you'll build */}
      <section className="section surface-soft">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">Skills</span>
            <h2 className="mt-4">Skills that travel across every pathway</h2>
            <div className="divider-accent mt-4" />
            <p className="mt-5 text-muted-foreground">
              Whatever route you take, these capabilities compound. Start them early, return to
              them often.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skillBuckets.map((bucket) => (
              <article key={bucket.name} className="card-elevated p-7">
                <h3>{bucket.name}</h3>
                <ul className="mt-4 space-y-3">
                  {bucket.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="surface-accent overflow-hidden rounded-3xl p-10 md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="eyebrow eyebrow-on-dark">Next step</span>
                <h2 className="mt-5 text-accent-foreground">
                  Not sure where you fit? Get matched to a mentor in your pathway of interest.
                </h2>
                <p className="mt-4 max-w-xl text-accent-foreground/85">
                  Tell us a little about your year of study and what you'd love to try. We'll
                  introduce you to a mentor working in that space.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Button variant="hero" size="lg">
                  Request a Mentor
                </Button>
                <Button variant="outline-light" size="lg">
                  Download the Map (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
