import Reveal from "./Reveal";
import styles from "./Experience.module.css";

const projects = [
  {
    title: "CKB Knowledge Base Chatbot",
    description:
      "Built an internal RAG chatbot using Python and Flask to answer employee questions from SharePoint policies, SOPs, and operational documents, with responses streamed through Server-Sent Events.",
    details:
      "Implemented document ingestion and change detection, hybrid reranking, source citations, and document deduplication, with safeguards against unsupported answers.",
  },
  {
    title: "Road Intelligence",
    description:
      "Developed a YOLOv9 computer vision model to detect heavy equipment and road damage, including rutting, at mining sites.",
    details:
      "Cleaned low-resolution image data and trained with Stochastic Gradient Descent, improving mAP@50 from 0.60 to 0.80 and achieving an F1 score of 0.88.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="shell">
        <Reveal>
          <h2 id="experience-heading" className="section-label">Experience</h2>
          <header className={styles.header}>
            <div>
              <p className="project-category">ABM Investama</p>
              <h3 className="project-title">AI Engineer Intern</h3>
            </div>
            <p className="project-year"><time dateTime="2026-06">Jun 2026</time> – Present</p>
          </header>
        </Reveal>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <article className={styles.project}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p>{project.details}</p>
                {project.title === "Road Intelligence" && (
                  <p className={styles.impact}>
                    Estimated maintenance savings of US$60K through earlier road-damage detection.
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
