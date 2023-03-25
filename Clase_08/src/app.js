import express from "express";
import usersRoute from "./routes/users.routes.js";
import petsRoute from "./routes/pets.routes.js";
import _dirname from "./utils.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(_dirname + "/public"));

app.use("/api/users", usersRoute);
app.use("/api/pets/", petsRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
