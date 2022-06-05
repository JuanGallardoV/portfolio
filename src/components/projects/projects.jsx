import "./projects.css";
import webppj from '../props/webppj.png'
import parland from '../props/parland.png'
import sistemavge from '../props/sistemavge.png'

const Projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="project-txt">Proyectos</h1>
      <div className="project project-1" id="webppj">
        <img src={webppj} alt="" className="project-img" loading="lazy"></img>
        <div className="project-info">
          <h1 className="name">WEBPPJ</h1>
          <h3 className="position">React</h3>
          <h4 className="about">
          Red social para el Programa de Profesionales Jóvenes para añadir información para sus planes de estudio
          </h4>
          <a href="https://github.com/WEBPPJ/WEBPPJ" target={"blank"} className="contact-project" rel="noreferrer">
            <span>Ver código fuente</span>
          </a>
        </div>
      </div>

      <div className="project project-2">
        <img src={parland} alt="" className="project-img" loading="lazy"></img>
        <div className="project-info">
          <h1 className="name">ParLand</h1>
          <h3 className="position">C#</h3>
          <h4 className="about">
            Conjunto de minijuegos desarrollados en Java ejecutados en C#
          </h4>
          <a href="https://github.com/S-A-EXETUM/InterfazParland" target={"blank"} className="contact-project">
            <span>Ver código fuente</span>
          </a>
        </div>
      </div>

      <div className="project project-3">
        <img src={sistemavge} alt="" className="project-img"></img>
        <div className="project-info">
          <h1 className="name">Sistema VGE</h1>
          <h3 className="position">Laravel</h3>
          <h4 className="about">
            Gestor de ventas, inventario y clientes con login incorporado
          </h4>
          <a href="https://github.com/JuanGallardoV/Encargos" target={"blank"} className="contact-project" loading="lazy">
            <span>Ver código fuente</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
