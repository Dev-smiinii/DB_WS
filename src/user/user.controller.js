const JWT = require("../../lib/jwt");
const jwt = new JWT();
const userService = require("./user.service");

// 로그인
exports.getLogin = (req, res) => {
  res.render("user/login.html");
};

exports.postLogin = async (req, res, next) => {
  try {
    const { user_id, user_pw } = req.body;
    const result = await userService.userLogin(user_id, user_pw);
    if (!result.isLogin) return res.redirect("/");

    res.cookie(
      "token",
      result.data,
      (maxAge = 60 * 10),
      (domain = "127.0.0.1"),
      (path = "/")
    );

    res.redirect("/boards/list");
  } catch (e) {
    next(e);
  }
};

// 회원가입
exports.getJoin = (req, res) => {
  res.render("user/join.html");
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

// 회원정보 및 수정
exports.getUserInfo = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;
    const result = await userService.getFindOne(userid);
    res.render("user/user_info.html", { ...result });
  } catch (e) {
    next();
  }
};

exports.getUserModify = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;
    const result = await userService.getFindOne(userid);
    res.render("user/user_info_modify.html", { ...result });
  } catch (e) {
    next();
  }
};

exports.postUserModify = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;
    const { modify_pw } = req.body;
    const result = await userService.userUpdate(userid, modify_pw);
    res.redirect(`/users/userinfo`);
  } catch (e) {
    next();
  }
};

// 로그아웃 / 회원탈퇴
exports.getLogout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

exports.postDelete = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;
    const result = await userService.userDelete(userid);
    res.clearCookie("token");
    res.redirect("/");
  } catch (e) {
    next(e);
  }
};
