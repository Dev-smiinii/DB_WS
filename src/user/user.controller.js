const JWT = require("../../lib/jwt");
const jwt = new JWT();
const userService = require("./user.service");

// 로그인
exports.getLogin = (req, res) => {
  res.render("user/login.html");
};

exports.postLogin = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await userService.userLogin(data);
    if (!result.isLogin) return res.render("user/login.html", { alert: true });
    res.cookie("token", result.data);
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
    const { new_user_id, new_user_pw } = req.body;
    const regex = /^[0-9a-zA-Z]*$/;

    if (!regex.test(new_user_id) || !regex.test(new_user_pw))
      return res.render("user/join.html", {
        alert: true,
        alertType: "invaild",
      });

    const result = await userService.userOverlap(new_user_id);

    if (result)
      return res.render("user/join.html", {
        alert: true,
        alertType: "overlap",
      });

    await userService.newUserJoin(new_user_id, new_user_pw);

    res.redirect("/users/login");
  } catch (e) {
    next(e);
  }
};

// 회원정보 및 수정
exports.getUserInfo = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.render("user/user_info.html", { user: req.user });
    }

    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;
    const result = await userService.getFindOne(userid);
    res.render("user/user_info.html", { ...result, user: req.user });
    console.log(result);
  } catch (e) {
    next();
  }
};

exports.getUserModify = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.render("user/user_info_modify.html", { user: req.user });
    }
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;
    const result = await userService.getFindOne(userid);
    console.log(result);
    res.render("user/user_info_modify.html", { ...result, user: req.user });
  } catch (e) {
    next();
  }
};

exports.postUserModify = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.render("user/user_info_modify.html", { user: req.user });
    }
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;
    const { modify_pw } = req.body;
    const result = await userService.userUpdate(userid, modify_pw);
    console.log(result);

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
    await userService.userDelete(userid);
    res.clearCookie("token");
    res.redirect("/");
  } catch (e) {
    next(e);
  }
};
