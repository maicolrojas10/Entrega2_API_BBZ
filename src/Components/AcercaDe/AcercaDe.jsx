import React from 'react';
import './AcercaDe.css';
import fondoimg from '../../Img/tv.png'; // Imagen de la TV
import peleaimg from '../../Img/final-pelea.gif'; // GIF que simula el video
import perfilimg from '../../Img/perfil.jpg'; // 

const AcercaDe = () => {
  return (

    <div className="acerca-container">
      <div className="tv-wrapper">
        <img src={fondoimg} alt="TV" className="tv-fondo" />
        <div className="pantalla-tv">
          <img src={peleaimg} alt="Pelea" className="gif-pelea" />
        </div>
      </div>


      <div className="tarjeta-presentacion">
        <h1 className="titulo">Acerca de esta API</h1>
        <p className="descripcion">


        </p>
        <p className="descripcion">
          La <strong>API de Dragon Ball</strong> ofrece acceso a una base de datos completa con personajes icónicos de la serie, incluyendo atributos como raza, poder, género, y
          afiliación. Este sitio ha sido desarrollado como una forma divertida de explorar esos datos y al mismo tiempo practicar habilidades de desarrollo web moderno con <strong>React</strong>.
        </p>
        <p className="descripcion">
          ¡Prepárate para luchar y demostrar quién es el mejor peleador!
        </p>

      </div>


      <div className="Inf_Desarrolador">
        <img src={perfilimg} alt="" />

      </div>

      <div className="des_Desarrolador">
       <p>Michael Arturo Rojas Ordoñez</p>

      </div>
      




    </div>

  );
};

export default AcercaDe;
