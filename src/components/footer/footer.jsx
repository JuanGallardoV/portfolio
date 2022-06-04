import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
    
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up - {/*Cambiar*/}
          </h2>
        </a>
      </h1>
      <div className="social-links"> {/*Cambiar*/}
        <a href="#">
          <BsInstagram className="social" />
        </a>
        <a href="#">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="#">
          {" "}
          <TiSocialDribbble className="social" />
        </a>

        <a href="#">
          <TiSocialYoutube className="social" />
        </a>

        <a href="https://github.com/JuanGallardoV" target={"blank"}>
          <AiFillGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
