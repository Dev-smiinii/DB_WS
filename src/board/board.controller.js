const boardService = require("./board.service");

// 글 목록
exports.getList = async (req, res, next) => {
  try {
    const result = await boardService.getFindAll();
    res.render("board/list.html", {
      list: result,
    });
  } catch (e) {
    next();
  }
};

// 글 보기
exports.getView = async (req, res, next) => {
  try {
    const { id } = req.query;
    const [result] = await boardService.getFindOne(id);
    res.render("board/view.html", { ...result });
  } catch (e) {
    next();
  }
};

// 글 쓰기
exports.getWrite = (req, res) => {
  res.render("board/write.html");
};

exports.postWrite = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await boardService.listCreate(data);
    res.redirect(`/boards/view?id=${result.id}`);
  } catch (e) {
    next(e);
  }
};

// 글 수정
exports.getModify = async (req, res, next) => {
  try {
    const { id } = req.query;
    const [result] = await boardService.getFindOne(id);
    res.render("board/modify.html", { ...result });
  } catch (e) {
    next();
  }
};

exports.postModify = async (req, res, next) => {
  try {
    const data = req.body;
    data.id = req.query.id;
    const result = await boardService.listUpdate(data);
    res.redirect(`/boards/view?id=${result.id}`);
  } catch (e) {
    next();
  }
};

// 글 삭제
exports.postDelete = async (req, res, next) => {
  try {
    const id = req.query.id;
    await boardService.listDelete(id);
    res.redirect("/boards/list");
  } catch (e) {
    next(e);
  }
};
