const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router.get("/login", userController.getLogin);

router.get("/join", userController.getJoin);

router.get("/logout", userController.getLogout);

router.post("/login", userController.postLogin);

router.post("/join", userController.postJoin);

module.exports = router;
