const express = require("express");
const router = express.Router();
const DesenvolvedoresController = require("../controller/DesenvolvedoresControler");
router.get("/Desenvolvedores", DesenvolvedoresController.DesenvolvedoresController);
module.exports = router;