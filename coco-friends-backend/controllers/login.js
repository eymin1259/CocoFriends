const User = require("../schemas/user");
const jwt = require("jsonwebtoken");

const post = async (req, res, next) => {
  try {
    const id = req.body.id;
    const pw = req.body.pw;

    const userInDb = await User.findOne({ email: id, password: pw });

    if (!userInDb) {
      console.log("no user");
      res.status(400).json({ error: "NO_USER" });
    } else {
      const userId = userInDb.id;
      const token = jwt.sign(
        {
          userId,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res
        .status(201)
        .json({ token: token, photo: userInDb.photo, id: userInDb.id });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { post };
