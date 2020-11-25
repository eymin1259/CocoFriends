const User = require("../schemas/user");

const get = async (req, res, next) => {
  const searchCondition = {};
  try {
    // 이름, 성별, 시, 구
    if (req.query.name) {
      //이름 조건 있으면
      searchCondition.name = req.query.name;
    }
    if (req.query.sx) {
      // 성별조건 있으면
      searchCondition.sex = rqe.query.sx;
    }
    if (req.query.city) {
      // 도시 조건 있으면
      searchCondition.city = req.query.city;
    }
    if (req.query.district) {
      // 구 조건 있으면
      searchCondition.district = req.query.district;
    }

    const users = await User.find(searchCondition);
    res.status(201).json({ users });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
