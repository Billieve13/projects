
import React from "react";
import './App.css';
import JokeSearch from './Joke';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JokeSearch />
        <Form />
      </header>
    </div>
  );
}

export default App;
