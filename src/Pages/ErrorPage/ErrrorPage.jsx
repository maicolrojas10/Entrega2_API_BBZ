import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import goku404 from '../../Img/badrequest.gif'; // Reemplaza con tu imagen

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">¡404! ¡Por las esferas del dragón!</h1>

      <p className="error-text">
        Parece que esta página se ha esfumado justo cuando Shenlong iba a conceder un deseo. ¡Reúne tu energía y vuelve a intentarlo, quizás aún puedas invocarlo!"
      </p>


      <img src={goku404} alt="Goku 404" className="error-image" />
      <Link to="/" className="error-button">
        Volver a la cápsula principal
      </Link>

    </div>
  );
};

export default ErrorPage;
