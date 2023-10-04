const express = require("express");
const router = express.Router();
const userRouter = require("./user/user.route");
const boardRouter = require("./board/board.route");

router.get("/", (req, res) => {
  console.log(req.body);
  console.log(`cookie: ${req.headers.cookie}`);
  // console.log(`cookie: ${req.cookies}`) // npm install cookie-parser 이후 적용
  res.render("index.html");
});

router.use("/users", userRouter);
router.use("/boards", boardRouter);

module.exports = router;
