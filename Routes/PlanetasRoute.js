const express = require("express");
const router = express.Router();
const PlanetaryController = require("../controller/PlanetasController");
router.get("/Planetas", PlanetaryController.PlanetaryController);
module.exports = router;