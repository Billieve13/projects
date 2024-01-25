const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8080;

const app = express()

app.use(cookieParser())

app.get('/login', (request, response) => {
  const { name } = request.query;

  if (name) {
    response.cookie('name', name);
    response.send(`Cookie are here for ${name}`);
  } else {
    response.send('Please give us your name');
  }
});

app.get('/hello', (request, response) => {
  const { name } = request.cookies;

  if (name) {
    response.send(`Welcome ${name}!`);
  } else {
    response.send('You kind of need to login first...');
  }
});

app.listen(port, () => {
  console.log(`Your server is up and running on port ${port}`)
})