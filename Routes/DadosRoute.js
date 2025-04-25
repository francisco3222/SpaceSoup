const express = require("express");
const router = express.Router();
const DadosController = require("../controller/DadosControler");
router.get("/Dados", DadosController.DadosController);
module.exports = router;