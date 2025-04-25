const express = require("express");
const router = express.Router();
const MensagemControler = require("../controller/MensagemSuporteController");
router.get("/MensagemSuporte", MensagemControler.MensagemController);
module.exports = router;