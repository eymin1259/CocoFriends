const User = require("../schemas/user");

const get = async (req, res, next) => {
  try {
    // veriftoken middleware 연동해서 로그인유저인경우 미들웨어에서 뽑은 정보 바로 response
    if (verifytoken) {
      res.status(200).json("loggedinuserinfo");
    }
    // 로그인 유저 아닌경우
    const userId = req.params.userId;
    const userInfo = await User.find({ id: userId });
    res.status(201).json({ userInfo });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
