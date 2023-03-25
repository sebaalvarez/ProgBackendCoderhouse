const http = require("http");

const PORT = 8080;

const server = http.createServer((request, response) => {
  response.end("PRUEBA - 1");
});

server.listen(PORT, () => {
  console.log(`Server escuchando en el puerto ${PORT}`);
});
