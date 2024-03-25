import React from "react";
import "../styled/Header.css";

const logo = "image/logo-netflix.png"; // hago esta manera porque src no acepta nada afuera de la carpeta src
const avatar = "image/Netflix-avatar.png";
const Header = () => {
  return (
    <div className="header header__negro">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Logo de Netflix" />
        <img className="header__avatar" src={avatar} alt="Avatar de netflix" />
      </div>
    </div>
  );
};

export default Header;
