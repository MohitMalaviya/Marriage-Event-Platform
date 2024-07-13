const mongoose = require("mongoose");
const payment_details = new mongoose.Schema({
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
  card_expiry_date: {
    type: Date,
    require: true,
  },
  price:{
    type: Number,
    require: true,
  }
});

module.exports = mongoose.model("payment_details", payment_details);
