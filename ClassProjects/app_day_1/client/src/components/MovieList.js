import React, { useState, useEffect } from 'react';
import MovieSearch from './MovieSearch';

export default function MovieList({ movies }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3001/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovieList(data);
        console.log('Movie data:', data); // Log the movie data
        console.log('Updated movie state:', movieList); // Log the updated state
      } catch (error) {
        console.error('Error fetching movies:', error);
    }
  };
  fetchMovies();
}, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movieList?.map((movie) => {
          return <li key={movie.id}>{movie.name}</li>
        })}
      </ul>
    </div>
  );
}