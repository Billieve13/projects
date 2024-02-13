import React, { useState } from 'react';

const MovieSearch = ({ movies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const matchingMovies = movies.filter(movie =>
      movie.name && movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(matchingMovies);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((movie, index) => (
          <li key={index}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;