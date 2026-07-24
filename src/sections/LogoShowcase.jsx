import { techStackItems } from "../constants";

const LogoShowcase = () => {
  const marqueeItems = [...techStackItems, ...techStackItems];

  return (
    <section className="marquee-section" aria-label="Technology stack">
      <div className="marquee-fade marquee-fade-left" />
      <div className="marquee-fade marquee-fade-right" />
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="tech-marquee-item">
            <span className="tech-icon" aria-hidden="true">
              <img src={item.iconPath} alt="" loading="lazy" />
            </span>
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoShowcase;
