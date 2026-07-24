import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Experience = () => (
  <section id="experience" className="section-shell">
    <TitleHeader title="Professional Experience" sub="Roles and real-world contributions" />

    <div className="experience-list">
      {expCards.map((card) => (
        <article key={card.title} className="experience-card">
          <div className="experience-image">
            <img src={card.imgPath} alt={`${card.title} highlight`} />
            <div className="experience-logo">
              <img src={card.logoPath} alt={`${card.organization} logo`} />
            </div>
          </div>

          <div className="experience-content">
            <p className="experience-date">{card.date}</p>
            <h3>{card.title}</h3>
            <h4>{card.organization}</h4>
            <ul>
              {card.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
