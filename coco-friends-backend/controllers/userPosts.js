const Post = require("../schemas/post");

const get = async (req, res, next) => {
  try {
    const userId = req.query.uid;
    const userPosts = await Post.find({ user: userId });

    res.status(201).json({ userPosts });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
