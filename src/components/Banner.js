import React from "react";
import "../styled/Banner.css";

const imgBanner = "image/banner.jpg";

const Banner = () => {
  return <header className="banner">
    <img className="banner__img" src={imgBanner} alt="Banner de Netflix"/>
  </header>;
};

export default Banner;
