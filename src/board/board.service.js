const boardRepository = require("./board.repository");

exports.listCreate = async (data) => {
  const { title, writer, content } = data;
  try {
    const result = await boardRepository.create(title, writer, content);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

exports.listUpdate = async (data) => {
  const { id, title, content } = data;
  try {
    const result = await boardRepository.update(id, title, content);
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

exports.getFindOne = async (id) => {
  try {
    const result = await boardRepository.findOne(id);
    await boardRepository.incrementId(id);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

exports.listDelete = async (id) => {
  try {
    const result = await boardRepository.delete(id);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};
