const mongoose = require("mongoose");
const Joi = require("joi");

const RegSchema = new mongoose.Schema({
  age: { type: String, require: true },
  date: { type: String, require: true },
  gender: { type: String, require: true },
  healthproblem: { type: String, require: true },
  phno: { type: String, require: true },
  pname: { type: String, require: true },
  omr: { type: String, require: true },
  did: { type: String, require: true },
  sp: { type: String, require: true },
  hospitalname: { type: String, require: true },
  fee: { type: String, require: true },
  dname: { type: String, require: true },
});

const Appoint = mongoose.model("Appointments", RegSchema);

exports.Appoint = Appoint;
