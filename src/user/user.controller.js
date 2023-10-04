const userService = require("./user.service");

exports.getLogin = (req, res) => {
  res.render("user/login.html");
};

exports.getJoin = (req, res) => {
  res.render("user/join.html");
};

exports.getLogout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

exports.postLogin = async (req, res, next) => {
  try {
    const { user_id, user_pw } = req.body;
    const result = await userService.userLogin(user_id, user_pw);
    if (!result.isLogin) return res.redirect("/");

    res.cookie(
      "token",
      result.data,
      (maxAge = 60 * 100),
      (domain = "127.0.0.1"),
      (path = "/")
    );

    res.redirect("/boards/list");
  } catch (e) {
    next(e);
  }
};

exports.postJoin = async (req, res, next) => {
  try {
    const data = req.body;
    await userService.newUserJoin(data);
    res.redirect("/users/login");
  } catch (e) {
    next(e);
  }
};
