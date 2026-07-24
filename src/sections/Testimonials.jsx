import TitleHeader from "../components/TitleHeader";
import { educationCards } from "../constants";

const Education = () => (
  <section id="education" className="section-shell">
    <TitleHeader title="Education & Campus Leadership" sub="Graduation and SSG highlights" />

    <div className="education-grid">
      {educationCards.map((card) => (
        <article key={card.title} className="education-card">
          <img src={card.imgPath} alt={card.title} />
          <div className="education-overlay" />
          <div className="education-content">
            <p>{card.date}</p>
            <h3>{card.title}</h3>
            <h4>{card.organization}</h4>
            <span>{card.description}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
