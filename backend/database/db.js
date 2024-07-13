const mongoose = require("mongoose");
const connection = mongoose
  .connect("mongodb://127.0.0.1:27017/vendor")

  .then(() => {
    console.log("connection succesfull");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
