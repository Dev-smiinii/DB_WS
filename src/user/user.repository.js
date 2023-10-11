const pool = require("../../pool");

// 로그인
exports.findOneByUserInfo = async (user_id, user_pw) => {
  try {
    const sql = "SELECT * FROM user_info WHERE userid=? AND userpw=?";
    const [[result]] = await pool.query(sql, [user_id, user_pw]);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

// 회원가입
exports.createUserData = async (user_id, user_pw) => {
  try {
    const sql = "INSERT INTO user_info(userid, userpw) VALUES(?, ?)";
    const [result] = await pool.query(sql, [user_id, user_pw]);
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.findOneByUserInfoOverlap = async (new_user_id) => {
  try {
    const sql = "SELECT * FROM user_info WHERE userid=?";
    const [[result]] = await pool.query(sql, [new_user_id]);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

// 회원정보 및 수정
exports.findOne = async (field, value) => {
  try {
    const sql = `SELECT * FROM user_info WHERE ${field}=?`;
    const [[result]] = await pool.query(sql, [value]);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.userFindOne = async (userid) => {
  try {
    const sql = `SELECT * FROM user_info WHERE userid=?`;
    const [[result]] = await pool.query(sql, [userid]);
    return result;
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

exports.update = async (userid, modify_pw) => {
  try {
    const sql = `UPDATE user_info SET userid=?, userpw=? WHERE userid=?`;
    await pool.query(sql, [userid, modify_pw, userid]);
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

// 로그아웃 및 회원탈퇴
exports.deleteUserData = async (userid) => {
  try {
    const sql = "DELETE FROM user_info WHERE userid=?";
    const [result] = await pool.query(sql, [userid]);
    return result;
  } catch (e) {
    throw new Error("repo err" + err.message);
  }
};
