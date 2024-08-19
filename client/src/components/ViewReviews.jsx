import React, { useEffect, useState } from 'react';
import './Viewreviews.css';

export default function ViewReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://matwanaminder-7.onrender.com/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-list">
      <h1>Customer Reviews</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <li key={review.id} className="review-item">
                <h3>Rating: {review.rating}</h3>
                <p>{review.review_text}</p>
                <p><strong>Email:</strong> {review.email}</p>
              </li>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </ul>
      )}
    </div>
  );
}
