const express = require("express");
const router = express.Router();
const SpaceController = require("../controller/SpaceSoupThingsController");
router.get("/SpaceSoupThings",SpaceController.indexView);
module.exports = router;