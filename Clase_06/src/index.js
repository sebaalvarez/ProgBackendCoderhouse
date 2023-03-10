import express from "express";

const app = express();
const PORT = 8080;

let usuario = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 34,
  mail: "juan@gmail.com",
};

app.get("/saludo", (req, res) => {
  res.send("HOLA MUNDO!!!!");
});

app.get("/bienvenida", (req, res) => {
  res.send('<h1 style="color:blue"> Hola </h1>');
});

app.get("/usuario", (req, res) => {
  res.send(JSON.stringify(usuario));
});

app.listen(PORT, () => {
  console.log(`Server escuchando en el puerto ${PORT}`);
});
