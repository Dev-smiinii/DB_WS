const userRepository = require("./user.repository");
const JWT = require("../../lib/jwt");
const jwt = new JWT();

// 로그인
exports.userLogin = async (data) => {
  const { user_id, user_pw } = data;
  try {
    const result = await userRepository.findOneByUserInfo(user_id, user_pw);
    if (!result) return { isLogin: false, data: null };
    const token = jwt.sign({ id: result.userid, lv: result.level });
    return { isLogin: true, data: token };
  } catch (err) {
    throw new Error(err.message);
  }
};

// 회원가입
exports.newUserJoin = async (new_user_id, new_user_pw) => {
  try {
    const result = await userRepository.createUserData(
      new_user_id,
      new_user_pw
    );
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.userOverlap = async (new_user_id) => {
  try {
    const result = await userRepository.findOneByUserInfoOverlap(new_user_id);
    return !!result;
  } catch (err) {
    throw new Error(err.message);
  }
};

// 회원정보 및 수정
exports.findOneByUserId = async (userid) => {
  try {
    const result = await userRepository.findOne("userid", userid);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.userUpdate = async (userid, modify_pw) => {
  try {
    const result = await userRepository.update(userid, modify_pw);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

exports.getFindOne = async (userid) => {
  try {
    const result = await userRepository.userFindOne(userid);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};

// 로그아웃 및 회원탈퇴
exports.userDelete = async (userid) => {
  try {
    const result = await userRepository.deleteUserData(userid);
    return result;
  } catch (err) {
    throw new Error("service err" + err.message);
  }
};
