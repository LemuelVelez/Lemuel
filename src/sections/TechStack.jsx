import TitleHeader from "../components/TitleHeader";
import { skillGroups } from "../constants";

const TechStack = () => (
  <section id="skills" className="section-shell">
    <TitleHeader title="Technical Toolkit" sub="Technologies used across shipped systems" />

    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <article key={group.title} className="skill-card">
          <span className="skill-index">0{index + 1}</span>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
          <div className="skill-chips">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default TechStack;
