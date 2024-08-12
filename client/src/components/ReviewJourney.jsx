import React, { useState } from 'react';
import './ReviewJourney.css';

const ReviewJourney = ({ ticket, onSubmitReview }) => {
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
        onSubmitReview(ticket.id, review);
        alert('Thank you for your feedback!');
    };

    return (
        <div className="review-journey-page">
            <h2>Review Your Journey on Bus {ticket.busName}</h2>
            <form onSubmit={handleSubmit}>
                <div className="rating-section">
                    <label>
                        Driver’s Rating:
                        <select value={driverRating} onChange={(e) => setDriverRating(e.target.value)} required>
                            <option value={0}>Select a rating</option>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <option key={rating} value={rating}>
                                    {rating} {rating === 1 ? 'Star' : 'Stars'}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="rating-section">
                    <label>
                        Journey Rating:
                        <select value={journeyRating} onChange={(e) => setJourneyRating(e.target.value)} required>
                            <option value={0}>Select a rating</option>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <option key={rating} value={rating}>
                                    {rating} {rating === 1 ? 'Star' : 'Stars'}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="comments-section">
                    <label>
                        Comments and Feedback:
                        <textarea
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            placeholder="Share your experience with us..."
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewJourney;