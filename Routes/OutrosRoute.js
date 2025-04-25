const express = require("express");
const router = express.Router();
const OutrosController = require("../controller/OutrosController");
router.get("/Outros", OutrosController.OutrosController);
module.exports = router;