//import react from 'react'

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default function MovieList() {
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie, index) => {
          return <li key={index}>{movie.title}</li>
        })}
      </ul>
    </div>
  )
}
