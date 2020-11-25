const City = require("../schemas/city");

const get = async (req, res, next) => {
  try {
    const cities = await City.find({});
    res.status(201).json({ cities });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
