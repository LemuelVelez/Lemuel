const Button = ({ text, href = "#work", secondary = false }) => (
  <a className={`primary-button ${secondary ? "secondary" : ""}`} href={href}>
    <span>{text}</span>
    <span aria-hidden="true">↗</span>
  </a>
);

export default Button;
