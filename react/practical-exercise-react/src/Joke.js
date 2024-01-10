
import React, { useEffect, useState } from "react";
//import ReactDOM from "react-dom";

export default function JokeSearch(){
  const [joke, setJoke] = useState('')
//  <div className="joke-search">
  useEffect(() => {
    let jokeURL = 'https://official-joke-api.appspot.com/random_joke'
    fetch(jokeURL)
    }, []);



  }
//      <h3>Random Joke Here!</h3>
//      <button onClick={() => addToFavorites(cocktail)}>Add to Favorites</button>
//  </div>



//componentDidMount(){
  //let cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
  //fetch(cocktailURL)
   // .then((res) => res.json())
    //.then(data => {
   //   this.setState({ cocktails: data.drinks || [] })
   // })
   // .catch(error => {
   //   console.error('Issues getting cocktails:', error);
//});
//}
