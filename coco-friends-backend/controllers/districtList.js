const District = require("../schemas/district");

const get = async (req, res, next) => {
  try {
    const cityId = req.query.cityId;
    const districts = await District.find({ city: cityId });
    res.status(201).json({ districts });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
