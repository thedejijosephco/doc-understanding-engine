import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/career-pathways", label: "Career Pathways" },
  { to: "/", label: "Design System" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          to="/home"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          Building the <span className="text-primary">Researchers</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-primary-soft text-primary" }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="accent" size="sm">
          <Link to="/home">Join the Community</Link>
        </Button>
      </div>
    </header>
  );
}
