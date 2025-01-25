const User = require("../models/user-model");
const Review = require("../models/review-model");
const analyzeSentiment = require("../utils/analyzeSentiment"); // Import the sentiment analysis function

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// Single user logic
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

// User update logic
const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        const updatedData = await User.updateOne({ _id: id }, { $set: updatedUserData });
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
};

// User delete logic
const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
        next(error);
    }
};

// Get reviews with sentiment analysis
const getAllReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find();
        console.log(reviews);
        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: "No review Found" });
        }

        const reviewsWithSentiment = reviews.map(review => {
            const sentiment = analyzeSentiment(review.reviewText);
            return {
                ...review._doc, // Include all existing review fields
                sentimentScore: sentiment.score,
                sentimentComparative: sentiment.comparative,
            };
        });

        return res.status(200).json(reviewsWithSentiment);
    } catch (error) {
        next(error);
    }
};

// reviews delete logic
const deleteReviewById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Review.findByIdAndDelete(id); // Use findByIdAndDelete to delete the review
        return res.status(200).json({ message: "Review Deleted Successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getAllReviews,
    deleteUserById,
    getUserById,
    updateUserById,
    deleteReviewById
};
