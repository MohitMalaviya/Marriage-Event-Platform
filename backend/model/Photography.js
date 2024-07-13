const mongoose = require("mongoose");
const Photography = new mongoose.Schema({
  p_img: {
    type: String,
    require: true,
  },
  p_name: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  review: {
    type: Number,
    require: true,
  },
  p_id: {
    type: String,
    require: true,
  },
  
});

module.exports = mongoose.model("Photography", Photography);

