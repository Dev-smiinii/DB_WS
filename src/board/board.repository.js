const pool = require("../../pool");

// 글 목록
exports.findAllAnnounce = async () => {
  try {
    const sql = `SELECT id,title,DATE_FORMAT(created_at, '%Y-%m-%d') AS created_at FROM announce`;
    const [result] = await pool.query(sql);
    return result;
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

exports.findAll = async (page) => {
  try {
    const limit = 20;
    const offset = (page - 1) * limit;
    const sql = `SELECT 
    id,
    title,
    writer,
    DATE_FORMAT(created_at, '%Y-%m-%d') AS created_at,
    hit
    FROM boards ORDER BY created_at DESC, id DESC LIMIT ? OFFSET ?`;
    const [result] = await pool.query(sql, [limit, offset]);
    return result;
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

exports.pageTotalCount = async () => {
  try {
    const sql = "SELECT COUNT(*) AS totalCount FROM boards";
    const [result] = await pool.query(sql);
    return result[0].totalCount;
  } catch (e) {
    throw new Error("repo err" + err.message);
  }
};

// 글 보기
exports.announceFindOne = async (id) => {
  try {
    const sql = `SELECT id, title, content, DATE_FORMAT(created_at, '%y-%m-%d') AS created_at FROM announce WHERE id=?
    `;
    const [result] = await pool.query(sql, [id]);
    console.log(result);
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

// 댓글 등록
exports.commentCreate = async () => {
  try {
  } catch (err) {
    throw new Error("repo err" + err.message);
  }
};

// 글 수정

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

// 글 삭제
exports.delete = async (id) => {
  try {
    const sql = "DELETE FROM boards WHERE id=?";
    const [result] = await pool.query(sql, [id]);
    return result;
  } catch (e) {
    throw new Error("repo err" + err.message);
  }
};
