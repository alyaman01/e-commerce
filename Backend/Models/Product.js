const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  img: String
});

module.exports = mongoose.model("Product", productSchema);
