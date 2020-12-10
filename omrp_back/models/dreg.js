const mongoose = require("mongoose");
const Joi = require("joi");

const RegSchema = new mongoose.Schema({
  doctorname: { type: String, require: true },
  sp: { type: String, require: true },
  exp: { type: String, require: true },
  phone: { type: String, require: true },
  hospitalname: { type: String, require: true },
  email: { type: String, require: true },
  stime: { type: String, require: true },
  etime: { type: String, require: true },
  fee: { type: String, require: true },
  rating: { type: Number },
  gender: { type: String },

  rcount: { type: Number },

  pass: { type: String, require: true },
});

const Maccount = mongoose.model("doctors", RegSchema);

exports.Maccount = Maccount;
