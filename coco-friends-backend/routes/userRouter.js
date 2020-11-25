const express = require("express");
const userInfo = require("../controllers/userInfo");
const searchUser = require("../controllers/searchUser");

const router = express.Router();

router.get("/:userId", userInfo.get);
router.get("/search", searchUser.get);

module.exports = router;
