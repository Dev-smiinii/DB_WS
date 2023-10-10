const express = require("express");
const router = express.Router();
const adminController = require("./admin.controller");

router.get("/", adminController.getAnnounce);

module.exports = router;
