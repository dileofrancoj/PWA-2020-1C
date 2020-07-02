const express = require("express");
const router = express.Router();
const service = require("./../models/futbolistas");
errorHandler = (e, res) => {
  console.log(e);
  res.json({ error: e });
};

list = (req, res) => {
  // cuando resuelva la promise la consulta el return de la consulta se envia en el then(value)
  return service
    .list()
    .then((value) => res.json(value))
    .catch((error) => errorHander(error, res));
};

router.get("/", list);
module.exports = router;
