import React, { useState } from "react";

export default function Form(){
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Result:', query)
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Nothing is here right now..."
      />
    </form>
  );
}