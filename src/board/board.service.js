const boardRepository = require("./board.repository");

// 글 목록
exports.getFindAllAnnounce = async () => {
  try {
    const result = await boardRepository.findAllAnnounce();
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

exports.getFindAll = async () => {
  try {
    const result = await boardRepository.findAll();
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

// 글 보기
exports.getAnnounceFindOne = async (id) => {
  try {
    const result = await boardRepository.announceFindOne(id);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

exports.getFindOne = async (id) => {
  try {
    const result = await boardRepository.findOne(id);
    await boardRepository.incrementId(id);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

// 글 쓰기
exports.listCreate = async (data) => {
  const { title, writer, content, writerid } = data;
  try {
    const result = await boardRepository.create(
      title,
      writer,
      content,
      writerid
    );
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

// 글 수정
exports.listUpdate = async (data) => {
  const { id, title, content } = data;
  try {
    const result = await boardRepository.update(id, title, content);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

// 글 삭제
exports.listDelete = async (id) => {
  try {
    const result = await boardRepository.delete(id);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};
