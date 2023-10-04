const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("user/login.html");
});

router.get("/join", (req, res) => {
  res.render("user/join.html");
});

router.post("/login", (req, res) => {
  res.redirect("/boards/list");
});

router.post("/join", (req, res) => {
  res.redirect("/users/login");
});

module.exports = router;
