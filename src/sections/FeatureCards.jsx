import { abilities } from "../constants";

const FeatureCards = () => (
  <section className="feature-section">
    <div className="feature-grid">
      {abilities.map(({ imgPath, title, desc }) => (
        <article key={title} className="feature-card">
          <div className="feature-icon">
            <img src={imgPath} alt="" />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </article>
      ))}
    </div>
  </section>
);

export default FeatureCards;
