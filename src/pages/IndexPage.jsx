// IndexPage.jsx
import React from "react";

import Fondo from "../images/fondo.jpeg";
import PokemonLogo from "../images/pokemon-logo.png";
import SearchForm from "../components/SearchForm";

function IndexPage() {
  return (
    <div
      className="App flex flex-col items-center justify-center h-screen  bg-cover bg-center"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="logo-contenedor">
        <img src={PokemonLogo} alt="pokemon-logo" className="h-40 mb-4" />
      </div>
      <h1 className="font-primary text-5xl mb-6 text-blue-pokemon">
        Gotta catch 'em all!
      </h1>
      <SearchForm />

    </div>
  );
}

export default IndexPage;
