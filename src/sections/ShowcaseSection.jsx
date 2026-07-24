import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

const ShowcaseSection = () => (
  <section id="work" className="section-shell">
    <TitleHeader title="Selected Full-Stack Work" sub="Projects built and deployed" />

    <div className="projects-grid">
      {projects.map((project, index) => (
        <article key={project.title} className={`project-card project-tone-${(index % 4) + 1}`}>
          <div className="project-preview">
            <span className="project-category">{project.category}</span>
            <strong>{project.short}</strong>
            <div className="preview-lines">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="project-body">
            <div>
              <p className="project-number">0{index + 1}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="tag-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Site ↗
                </a>
              )}
              {project.sourceLinks.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ShowcaseSection;
