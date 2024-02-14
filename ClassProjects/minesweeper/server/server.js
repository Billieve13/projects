const express = require('express');

const port = 3002;

const app = express();

app.get('/', (request, response) => {
  response.send('Hopefully we have better luck this time!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})