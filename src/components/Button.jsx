const Button = ({ text, href = "#work", secondary = false, target, rel }) => (
  <a
    className={`primary-button ${secondary ? "secondary" : ""}`}
    href={href}
    target={target}
    rel={rel}
  >
    <span>{text}</span>
    <span aria-hidden="true">↗</span>
  </a>
);

export default Button;
