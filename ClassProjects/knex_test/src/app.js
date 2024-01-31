
const express = require('express')
const app = express()
const port = 8081
const knex = require('knex')(require('../knexfile.js')['development'])

app.get('/', (request, response) => {
  response.send('Application up and running')
})

app.get('/pets', (request, response) => {
  knex('pet')
    .select('*')
    .from('pet')
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      response.json(petNames);
      //console.log(process.env)
    })
})

app.listen(port, () => {
  console.log(`This is working on port ${port}`)
})