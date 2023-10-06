const express = require("express");
const router = express.Router();
const boardController = require("./board.controller");

router.get("/", boardController.getAnnounce);

router.get("/list", boardController.getList);

router.get("/view", boardController.getView);

router.get("/modify", boardController.getModify);

router.get("/write", boardController.getWrite);

router.post("/modify", boardController.postModify);

router.post("/write", boardController.postWrite);

router.post("/delete", boardController.postDelete);

module.exports = router;
