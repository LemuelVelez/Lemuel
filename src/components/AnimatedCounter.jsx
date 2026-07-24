import { counterItems } from "../constants";

const AnimatedCounter = () => (
  <div className="counter-grid" aria-label="Portfolio statistics">
    {counterItems.map((item) => (
      <article key={item.label} className="counter-card">
        <strong className="counter-number">
          {item.value}{item.suffix}
        </strong>
        <span>{item.label}</span>
      </article>
    ))}
  </div>
);

export default AnimatedCounter;
