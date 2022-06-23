import "./qualifications.css";
import html from '../props/html.png';
import css from '../props/css.png'
import javascript from '../props/js.jpg';
import bootstrap from '../props/bootstrap.png';
import react from '../props/react.png';
import angular from '../props/angular.png';
import csharp from '../props/c-sharp.png';
import laravel from '../props/laravel.png';
import sass from '../props/sass.png';
const qualifications = [
  {
    name: 'html',
    img: html
  },
  {
    name: 'css',
    img: css
  },
  {
    name: 'javascript',
    img: javascript
  },
  {
    name: 'bootstrap',
    img: bootstrap
  },
  {
    name: 'react',
    img: react
  },
  {
    name: 'angular',
    img: angular
  },
  {
    name: 'c#',
    img: csharp
  },
  {
    name: 'laravel',
    img: laravel
  },
  {
    name: 'sass',
    img: sass
  }
]

const style = (qualification) => {
  if(qualification.name === 'javascript'){
    return {
      background: `rgba(255, 255, 255, 0.103) url(${qualification.img})`,
      backgroundPosition: 'center',
      backgroundSize: '90px'
    }
  }
  return {
    background: `rgba(255, 255, 255, 0.103) url(${qualification.img})`,
    backgroundPosition: 'center',
    backgroundSize: '66px'
  }
};

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">Skills</span>
      <div className="qualifications-container">
        
        {qualifications.map((qualification) => (
          <div className="qualification" key={qualification.name}>
          <div className="content" style={style(qualification)}></div>
          <h1>{qualification.name}</h1>
        </div>
        ))}

      </div>
    </div>
  );
};

export default Qualifications;
