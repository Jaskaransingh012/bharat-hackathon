const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true, enum: ["Horse", "Cow", "Goat", "Dog", "Cat"] },
    location: { type: String, required: true },
    images: [{ type: String }], // Store image URLs
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who posted the ad
    createdAt: { type: Date, default: Date.now },
  });

animalSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id.toString();
        delete ret._id;
    },
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;