import express from "express";

const PORT = 8080;

const app = express();

app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
