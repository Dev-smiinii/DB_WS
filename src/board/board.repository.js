const pool = require("../../pool");

exports.findAll = async () => {
  try {
    const sql = `SELECT * FROM boards`;
    const [result] = await pool.query(sql);
    return result;
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

exports.findOne = async (id) => {
  try {
    const sql = `SELECT * FROM boards WHERE id=?`;
    const [result] = await pool.query(sql, [id]);
    return result;
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

exports.incrementId = async (id) => {
  const index = `UPDATE boards SET hit = hit + 1 WHERE id=?`;
  await pool.query(index, [id]);
};

exports.create = async (title, writer, content) => {
  try {
    const sql = "INSERT INTO boards(title, writer, content) values(?, ?, ?)";
    const [result] = await pool.query(sql, [title, writer, content]);
    return { id: result.insertId };
  } catch (err) {
    throw new Error("repo err: " + err.message);
  }
};

exports.update = async (id, title, content) => {
  try {
    const sql = "UPDATE boards SET title=?, content=? WHERE id=?";
    await pool.query(sql, [title, content, id]);
    return { id };
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

exports.delete = async (id) => {
  try {
    const sql = "DELETE FROM boards WHERE id=?";
    const [result] = await pool.query(sql, [id]);
    return result;
  } catch (e) {
    throw new Error("repo err" + err.message);
  }
};
