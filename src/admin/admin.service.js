const adminRepository = require("./admin.repository");

// 글 목록
exports.getFindAllAnnounce = async () => {
  try {
    const result = await adminRepository.findAllAnnounce();
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};
