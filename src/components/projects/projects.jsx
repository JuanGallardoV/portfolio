import "./projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="project-txt">Proyectos</h1>
      <div className="project project-1">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">WEBPPJ</h1>
          <h3 className="position">React</h3>
          <h4 className="about"> {/*Cambiar*/}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://github.com/WEBPPJ/WEBPPJ" target={"blank"} className="contact-project" rel="noreferrer">
            <span>Ver codigo fuente</span>
          </a>
        </div>
      </div>

      <div className="project project-2">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">ParLand</h1>
          <h3 className="position">C#</h3>
          <h4 className="about"> {/*Cambiar*/}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://github.com/JuanGallardoV/InterfazParland" className="contact-project">
            <span>Ver codigo fuente</span>
          </a>
        </div>
      </div>

      <div className="project project-3">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Sistema VGE</h1>
          <h3 className="position">Laravel</h3>
          <h4 className="about"> {/*Cambiar*/}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://github.com/JuanGallardoV/Encargos" className="contact-project">
            <span>Ver codigo fuente</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
