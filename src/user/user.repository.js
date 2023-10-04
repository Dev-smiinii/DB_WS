const pool = require("../../pool");

exports.findOneByUserInfo = async (user_id, user_pw) => {
  try {
    const sql = "SELECT * FROM user_info WHERE userid=? AND userpw=?";
    const [[result]] = await pool.query(sql, [user_id, user_pw]);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.findOne = async (field, value) => {
  try {
    const sql = `SELECT * FROM user_info WHERE ${field}`;
    const [[result]] = await pool.query(sql, [value]);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.createUserData = async (user_id, user_pw) => {
  try {
    const sql = "INSERT INTO user_info(userid, userpw) VALUES(?, ?)";
    const [result] = await pool.query(sql, [user_id, user_pw]);
    return { id: result.insertId };
    // return;
  } catch (err) {
    throw new Error(err.message);
  }
};
