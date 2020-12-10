const { Account } = require("../models/preg");
const { Maccount } = require("../models/dreg");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const authuser = async (req, res) => {
  if (req.body.ism === 1) {
    let account = await Maccount.findOne({ email: req.body.email });
    if (!account) return res.status(402).send("Invalid email or password");
    const validatepass = (await req.body.password) === account.pass;

    if (!validatepass) {
      return res.status(402).send("Invalid email or password");
    }

    const token = jwt.sign(
      { _id: account._id, name: account.doctorname },
      "jwtkey"
    );
    res.send(token);
  } else {
    let account = await Account.findOne({ email: req.body.email });
    if (!account) return res.status(402).send("Invalid email or password");
    const validatepass = (await req.body.password) === account.pass;

    if (!validatepass) {
      return res.status(402).send("Invalid email or password");
    }

    const token = jwt.sign(
      { _id: account._id, omr: account.omr, name: account.doctorname },
      "jwtkey"
    );
    res.send(token);
  }

  //   Console.log(req.body.pass, account.pass);
};

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(4).max(50).required(),
    ism: Joi.number(),
  };
  return Joi.validate(req, schema);
}
module.exports = { authuser };
