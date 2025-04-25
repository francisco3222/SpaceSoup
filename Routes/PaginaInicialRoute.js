const express = require("express");
const router = express.Router();
const PaginaInicialController = require("../controller/PaginaInicialController");
router.get("/PaginaInicial",PaginaInicialController.PaginaInicialController );
module.exports = router;