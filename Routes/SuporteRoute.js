const express = require("express");
const router = express.Router();
const SuporteController = require("../controller/SuporteControler");
router.get("/Suporte", SuporteController.SuporteControler);
module.exports = router;
