const express = require("express");
const router = express.Router();
const SignUpController = require("../controller/SignUpController");
router.get("/signup", SignUpController.signupController);
module.exports = router;