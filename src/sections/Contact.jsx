import TitleHeader from "../components/TitleHeader";

const Contact = () => (
  <section id="contact" className="section-shell contact-section">
    <TitleHeader title="Let’s Build Something Useful" sub="Open to development opportunities" />

    <div className="contact-grid">
      <div className="contact-card">
        <p className="contact-intro">
          I’m interested in full-stack, frontend, backend, and mobile development opportunities where I can contribute to practical systems and continue learning.
        </p>

        <div className="contact-details">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=velezlem12%40gmail.com">
            <span>Email</span>
            <strong>velezlem12@gmail.com</strong>
          </a>
          <a href="https://www.linkedin.com/in/lemuel-velez-a38a7a238" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>lemuel-velez-a38a7a238 ↗</strong>
          </a>
          <a href="https://github.com/LemuelVelez" target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <strong>LemuelVelez ↗</strong>
          </a>
          <div>
            <span>Location</span>
            <strong>Upper Sulitan, Naga, Zamboanga Sibugay, Philippines</strong>
          </div>
        </div>
      </div>

      <div className="contact-visual" aria-label="Development profile highlight">
        <div className="contact-code-window">
          <div className="code-window-bar">
            <span />
            <span />
            <span />
          </div>
          <pre><code>{`const developer = {
  name: "Lemuel Velez",
  role: "Full-Stack Developer",
  builds: ["web", "mobile", "APIs"],
  deploys: ["VPS", "Coolify", "Appwrite"],
  readyToCollaborate: true
};`}</code></pre>
          <div className="contact-logo-lockup">
            <img src="/images/logo.png" alt="JRMSU logo" />
            <div>
              <strong>From idea to production</strong>
              <span>Practical systems, clean interfaces, reliable deployment.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
