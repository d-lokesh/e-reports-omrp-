const { Account } = require("../models/preg");
const { Report } = require("../models/report");
const { Appoint } = require("../models/appointment");

const jwt = require("jsonwebtoken");
const _ = require("lodash");
const nodemailer = require("nodemailer");

const adduser = async (req, res) => {
  //   const { error } = validateuser(req.body);
  //   if (error) {
  //     return res.status(400).send(error.details[0].message);
  //   }
  let account = await Account.findOne({ email: req.body.email });
  if (account) return res.status(459).send("email already registred");
  let acc = {
    pname: req.body.pname,
    age: req.body.age,
    phone: req.body.phone,
    gender: req.body.gender,
    email: req.body.email,
    pass: req.body.pass,
    omr: "omrp" + req.body.phone,
  };
  account = new Account(
    _.pick(acc, ["pname", "phone", "age", "omr", "gender", "email", "pass"])
  );
  await account
    .save()
    .then((result) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: "nanibook1@gmail.com", pass: "Lokesh#123" },
      });
      let mailOptions = {
        from: "nanibook1@gmail.com",
        to: req.body.email,
        subject: "Registration succssfull with OMRP",
        html:
          " <h4>Hello   " +
          req.body.pname +
          "</h4>" +
          "<p>Welcome to Online medical report portal:</p>" +
          "<p>Your Online medical report portal (OMRP NO) is :" +
          "OMRP" +
          req.body.phone +
          " </p><br>" +
          "<br>" +
          "<p>From OMRP Team </p>",
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);
      });
      const token = jwt.sign(
        {
          _id: account._id,
          name: account.pname,
          mail: account.email,
          omr: account.omr,
        },
        "jwtkey"
      );

      res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(account, ["_id", "pname", "email", "omr"]));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: "Error while creating your account",
      });
    });
};

const getreportsbyu = (req, res) => {
  Report.find({ omrp: req.body.omr })
    .sort({ _id: -1 })
    .then((stores) => {
      res.send(stores);
    })
    .catch((err) => {
      res.status(5500).send({
        error: "Error while retriving slots",
      });
    });
};

const getappbyp = (req, res) => {
  Appoint.find({ omr: req.body.omr })
    .sort({ _id: -1 })
    .then((stores) => {
      res.send(stores);
    })
    .catch((err) => {
      res.status(5500).send({
        error: "Error while retriving Appointments",
      });
    });
};

module.exports = {
  adduser,
  getreportsbyu,
  getappbyp,
};
