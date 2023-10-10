const boardService = require("./board.service");
const JWT = require("../../lib/jwt");
const jwt = new JWT();

// 글 목록
exports.getAnnounce = async (req, res, next) => {
  try {
    const result = await boardService.getFindAllAnnounce();
    res.render("index.html", { announceList: result });
  } catch (e) {
    next();
  }
};

exports.getList = async (req, res, next) => {
  try {
    const result = await boardService.getFindAll();
    res.render("board/list.html", {
      list: result,
      user: req.user,
    });
  } catch (e) {
    next();
  }
};

// 글 보기
exports.getAnnounceView = async (req, res, next) => {
  try {
    const { id } = req.query;
    const [result] = await boardService.getAnnounceFindOne(id);
    console.log(result);
    res.render("board/announce.html", { ...result });
  } catch (e) {
    next();
  }
};

exports.getView = async (req, res, next) => {
  try {
    const { id } = req.query;
    const [result] = await boardService.getFindOne(id);
    res.render("board/view.html", { ...result, user: req.user });
  } catch (e) {
    next();
  }
};

// 글 쓰기
exports.getWrite = (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.render("board/write.html", { user: req.user });
  }

  try {
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;

    res.render("board/write.html", { userid: userid, user: req.user });
    console.log({ userid: userid });
  } catch (e) {
    return res.render("/");
  }
};

exports.postWrite = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.render("board/write.html", { user: req.user });
    }
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;

    const data = req.body;
    data.writerid = userid;

    const result = await boardService.listCreate(data);
    res.redirect(`/boards/view?id=${result.id}`);
  } catch (e) {
    next(e);
  }
};

// 글 수정
exports.getModify = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.render("board/modify.html", { user: req.user });
    }
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;

    const { id } = req.query;
    const [result] = await boardService.getFindOne(id);

    if (result.writer !== userid) {
      return res.redirect(`/boards/view?id=${id}`);
    }

    res.render("board/modify.html", { ...result, user: req.user });
  } catch (e) {
    next();
  }
};

exports.postModify = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.render("board/modify.html", { user: req.user });
    }

    const data = req.body;
    data.id = req.query.id;
    const result = await boardService.listUpdate(data);
    console.log(result);

    res.redirect(`/boards/view?id=${result.id}`);
  } catch (e) {
    next();
  }
};

// 글 삭제
exports.postDelete = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const payload = jwt.verify(token, "jsk1234");
    const userid = payload.id;
    const userlv = payload.lv;
    console.log(userlv);

    const { id } = req.query;
    const [result] = await boardService.getFindOne(id);

    if (result.writer !== userid && userlv <= 8) {
      return res.redirect(`/boards/view?id=${id}`);
    }

    await boardService.listDelete(id);
    res.redirect("/boards/list");
  } catch (e) {
    next(e);
  }
};
