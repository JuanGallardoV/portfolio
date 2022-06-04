import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri"> {/*Cambiar*/}
        Learn more
      </a>
      <a href="#contact" className="btn sec"> {/*Cambiar*/}
        Contactame
      </a>
    </div>
  );
}

export default Buttons;
