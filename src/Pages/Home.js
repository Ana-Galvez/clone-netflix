import React from "react";
import "../styled/Home.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import requests from '../features/Requests'

const Home = () => {
  return (
    <div className="home">
      <Header />

      <Banner/>

      <Rows 
        title='Originales de Netflix'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Rows 
        title='Tendencias'
        fetchUrl={requests.fetchTrading}
      />
      <Rows 
        title='Mejor Puntuados'
        fetchUrl={requests.fetchTopRated}
      />
      <Rows 
        title='De Acción'
        fetchUrl={requests.fetchActionMovies}
      />
      <Rows 
        title='De Comedia'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Rows 
        title='Documentales'
        fetchUrl={requests.fetchDocumentaries}
      />
      <Rows 
        title='De Horror'
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Rows 
        title='De Romance'
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  );
};

export default Home;
