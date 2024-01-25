const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  const user = request.query.user;
  response.send(user + "!");
});

const users = []

app.post("/create_user", (request, response) => {
  const { user } = request.body;
  users.push({ username: user.username, password: user.password })

  console.log(users)

  response.json({ loggedIn: true, status: 'it worked' })
});

app.get("/users", (_,response) => {
  response.json(users);
})

app.listen(4000, () => {
  console.log('server started on port 4000')
});