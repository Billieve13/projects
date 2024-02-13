
const express = require('express')
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'docker',
    database: 'app-day-one-movies',
  }
})

const app = express();
const port = 3001;

//middleware for this server to accept JSON
app.use(express.json());

// const movies = [
//   { id: 1, title: 'Mean Girls' },
//   { id: 2, title: 'Hackers' },
//   { id: 3, title: 'The Grey' },
//   { id: 4, title: 'Sunshine' },
//   { id: 5, title: 'Ex Machina' },
// ];

//initial route for server testing
app.get('/', (req, res) => {
  res.send('OMG it works');
});

//endpoint for getting all movies
app.get('/movies', async (request, response) => {
  // Mock movie data for testing postman

  try {
    //to handle the seed data from the movies_table
    const movies = await knex.select().from('movies_table');
    response.status(200).json(movies);
  } catch (error) {
    console.error('Error retrieving movies', error);
    response.status(500).send('Error retrieving movies');
  }
});

// POST endpoint to create a new movie to test postman endpoint
app.post('/movies', async (request, response) => {
  // Get the maximum id in the current movies array
  const maxId = Math.max(...movies.map(movie => movie.id));
  // Increment the id for the new movie
  const newId = maxId + 1;
  // Mock movie data for the newly created movie
  const newMovie = {
    id: movies.length + 1,
    name: request.body.name
  };

  try {
    // Add the new movie to the movies array
    movies.push(newMovie);
    // Return the newly created movie
    response.status(201).json(newMovie);
  } catch (error) {
    console.error('Error creating movie', error);
    response.status(500).send('Error creating movie');
  }
});

//server activation
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});