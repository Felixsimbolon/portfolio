import { skills } from "@/lib/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <Reveal>
          <p className="section-label">Toolkit</p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((cat, i) => (
            <Reveal delay={i * 90} key={i}>
              <div className="skill-cat">
                <h3>{cat.category}</h3>
                <ul>
                  {cat.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
