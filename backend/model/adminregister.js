const mongoose = require("mongoose");

let adminregister = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    // required: true
  },
  phone: {
    type: Number,
    required: true,
    length: 10
  },
  
  created_date: {
    type: Date,
    default: new Date(),
  },
  member_id: {
    type: Number,
  },
});

module.exports = mongoose.model("adminregister", adminregister);
