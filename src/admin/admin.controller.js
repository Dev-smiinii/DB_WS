const adminService = require("./admin.service");

// 글 목록
exports.getAnnounce = async (req, res, next) => {
  try {
    const result = await adminService.getFindAllAnnounce();
    res.render("index", { announceList: result });
  } catch (e) {
    next();
  }
};
