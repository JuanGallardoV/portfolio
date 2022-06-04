import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
    
        <a href="#home">
          <h2>
            <BsMouse /> - Inicio - 
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/luz.magica14/" target={"blank"}>
          <BsInstagram className="social" />
        </a>
        <a href="https://www.linkedin.com/in/juan-gallardo-317b68230/" target={"blank"}>
          {" "}
          <AiOutlineLinkedin className="social" />
        </a>
        <a href="https://github.com/JuanGallardoV" target={"blank"}>
          <AiFillGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
