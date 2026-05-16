import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <p>Esta página se realizó con React.js, Tailwind CSS y TypeScript</p>
      <p>©2026 Samuel Duque R.</p>

      <nav>
        <a href="https://github.com/Samuel-Duque">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/samdsz___/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/samuel-andrés-duque-ríos-96b79b341">
          <FaLinkedin />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
