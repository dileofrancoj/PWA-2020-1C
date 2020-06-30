// tslint ->
// mi_variable -> miVariable

const express = require("express");
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const router = express.Router();
const service = require("./../models/futbolistas");
const imageHandler = require("./../utils/imageHandler");
errorHandler = (error, res) => {
  console.error(error); // logs
  return res.json({ error: "Error en la consulta" });
};

const add = (req, res) => {
  // Destructuracion
  // formControlName="nombre" formControlName="equipo" formControlName="goles"
  const { nombre, equipo, goles } = req.body;
  if (!nombre && !equipo && !req.file)
    return res.json({ error: "Faltan campos obligatorios" });
  const name = imageHandler.saveImage(req.file); // retorna el uuid + extension
  const data = {
    nombre,
    equipo,
    goles,
    imagen: name,
  };
  return service
    .add(data)
    .then((value) => res.json({ new: value }))
    .catch((error) => errorHandler(error, res));
};

const list = (req, res) => {
  return service
    .list()
    .then((value) => res.json(value))
    .catch((error) => errorHandler(error, res));
};

router.get("/", list);
// formControlName="foto"
router.post("/", upload.single("foto"), add);
module.exports = router;
