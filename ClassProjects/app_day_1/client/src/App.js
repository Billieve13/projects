
import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3001/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <MovieSearch movies={movies}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
