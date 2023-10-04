const boardService = require("./board.service");

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

exports.getView = async (req, res, next) => {
  try {
    const { id } = req.query;
    const [result] = await boardService.getFindOne(id);
    res.render("board/view.html", { ...result });
  } catch (e) {
    next();
  }
};

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

exports.postDelete = async (req, res, next) => {
  try {
    const id = req.query.id;
    await boardService.listDelete(id);
    res.redirect("/boards/list");
  } catch (e) {
    next(e);
  }
};
