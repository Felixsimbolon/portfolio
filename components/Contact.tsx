import { contact } from "@/lib/content";
import Reveal from "./Reveal";

function visible(url: string) {
  return url && !url.startsWith("[insert");
}

export default function Contact() {
  const email =
    contact.email && !contact.email.startsWith("[insert")
      ? contact.email
      : "hello@example.com";

  return (
    <section id="contact" className="section">
      <div className="shell">
        <Reveal>
          <p className="section-label">Contact</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="contact-head">{contact.heading}</h2>
          <p className="contact-sub">{contact.subline}</p>

          <a className="contact-email" href={`mailto:${email}`}>
            {email}
          </a>

          <div className="contact-socials">
            {contact.socials
              .filter((s) => visible(s.href))
              .map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label} <span className="arrow">↗</span>
                </a>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
