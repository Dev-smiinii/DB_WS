const express = require("express");
const app = express();
const pool = require("./pool");
const nunjucks = require("nunjucks");
const router = require("./src/index");
const cookieParser = require("cookie-parser");
const middleware = require("./src/auth/auth.middleware");

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(middleware.auth);

app.use(router);

// app.use((err, req, res, next) => {
//   res.status(500).JSON({ err: err.message });
// });

app.listen(3000, async () => {
  console.log(`server start`);
  try {
    const connection = await pool.getConnection();
    console.log("Connection to the database!");
    connection.release();
  } catch (e) {
    console.log("DB Connection Error");
  }
});
