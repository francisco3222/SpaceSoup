const express = require("express");
const router = express.Router();
const EstrelaController = require("../controller/EstrelasController");
router.get("/Estrelas", EstrelaController.EstrelasController);
module.exports = router;