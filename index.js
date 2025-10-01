const express = require("express");
const app = express();
const port = 7100;

app.get("/", (req, res) => {
  res.send("¡Hola desde ECS en AWS!");
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});
