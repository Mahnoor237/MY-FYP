const mongoose = require("mongoose");
const Review = require("../models/review-model");
const Sentiment = require("sentiment");
const sentiment = new Sentiment();

const addReview = async (req, res) => {
  console.log(req.body, "review added");
  try {
    const { productId, rating, reviewText } = req.body;
    const sentimentAnalysisResult = sentiment.analyze(reviewText); // Perform sentiment analysis
    console.log('Sentiment Analysis Result:', sentimentAnalysisResult);

    if (!sentimentAnalysisResult || typeof sentimentAnalysisResult.score === 'undefined') {
      return res.status(500).json({ message: "Failed to analyze sentiment" });
    }

    const userId = req.user.id;

    // Check if the user is an admin
    if (req.user.isAdmin) {
      return res.status(403).json({ message: "Admins are not allowed to submit reviews." });
    }

    const review = new Review({
      productId,
      userId,
      rating,
      reviewText,
      sentimentScore: sentimentAnalysisResult.score,
      sentimentComparative: sentimentAnalysisResult.comparative,
      sentimentCalculation: sentimentAnalysisResult.calculation,
      sentimentTokens: sentimentAnalysisResult.tokens,
      sentimentWords: sentimentAnalysisResult.words,
      sentimentPositive: sentimentAnalysisResult.positive,
      sentimentNegative: sentimentAnalysisResult.negative
    });

    await review.save();
    console.log(review, "user");

    return res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    console.error("Error adding review:", error);
    return res.status(500).json({ message: "Failed to add review" });
  }
};

module.exports = { addReview };
