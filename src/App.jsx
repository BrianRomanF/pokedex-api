// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/:pokemonName" element={<PokemonPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
