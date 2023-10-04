const JWT = require("../../lib/jwt");
const jwt = new JWT();
const userService = require("../user/user.service");

exports.auth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return next();
    const payload = jwt.verify(token, "jsk1234");
    const user = await userService.findOneByUserId(payload.id);
    req.user = user;
    next();
  } catch (e) {
    next();
  }
};
