const express = require("express");
const mainPosts = require("../controllers/mainPosts");
const userPosts = require("../controllers/userPosts");

const router = express.Router();

router.get("/all", mainPosts.get);
router.get("/ofUser", userPosts.get);

module.exports = router;
