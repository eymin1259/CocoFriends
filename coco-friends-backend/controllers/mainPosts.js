const Post = require("../schemas/post");

const get = async (req, res, next) => {
  try {
    const offset = 0;
    const limit = 0;
    const mainPosts = await Post.find({}).limit(30);
    res.status(201).json({ mainPosts });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
