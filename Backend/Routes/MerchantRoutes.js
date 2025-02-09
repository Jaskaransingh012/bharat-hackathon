const express = require("express");
const router = express.Router();
const Merchant = require("../Models/Merchant");

// Create a new merchant
router.post("/", async (req, res) => {
  try {
    const merchant = new Merchant(req.body);
    await merchant.save();
    res.status(201).json(merchant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all merchants
router.get("/", async (req, res) => {
  try {
    const merchants = await Merchant.find();
    res.json(merchants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;