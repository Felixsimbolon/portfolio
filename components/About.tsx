import { about } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  const hasPhoto =
    about.photo !== null &&
    !String(about.photo).startsWith("[insert");

  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal>
          <p className="section-label">About</p>
        </Reveal>

        <div className="about-layout">
          {/* Left: photo + stats */}
          <Reveal>
            <div className="about-left">
              <div className="about-photo">
                {hasPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={String(about.photo)} alt="Portrait" />
                ) : (
                  <div className="photo-placeholder">
                    insert /me.jpg in /public
                  </div>
                )}
              </div>

              <div className="stats">
                {about.stats.map((s, i) => (
                  <div className="stat" key={i}>
                    <span className="num">{s.value}</span>
                    <span className="lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: intro paragraphs + quick facts */}
          <Reveal delay={120}>
            <div className="about-right">
              {about.intro.map((para, i) => (
                <p className="about-intro" key={i}>{para}</p>
              ))}

              <div className="quick-facts">
                {about.quickFacts.map((f, i) => (
                  <div className="quick-fact" key={i}>
                    <span className="qf-label">{f.label}</span>
                    <span className="qf-value">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
