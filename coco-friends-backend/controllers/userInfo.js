const User = require("../schemas/user");
const City = require("../schemas/city");
const District = require("../schemas/district");

const get = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const userInfo = await User.findOne({ _id: userId });
    const userCity = await City.findOne({ _id: userInfo.city });
    const userDistrict = await District.findOne({ _id: userInfo.district });

    res.status(201).json({ userInfo, userCity, userDistrict });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
