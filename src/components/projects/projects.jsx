import "./projects.css";
import webppj from '../props/webppj.png'
import parland from '../props/parland.png'
import sistemavge from '../props/sistemavge.png'
import betterpokedex from '../props/betterpokedex.png'

const projects = [
  {
    name: 'Better Pokédex',
    language: 'HTML/JS/CSS',
    desc: 'Diseño mejorado de un proyecto antiguo sobre una pokédex',
    img: betterpokedex,
    github: 'https://github.com/JuanGallardoV/Better-Pokedex'
  },
  {
    name: 'WEBPPJ',
    language: 'React',
    desc: 'Red social para el Programa de Profesionales Jóvenes para añadir información para sus planes de estudio',
    img: webppj,
    github: 'https://github.com/WEBPPJ/WEBPPJ'
  },
  {
    name: 'ParLand',
    language: 'C#',
    desc: 'Conjunto de minijuegos desarrollados en Java ejecutados en C#',
    img: parland,
    github: 'https://github.com/S-A-EXETUM/InterfazParland'
  },
  {
    name: 'Sistema VGE',
    language: 'Laravel',
    desc: 'Gestor de ventas, inventario y clientes con login incorporado',
    img: sistemavge,
    github: 'https://github.com/JuanGallardoV/Encargos'
  }
]

const Projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="project-txt">Proyectos</h1>
      {
        projects.map((project) => (
          <div className="project" id={project.name}>
            <img src={project.img} alt="" className="project-img" loading="lazy"></img>
            <div className="project-info">
              <h1 className="name">{project.name}</h1>
              <h3 className="position">{project.language}</h3>
              <h4 className="about">
                {project.desc}
              </h4>
              <a href={project.github} target={"blank"} className="contact-project" rel="noreferrer">
                <span>Ver código fuente</span>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Projects;
