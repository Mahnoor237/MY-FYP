// models/review-model.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  productId: {
    type: String, // Change the type to String
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  rating: {
    type: String,
    min: 1,
    max: 5,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  sentimentScore: { type: Number, default: 0 }, // Add this line
    sentimentComparative: { type: Number, default: 0 } // Add this 
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
