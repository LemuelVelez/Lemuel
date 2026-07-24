import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-glow hero-glow-one" />
    <div className="hero-glow hero-glow-two" />

    <div className="hero-layout">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" /> Available for full-stack opportunities
        </div>

        <h1>
          I build reliable
          <span className="rotating-line">
            <span className="rotating-track">
              {words.map((word, index) => (
                <span key={`${word.text}-${index}`}>
                  <img src={word.imgPath} alt="" />
                  {word.text}
                </span>
              ))}
            </span>
          </span>
          from interface to deployment.
        </h1>

        <p className="hero-description">
          I’m <strong>Lemuel Velez</strong>, a full-stack developer from Zamboanga Sibugay, Philippines. I build, deploy, and host web and mobile applications using React, Next.js, Go, Express.js, React Native, Appwrite, PostgreSQL, Redis, and modern VPS workflows.
        </p>

        <div className="hero-actions">
          <Button text="Explore Projects" href="#work" />
          <Button text="Email Me" href="mailto:velezlem12@gmail.com" secondary />
        </div>

        <div className="hero-meta">
          <span>BS Information Systems</span>
          <span>English & Filipino</span>
          <span>GitHub: LemuelVelez</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Graduation highlights">
        <div className="photo-card photo-card-main">
          <img src="/images/bsis-grad.jpeg" alt="Lemuel Velez BSIS graduation portrait" />
          <div className="photo-caption">
            <strong>BS Information Systems</strong>
            <span>JRMSU · 2022–2026</span>
          </div>
        </div>
        <div className="photo-card photo-card-float">
          <img src="/images/ssg-grad.jpeg" alt="Lemuel Velez SSG programmer graduation portrait" />
          <div className="photo-caption">
            <strong>SSG Programmer</strong>
            <span>2024–2026</span>
          </div>
        </div>
        <div className="logo-orbit">
          <img src="/images/logo.png" alt="Jose Rizal Memorial State University logo" />
        </div>
      </div>
    </div>

    <AnimatedCounter />
  </section>
);

export default Hero;
