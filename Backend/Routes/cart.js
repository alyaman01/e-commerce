const express = require("express");
const router = express.Router();
const User = require("../Models/user");

// ADD TO CART
router.post("/add", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const user = await User.findById(userId);

    const item = user.cart.find((i) => i.productId === productId);

    if (item) {
      item.quantity += 1;
    } else {
      user.cart.push({ productId });
    }

    await user.save();
    res.json({ message: "Item added to cart ✅", cart: user.cart });
  } catch (err) {
    res.status(500).json({ error: "Cart error" });
  }
});

// GET CART
router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.json(user.cart);
});

module.exports = router;
