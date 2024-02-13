
const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000

app.use(bodyParser.json());

const db = new Db({
  user: 'postgres',
  host: 'localhost:5432',
  database: 'movie_database',
  password: 'docker',
  port: 5432,
});

//my routes

//initial route to test server
app.get('/', (request, response) => {
  response.send('Welcome to our movie app!');
});

//route to get all movies
app.get('/movies', async (request, response) => {
  try {
    const { rows } = await db.query('SELECT * FROM movies');
    response.json(rows);
  } catch (error) {
  response.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});