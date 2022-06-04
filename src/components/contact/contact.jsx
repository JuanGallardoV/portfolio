import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1> {/*Cambiar*/}
      <div className="contact-links">
        <a href="mailto: juangallardovergara17@gmail.com" target={"blank"} className="contact" rel="noreferrer">
          <AiOutlineMail className="icon" />
          <h2>
            Correo Personal <span className="lowercase">juangallardovergara17@gmail.com</span>
          </h2>
        </a>
        <a
          href="https://wa.me/56963322853"
          className="contact"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+56 9 6332 2853</span>
          </h2>
        </a>
        <a
          href="https://www.linkedin.com/in/juan-gallardo-317b68230/"
          className="contact"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            LinkedIn <span>Juan Gallardo</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
