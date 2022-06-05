import './home.css';
import img from '../props/photo.jpg';
import Buttons from '../button/button';
// import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      {/* <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a> */}

      <h2>
        <span>Sobre Mí</span> <br />
        <p>
        Mis inicios como programador, fueron con Java, estudiando y aplicando diversas herramientas, hasta que descubrí diseño web. Al crear mi primera página web, viendo las posibilidades y lo que se puede llegar a generar en una persona, me di cuenta de lo que realmente quería hacer, y eso es diseñar, que sea atractivo, que sea una experiencia para que el usuario se vaya con una sonrisa de la página
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
