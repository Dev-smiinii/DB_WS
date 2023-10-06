const express = require("express");
const router = express.Router();
const userRouter = require("./user/user.route");
const boardRouter = require("./board/board.route");
const boardController = require("./board/board.controller");

router.get("/", (req, res) => {
  // console.log("index router :", req.user);
  res.render("index.html");
});

router.use("/users", userRouter);
router.use("/boards", boardRouter);

module.exports = router;
