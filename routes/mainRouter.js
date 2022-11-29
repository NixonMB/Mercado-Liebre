const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")   //siempre usar doble punto .. acá




router.get("/", mainController.home);
router.get("/home", mainController.home);

router.get("/register", mainController.register);

router.get("/login", mainController.login);

module.exports=router