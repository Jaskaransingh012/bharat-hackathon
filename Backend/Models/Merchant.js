const mongoose = require("mongoose");

const merchantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  businessName: {
    type: String,
    required: true,
    trim: true,
  },
  businessAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  contactNumber: {
    type: String,
    required: true,
  },
  businessEmail: {
    type: String,
    required: true,
    unique: true,
  },
  website: {
    type: String,
    default: "",
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: "",
  },
}, { timestamps: true });

const Merchant = mongoose.model("Merchant", merchantSchema);
module.exports = Merchant;