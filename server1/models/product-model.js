const mongoose = require("mongoose");

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // Storing productId as string
  productId: {
    type: String, // Change the type to String
    required: true,
  },
  // You can add more fields as needed
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
