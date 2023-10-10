const pool = require("../../pool");

exports.findAllAnnounce = async () => {
  try {
    const sql = `SELECT * FROM announce`;
    const [result] = await pool.query(sql);
    return result;
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};
