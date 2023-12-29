// PokemonPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import PokemonEngine from "../components/PokemonEngine";

function PokemonPage() {
  const { pokemonName } = useParams();

  const handleSearch = (searchTerm) => {
    // You can handle the search logic here, for example, redirect to the new Pokémon page
    console.log("Searching for:", searchTerm);
    // Redirect to the new Pokémon page or update the URL
  };

  return (
    <div className="App flex flex-col items-center justify-center h-screen">
      <SearchForm onSearch={handleSearch} />
      <h1 className="font-primary text-5xl mb-6 text-blue-pokemon">
        {pokemonName}
      </h1>
      <PokemonEngine pokemonName={pokemonName} />
      {/* Other content for the PokemonPage goes here */}
    </div>
  );
}

export default PokemonPage;
