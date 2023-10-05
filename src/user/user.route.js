const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router.get("/login", userController.getLogin);

router.get("/join", userController.getJoin);

router.get("/logout", userController.getLogout);

router.get("/userinfo", userController.getUserInfo);

router.get("/usermodify", userController.getUserModify);

router.post("/login", userController.postLogin);

router.post("/join", userController.postJoin);

router.post("/delete", userController.postDelete);

router.post("/usermodify", userController.postUserModify);

module.exports = router;
