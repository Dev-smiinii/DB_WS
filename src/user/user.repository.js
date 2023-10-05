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
/* 변경 후
exports.findOneByUserInfo = async (user_id, user_pw) => {
  try {
    const sql = "SELECT * FROM user_info WHERE userid=? AND userpw=?";
    const [[result]] = await pool.query(sql, [user_id, user_pw]);
    // const [result] = await pool.query(sql, [user_id, user_pw]);
    return result;
  } catch (err) {
    throw new Error("repo err:" + err.message);
  }
}; */

exports.findOne = async (field, value) => {
  try {
    const sql = `SELECT * FROM user_info WHERE ${field}`;
    const [[result]] = await pool.query(sql, [value]);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};
/* 변경 후
exports.findOne = async (field, value) => {
  try {
    const sql = `SELECT * FROM user_info WHERE ${field}`;
    const [[result]] = await pool.query(sql, [value]);
    // const [result] = await pool.query(sql, [value]);
    return result;
  } catch (err) {
    throw new Error("repo err:" + err.message);
  }
}; */

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
    const [result] = await pool.query(sql, [userid, modify_pw, userid]);
    return { id: result.insertId };
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

exports.createUserData = async (user_id, user_pw) => {
  try {
    const sql = "INSERT INTO user_info(userid, userpw) VALUES(?, ?)";
    const [result] = await pool.query(sql, [user_id, user_pw]);
    return { user_id: result.insertUserId };
    // return { id: result.insertId };
  } catch (err) {
    throw new Error(err.message);
  }
};
/* 변경 후
exports.createUserData = async (user_id, user_pw) => {
  try {
    const sql = "INSERT INTO user_info(userid, userpw) VALUES(?, ?)";
    const [result] = await pool.query(sql, [user_id, user_pw]);
    return { id: result.insertId };
    // return { user_id: result.insertUserId };    
    // return;
  } catch (err) {
    throw new Error("repo err:" + err.message);
  }
}; */

// exports.deleteUserData = async (data) =>{
//   try{
//     const sql =
//   }catch(e){

//   }
// }

exports.deleteUserData = async (userid) => {
  try {
    const sql = "DELETE FROM user_info WHERE userid=?";
    const [result] = await pool.query(sql, [userid]);
    return result;
    // return;
  } catch (e) {
    throw new Error("repo err" + err.message);
  }
};
