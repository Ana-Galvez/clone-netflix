import React from "react";
import "../styled/Home.css";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <Banner/>

      {/* Rows */}
    </div>
  );
};

export default Home;
