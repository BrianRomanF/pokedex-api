// SearchForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to /pokemon/:searchTerm
    navigate(`/pokemon/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        type="text"
        placeholder="Search Pokémons..."
        value={searchTerm}
        onChange={handleChange}
        className="py-2 px-3 border border-black rounded-l focus:outline-none"
      />
      <button
        type="submit"
        className="bg-yellow-pokemon border border-black text-blue-pokemon py-2 px-6 rounded-r font-primary ml-2"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
