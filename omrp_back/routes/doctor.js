const express = require("express");
const doctor = require("../controllers/doctor");

const router = express.Router();
router.post("/dreg", doctor.adduser);
router.post("/addreport", doctor.addreport);
router.post("/getreport", doctor.getreport);
router.post("/getdoctors", doctor.getdoctors);
router.post("/addapp", doctor.addapp);
router.post("/getapp", doctor.getapp);
router.put("/updaterating", doctor.updaterating);

module.exports = router;
