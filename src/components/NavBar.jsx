import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="brand" aria-label="Lemuel Velez home">
          <img src="/images/logo.webp" alt="JRMSU logo" />
          <span>
            Lemuel Velez
            <small>Full-Stack Developer</small>
          </span>
        </a>

        <nav className="desktop" aria-label="Primary navigation">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn">
          Contact
        </a>
      </div>
    </header>
  );
};

export default NavBar;
