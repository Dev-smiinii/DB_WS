const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

// 로그인
router.get("/login", userController.getLogin);

router.post("/login", userController.postLogin);

// 회원가입
router.get("/join", userController.getJoin);

router.post("/join", userController.postJoin);

// 회원정보 및 수정
router.get("/userinfo", userController.getUserInfo);

router.get("/usermodify", userController.getUserModify);

router.post("/usermodify", userController.postUserModify);

// 쿠키삭제 및 db삭제
router.get("/logout", userController.getLogout);

router.post("/delete", userController.postDelete);

module.exports = router;
