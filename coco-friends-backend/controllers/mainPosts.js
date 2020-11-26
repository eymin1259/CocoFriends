const Post = require("../schemas/post");

const get = async (req, res, next) => {
  try {
    const offset = parseInt(req.query.offset);
    const limit = 15;
    const mainPosts = await Post.find({}).skip(offset).limit(limit);
    res.status(201).json({ mainPosts });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
