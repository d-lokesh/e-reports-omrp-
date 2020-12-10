const mongoose = require("mongoose");
const Joi = require("joi");

const RegSchema = new mongoose.Schema({
  patientname: { type: String, require: true },
  gender: { type: String, require: true },
  dob: { type: String, require: true },
  age: { type: String, require: true },
  city: { type: String, require: true },
  omrp: { type: String, require: true },
  weight: { type: String, require: true },
  height: { type: String, require: true },
  healthproblem: { type: String, require: true },
  medicine: { type: String, require: true },
  medicineduration: { type: String, require: true },
  hospital: { type: String, require: true },
  date: { type: String, require: true },
  doctor: { type: String, require: true },
  nurse: { type: String, require: true },
  diabetes: { type: String },
  malaria: { type: String },
  bp: { type: String },
  heartdisease: { type: String },
  liverfunction: { type: String },
  nephralgia: { type: String },
  cerebraldesease: { type: String },
  skindisease: { type: String },
  email: { type: String },
  phno: { type: String },
});

const Report = mongoose.model("reports", RegSchema);

exports.Report = Report;
