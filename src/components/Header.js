import { useEffect, useState } from "react";
import "../styled/Header.css";
import { useNavigate } from "react-router-dom";

const logo = "image/logo-netflix.png";
const avatar = "image/Netflix-avatar.png";


const Header = () => {
  const [mostrar, setMostrar] = useState(false);
  const movimientoHeader = () =>
    window.scrollY > 100 ? setMostrar(true) : setMostrar(false);

  useEffect(() => {
    window.addEventListener("scroll", movimientoHeader);
    return () => window.removeEventListener("scroll", movimientoHeader);
  }, []);

  const irAHome = useNavigate();
  const irAProfile =useNavigate()

  return (
    <div className={`header ${mostrar && "header__transparente50"}`}>
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Logo de Netflix" onClick={() => irAHome('/')}  />
        <img className="header__avatar" src={avatar} alt="Avatar de netflix"  onClick={()=> irAProfile('/profile')}/>
      </div>
    </div >
  );
};

export default Header;
