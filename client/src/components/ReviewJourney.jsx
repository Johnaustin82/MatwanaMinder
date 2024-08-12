import React, { useState } from 'react';
import './ReviewJourney.css';  

const ReviewJourney = () => {
  const [driverRating, setDriverRating] = useState(0);
  const [journeyRating, setJourneyRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      driverRating,
      journeyRating,
      comments,
    };
    console.log('Review Submitted:', review);
    alert('Thank you for your feedback!');
    
    setDriverRating(0);
    setJourneyRating(0);
    setComments('');
  };

  return (
    <div className="review-journey-container">
      <h2>Review Your Journey</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Driver’s Rating:</label>
          <select value={driverRating} onChange={(e) => setDriverRating(e.target.value)} required>
            <option value={0}>Select a rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>{rating} {rating === 1 ? 'Star' : 'Stars'}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Journey Rating:</label>
          <select value={journeyRating} onChange={(e) => setJourneyRating(e.target.value)} required>
            <option value={0}>Select a rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>{rating} {rating === 1 ? 'Star' : 'Stars'}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Comments and Feedback:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Share your experience with us..."
            required
          />
        </div>
        <button type="submit">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewJourney;