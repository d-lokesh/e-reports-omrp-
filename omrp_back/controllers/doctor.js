const { Maccount } = require("../models/dreg");
const { Report } = require("../models/report");
const { Appoint } = require("../models/appointment");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { date } = require("joi");

const adduser = async (req, res) => {
  //   const { error } = validateuser(req.body);
  //   if (error) {
  //     return res.status(400).send(error.details[0].message);
  //   }
  let account = await Maccount.findOne({ email: req.body.email });
  if (account) return res.status(459).send("email already registred");
  console.log(req.body.stime, "stime");
  let acc = {
    doctorname: req.body.doctorname,
    sp: req.body.sp,
    exp: req.body.exp,
    phone: req.body.phone,
    hospitalname: req.body.hospitalname,
    email: req.body.email,
    pass: req.body.pass,
    stime: req.body.stime,
    etime: req.body.etime,
    fee: req.body.fee,
    rating: req.body.rating,
    rcount: req.body.rcount,
    gender: req.body.gender,
  };
  account = new Maccount(
    _.pick(acc, [
      "doctorname",
      "hospitalname",
      "phone",
      "sp",
      "exp",
      "email",
      "pass",
      "stime",
      "etime",
      "fee",
      "gender",
      "rating",
      "rcount",
    ])
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
          " <h4>Hello   DR'" +
          req.body.doctorname +
          "</h4>" +
          "<p>Welcome to Online medical report portal:</p><br>" +
          "<br>" +
          "<p>from OMRP Team </p>",
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);
      });
      const token = jwt.sign(
        {
          _id: account._id,
          name: account.doctorname,
          mail: account.email,
        },
        "jwtkey"
      );

      res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(account, ["_id", "doctorname", "email"]));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: "Error while creating your account",
      });
    });
};

const addreport = async (req, res) => {
  //   const { error } = validateuser(req.body);
  //   if (error) {
  //     return res.status(400).send(error.details[0].message);
  //   }
  let acc = {
    patientname: req.body.patientname,
    gender: req.body.gender,
    dob: req.body.dob,
    age: req.body.age,
    city: req.body.city,
    omrp: req.body.omrp,
    weight: req.body.weight,
    height: req.body.height,
    healthproblem: req.body.healthproblem,
    medicine: req.body.medicine,
    medicineduration: req.body.medicineduration,
    hospital: req.body.hospital,
    date: new Date().toUTCString(),
    doctor: req.body.doctor,
    nurse: req.body.nurse,
    diabetes: req.body.diabetes,
    malaria: req.body.malaria,
    bp: req.body.bp,
    heartdisease: req.body.heartdisease,
    liverfunction: req.body.liverfunction,
    nephralgia: req.body.nephralgia,
    cerebraldesease: req.body.cerebraldesease,
    skindisease: req.body.skindisease,
    email: req.body.email,
    phno: req.body.phno,
  };
  account = new Report(
    _.pick(acc, [
      "patientname",
      "phno",
      "gender",
      "dob",
      "age",
      "city",
      "omrp",
      "weight",
      "nurse",
      "height",
      "healthproblem",
      "medicine",
      "medicineduration",
      "hospital",
      "date",
      "doctor",
      "diabetes",
      "malaria",
      "bp",
      "heartdisease",
      "liverfunction",
      "nephralgia",
      "cerebraldesease",
      "skindisease",
      "email",
    ])
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
        subject: "Medical report from  " + req.body.hospital + "  Hopitals",
        html:
          " <h4>Hello   " +
          req.body.patientname +
          "," +
          "</h4>" +
          "<p>Welcome to Online medical report portal:</p>" +
          "<h3>Your Medical report :</h3>" +
          "<p>Hospital Name   :   " +
          req.body.hospital +
          "</p>" +
          "<p>Date & Time   :   " +
          new Date().toUTCString() +
          "</p><br>" +
          "<h4>Patient Details</h4>" +
          "<p>---------------------------------------------------------------------------------------------------</p>" +
          "<p>Patient Name   :   " +
          req.body.hospital +
          "</p>" +
          "<p>Patient DOB   :   " +
          req.body.dob +
          "</p>" +
          "<p>Patient Gender   :   " +
          req.body.gender +
          "</p>" +
          "<p>Patient OMRP NO   :   " +
          req.body.omrp +
          "</p>" +
          "<p>---------------------------------------------------------------------------------------------------</p>" +
          "<h4>Health Details</h4>" +
          "<p>---------------------------------------------------------------------------------------------------</p>" +
          "<p>Health issues   :   " +
          req.body.healthproblem +
          "</p>" +
          "<p>Medicine   :   " +
          req.body.medicine +
          "</p>" +
          "<p>Medicine Duratio  :   " +
          req.body.medicineduration +
          "</p>" +
          "<p>---------------------------------------------------------------------------------------------------</p>" +
          "<h4>Hospital Details Details</h4>" +
          "<p>---------------------------------------------------------------------------------------------------</p>" +
          "<p>Hopital Name   :   " +
          req.body.hospital +
          "</p>" +
          "<p>Doctor Name   :   " +
          req.body.doctor +
          "</p>" +
          "<p>---------------------------------------------------------------------------------------------------</p>" +
          "<br>" +
          "<p>From OMRP Team </p>",
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);
      });
      res.send(_.pick(account, ["_id", "patientname", "omrp"]));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: "Error while creating your report",
      });
    });
};

const getreport = (req, res) => {
  Report.find({ omrp: req.body.omr })
    .sort({ _id: -1 })
    .then((stores) => {
      res.send(stores);
    })
    .catch((err) => {
      res.status(5500).send({
        error: "Error while retriving reports",
      });
    });
};

const getapp = (req, res) => {
  Appoint.find({ did: req.body.did })
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

const getdoctors = (req, res) => {
  Maccount.find()
    .sort({ _id: -1 })
    .then((stores) => {
      res.send(stores);
    })
    .catch((err) => {
      res.status(5500).send({
        error: "Error while retriving doctors data",
      });
    });
};

const addapp = async (req, res) => {
  let acc = {
    age: req.body.age,
    date: req.body.date,
    gender: req.body.gender,
    healthproblem: req.body.healthproblem,
    phno: req.body.phno,
    pname: req.body.pname,
    omr: req.body.omr,
    did: req.body.did,
    sp: req.body.sp,
    hospitalname: req.body.hospitalname,
    fee: req.body.fee,
    dname: req.body.dname,
  };
  account = new Appoint(
    _.pick(acc, [
      "pname",
      "phno",
      "healthproblem",
      "gender",
      "date",
      "age",
      "omr",
      "dname",
      "did",
      "sp",
      "hospitalname",
      "fee",
    ])
  );
  await account
    .save()
    .then((result) => {
      res.send(_.pick(account, ["_id", "pname", "omr"]));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: "Error while creating your appointment",
      });
    });
};

const updaterating = async (req, res) => {
  try {
    const user = await Maccount.find({ _id: req.body.did });
    let count = user["rcount"];
    let rating = user["rating"];
    count = count + 1;
    rating = (rating + req.body.value) / count;

    const user1 = await Maccount.updateOne(
      { _id: req.body.did },
      { $push: { rating: rating } }
    );
    res.send(user1);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  adduser,
  addreport,
  getreport,
  getdoctors,
  addapp,
  getapp,
  updaterating,
};
