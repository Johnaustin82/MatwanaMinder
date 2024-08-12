import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import MileageChart from './Mileage.jsx';
import './Mileage.css'; // Import the CSS file

function Mileage() {
  return (
    <Box component="main" className="mileage-container">
      <Typography variant="h4" className="mileage-title" gutterBottom>
        Mileage Overview
      </Typography>
      <Paper elevation={3} className="mileage-paper">
        <Typography variant="h6">Total Mileage</Typography>
        <MileageChart />
      </Paper>
    </Box>
  );
}

export default Mileage;