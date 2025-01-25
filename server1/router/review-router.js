const express = require("express");
const router = express.Router();
const { addReview } = require("../controllers/review-controller");
const authMiddleware = require("../middlewares/auth-middleware");

// Add authentication middleware to the review route
router.post("/", authMiddleware, addReview);

module.exports = router;
