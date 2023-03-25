import { Router } from "Express";
import { uploader } from "../utils.js";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  res.status(200).send({ status: "Success", message: pets });
});

router.post("/", (req, res) => {
  let pet = req.body;
  let id = Math.floor(Math.random() * 20) + 1;
  console.log(req.body);
  if (!pet.nombre || !pet.especie) {
    return res
      .status(400)
      .send({ Status: "Error", message: "debe ingresar nombre y especie" });
  }
  pets.push({ ...pet, id });
  return res.status(200).send({
    status: "Success",
    message: `Se agregó: ${pet.nombre} con id: ${id}`,
  });
});

router.post("/profile", uploader.single("file"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .send({ status: "Error", message: `Error al subir archivo` });
  }

  let pet = req.body;
  let id = Math.floor(Math.random() * 20) + 1;
  pet.image = req.file.path;
  pet.id = id;
  if (!pet.nombre || !pet.especie) {
    return res
      .status(400)
      .send({ Status: "Error", message: "debe ingresar nombre y especie" });
  }
  pets.push({ ...pet });
  return res.status(200).send({
    status: "Success",
    message: `Se agregó: ${pet.nombre} con id: ${id}`,
  });
});

export default router;
