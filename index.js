const express = require("express");
const app = express();
const port = 7100;

app.get("/", (req, res) => {
  res.send("¡Hola desde ECS en AWS!");
});

// escucha en todas las interfaces, no solo en localhost
app.listen(port, "0.0.0.0", () => {
  console.log(`App escuchando en http://0.0.0.0:${port}`);
});

