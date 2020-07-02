const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const service = require("./../models/auth");

const auth = async (req, res) => {
  try {
    // console.log(req.body);
    const { user, password } = req.body;
    const result = await service.authentication(user, password);
    if (result.length) {
      const payload = { id: result[0].id };
      const { usuario } = result[0] || null;
      const private = fs.readFileSync("utils/keys/privada.pem");
      const signOptions = { expiresIn: "8h", algorithm: "RS256" };
      const token = jwt.sign(payload, private, signOptions);
      res.json({ usuario, JWT: token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

router.post("/", auth);
module.exports = router;
