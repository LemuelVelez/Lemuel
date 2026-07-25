import { socialLinks } from "../constants";

const Footer = () => (
  <footer className="footer">
    <div className="footer-brand">
      <img src="/images/logo.webp" alt="JRMSU logo" />
      <div>
        <strong>Lemuel Velez</strong>
        <span>Full-Stack Developer</span>
      </div>
    </div>

    <div className="footer-links">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {link.name}
        </a>
      ))}
    </div>

    <p>© {new Date().getFullYear()} Lemuel Velez. Built with React and Vite.</p>
  </footer>
);

export default Footer;
