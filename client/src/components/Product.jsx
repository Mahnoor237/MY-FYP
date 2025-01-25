import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import './Product.css';
import axios from 'axios';

const Product = ({ product }) => {
  const [showReviewDialog, setShowReviewDialog] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [userReview, setUserReview] = useState(null); // Store user review data
  const { user } = useAuth();

  useEffect(() => {
    // Check if user is authenticated and review is not set yet
    if (user && !userReview) {
      setUserReview({
        username: user.username,
        email: user.email,
        productId:  product.id, // Use productId instead of id
        rating: 0,
        reviewText: '',
      });
    }
  }, [user, userReview, product.id]);

  const handleReviewClick = () => {
    // Show review dialog only if user is authenticated and not an admin
    if (user && !user.isAdmin) {
      setShowReviewDialog(true);
    } else if (!user) {
      // Redirect user to login or show a message
      console.log('User is not authenticated. Please log in to add a review.');
    } else {
      // Show an alert indicating that admins cannot submit reviews
      alert('Admins are not allowed to submit reviews.');
    }
  };

  const handleReviewSubmit = async () => {
    try {
      // Check if review text is not empty
      if (!review.trim()) {
        console.error('Review text is required.');
        return;
      }
  
      // Create a new review object with the latest data
      const newReview = {
        productId: product.productId, // Send the productId as a string
        rating,
        reviewText: review,
      };
  
      // Send the review data to your backend server
      const token = localStorage.getItem("token");
      if (token) {
        axios.post(
          "http://localhost:5000/api/form",
          newReview, // Send the new review object
          { headers: { Authorization: `Bearer ${token}` } }
        )
          .then(response => {
            // Handle response
            console.log("Response:", response.data);
          })
          .catch(error => {
            // Handle error
            console.error("Error:", error);
          });
      } else {
        alert("You have logged out");
        console.error("Authorization token not found.");
      }
  
      // Close the review dialog after submission
      setShowReviewDialog(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };
  
  

  const handleStarClick = (value) => {
    setRating(value);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'star filled' : 'star'}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };
  

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>Rs {product.price}</p>
      </div>

      <div className="product-buttons">
        {/* Buy Button (at the left) */}
        <button className="buy-button" onClick={() => console.log('Buy button clicked')}>
          Buy
        </button>

        {/* Review Button (at the right) */}
        <button className="review-button" onClick={handleReviewClick}>
          Add Review
        </button>
      </div>

      {showReviewDialog && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowReviewDialog(false)}>
              &times;
            </span>
            <h2>Add Review for {product.name}</h2>
            <textarea
              id="review-text"
              rows="4"
              cols="50"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <div className="rating">
              <span>Your Rating:</span>
              {renderStars()}
            </div>
            <button className="review-button" onClick={handleReviewSubmit}>
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default Product;
