const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// ADD PRODUCT
router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
