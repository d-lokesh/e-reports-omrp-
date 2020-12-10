const express = require("express");
const auth = require("../controllers/auth_c");

const router = express.Router();

router.post("/auth", auth.authuser);

module.exports = router;
