import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './adminReviews.css';

const AdminReviews = () => {
    const [reviewData, setReviewData] = useState([]);
    const { authorizationToken } = useAuth();

    const getReviewsData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/reviews", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setReviewData(data);
                notifyFakeReviews(data); // Notify about fake reviews after fetching data
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch reviews");
        }
    };

    useEffect(() => {
        getReviewsData();
    }, []);

    const handleDeleteReview = async (reviewId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/reviews/delete/${reviewId}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if (response.ok) {
                setReviewData(reviewData.filter(review => review._id !== reviewId));
                toast.success("Review deleted successfully");
            } else {
                toast.error("Failed to delete review");
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete review");
        }
    };

    const isFakeReview = (review) => {
        const userReviews = reviewData.filter(r => r.productId === review.productId && r.userId === review.userId);
        return userReviews.length > 1;
    };

    const notifyFakeReviews = (reviews) => {
        const fakeReviews = reviews.filter(review => isFakeReview(review));
        if (fakeReviews.length > 0) {
            toast.success(`There are ${fakeReviews.length} fake reviews.`);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="admin-reviews-container">
                <h1>Admin Review Data</h1>
                {reviewData.map((review, index) => (
                    <div key={index} className={`review-item ${isFakeReview(review) ? 'fake-review' : ''}`}>
                        <p>Product ID: {review.productId}</p>
                        <p>User ID: {review.userId}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Review Text: {review.reviewText}</p>
                        <p>Sentiment Score: {review.sentimentScore}</p>
                        <p>Sentiment Comparative: {review.sentimentComparative}</p>
                        <p>Created At: {new Date(review.createdAt).toLocaleString()}</p>
                        <button className="delete-button" onClick={() => handleDeleteReview(review._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminReviews;
