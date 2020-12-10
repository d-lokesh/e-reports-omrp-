const express = require("express");
const user = require("../controllers/patient");

const router = express.Router();
router.post("/preg", user.adduser);
router.post("/getallreports", user.getreportsbyu);
router.post("/getappbyp", user.getappbyp);

module.exports = router;
