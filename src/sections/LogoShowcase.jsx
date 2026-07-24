import { techStackLabels } from "../constants";

const LogoShowcase = () => (
  <section className="marquee-section" aria-label="Technology stack">
    <div className="marquee-fade marquee-fade-left" />
    <div className="marquee-fade marquee-fade-right" />
    <div className="marquee-track">
      {[...techStackLabels, ...techStackLabels].map((item, index) => (
        <div key={`${item}-${index}`} className="tech-marquee-item">
          <span>{item.slice(0, 2).toUpperCase()}</span>
          {item}
        </div>
      ))}
    </div>
  </section>
);

export default LogoShowcase;
