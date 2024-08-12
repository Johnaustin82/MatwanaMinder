import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Reviews from './Reviews.jsx';
import './Reviews.css'; // Import the CSS file

function Reviews() {
  return (
    <Box component="main" className="reviews-container">
      <Typography variant="h4" className="reviews-title" gutterBottom>
        Passenger Reviews
      </Typography>
      <Paper elevation={3} className="reviews-paper">
        <Typography variant="h6">Average Review Ratings</Typography>
        <ReviewsChart />
      </Paper>
    </Box>
  );
}

export default Reviews;