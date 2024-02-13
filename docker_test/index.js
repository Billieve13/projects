
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
  response.status(200).json('sup from here')
})

app.listen(port, () =>
  console.log(`Your port is up and running on ${port}`)
)