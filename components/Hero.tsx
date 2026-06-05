import { hero, profile } from "@/lib/content";

export default function Hero() {
  return (
    <header id="top" className="shell hero">

      {/* Greeting */}
      <p className="hero-greeting stagger">{hero.greeting}</p>

      {/* Name — big display */}
      <h1 className="hero-name stagger">{hero.name}</h1>

      {/* Description */}
      <p className="hero-desc stagger">{hero.description}</p>

      {/* CTAs */}
      <div className="hero-cta stagger">
        <a href={hero.primaryCta.href} className="btn btn-primary">
          {hero.primaryCta.label}
          <span className="arrow">→</span>
        </a>
        <a href={hero.secondaryCta.href} className="btn btn-ghost">
          {hero.secondaryCta.label}
        </a>
      </div>

      {/* Meta */}
      <div className="hero-meta stagger">
        <span>Based in <b>{profile.location}</b></span>
        <span>Status <b>{profile.availability}</b></span>
        <span>Role <b>{profile.role}</b></span>
      </div>

    </header>
  );
}
