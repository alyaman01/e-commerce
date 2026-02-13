const express = require("express");
const router = express.Router();
const User = require("../Models/user");

router.post("/register", async (req, res) => {
  try {
    console.log("REGISTER HIT:", req.body);

    const user = await User.create(req.body);

    res.status(201).json({
      message: "User saved in DB ✅",
      user,
    });
  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
