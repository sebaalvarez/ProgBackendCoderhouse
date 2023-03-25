import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ status: "Success", message: "Listado de usuarios" });
});

export default router;
