const mongoose = require("mongoose");
const Joi = require("joi");

const RegSchema = new mongoose.Schema({
  pname: { type: String, require: true },
  age: { type: String, require: true },
  gender: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  pass: { type: String, require: true },
  omr: { type: String, require: true },
});

function validateuser(user) {
  const schema = {
    pname: Joi.string().min(3).max(50).required(),
    age: Joi.string().min(3).max(10).required(),
    gender: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(4).max(100).required(),
    email: Joi.string().min(5).max(50).required(),
    pass: Joi.string().min(4).max(50).required(),
    slotcount: Joi.number(),
  };
  return Joi.validate(user, schema);
}

const Account = mongoose.model("patient", RegSchema);

exports.Account = Account;
