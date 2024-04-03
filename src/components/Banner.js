import React from "react";
import "../styled/Banner.css";

const Banner = () => {
  function truncarDescripcion(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <header className="banner">
      <div className="banner__img">
        <div className="banner__contents">
          <h1 className="banner__title">Nombre de la película</h1>
          <div className="banner__buttons">
            <button className="banner__button">Reproducir</button>
            <button className="banner__button">Mi Lista</button>
          </div>
          <h2 className="banner__description">
            {truncarDescripcion(
              `Descripción:esto es una descripción
        Descripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripciónDescripción:esto es una descripción`,
              300
            )}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Banner;
