// PokemonEngine.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonEngine({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = response.data;

        setPokemonData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    // Fetch Pokémon data when the component mounts or when pokemonName changes
    fetchPokemonData();
  }, [pokemonName]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!pokemonData) {
    return <p>No data available for {pokemonName}</p>;
  }

  return (
    <div>
      {/* Display information about the Pokémon */}
      <h2>{pokemonData.name}</h2>
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default PokemonEngine;
