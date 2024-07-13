const mongoose = require("mongoose");
const order = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
    length: 10,
    // min: 10,
    // max: 10,
  },
  city: {
    type: String,
    require: true,
  },
  event_date: {
    type: Date,
    require: true
  },
  event_category: {
    type: String,
    require: true,
  },
  event_item: {
    type: String,
    require: true,
  },
  holder_name: {
    type: String,
    require: true,
  },
  card_number: {
    type: Number,
    require: true,
  },
  card_cvv: {
    type: Number,
    require: true,
  },
  // card_expiry_date: {
  //   type: Date,
  //   require: true,
  // },
  price:{
    type: Number,
    require: true,
  }
});

module.exports = mongoose.model("order", order);
