import { hero, profile } from "@/lib/content";
import TypeWriter from "./TypeWriter";

// Description length × speed + startDelay = when typing ends
// ~115 chars × 22ms = ~2530ms + 500ms start = ends ~3030ms
// CTA appears at 3300ms, meta at 3600ms

export default function Hero() {
  return (
    <header id="top" className="shell hero">

      {/* "Hi, I'm" — fades in first */}
      <p className="hero-greeting stagger">{hero.greeting}</p>

      {/* "Felix." — fades in second */}
      <h1 className="hero-name stagger">{hero.name}</h1>

      {/* Description — typed in after name appears */}
      <p className="hero-desc">
        <TypeWriter
          text={hero.description}
          startDelay={500}
          speed={22}
        />
      </p>

      {/* CTA — appears after typing ends */}
      <div className="hero-cta stagger" style={{ animationDelay: "3.3s" }}>
        <a href={hero.primaryCta.href} className="btn btn-primary">
          {hero.primaryCta.label}
          <span className="arrow">{"→"}</span>
        </a>
        <a href={hero.secondaryCta.href} className="btn btn-ghost">
          {hero.secondaryCta.label}
        </a>
      </div>

      {/* Meta — appears last */}
      <div className="hero-meta stagger" style={{ animationDelay: "3.6s" }}>
        <span>Based in <b>{profile.location}</b></span>
        <span>Status <b>{profile.availability}</b></span>
        <span>Role <b>{profile.role}</b></span>
      </div>

    </header>
  );
}
