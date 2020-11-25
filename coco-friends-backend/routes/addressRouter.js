const express = require("express");
const cityList = require("../controllers/cityList");
const districtList = require("../controllers/districtList");

const router = express.Router();

router.get("/city", cityList.get);
router.get("/district", districtList.get);

module.exports = router;
