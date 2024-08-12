import React from 'react';
import { Box, Typography } from '@mui/material';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  return (
    <Box component="main" className="dashboard-container">
      <Typography variant="h4" className="dashboard-title" gutterBottom>
        Matatu Maintenance Dashboard
      </Typography>
      <Typography variant="h6" className="dashboard-subtitle">
        Welcome to the dashboard. Use the sidebar to navigate to different sections.
      </Typography>
    </Box>
  );
}

export default Dashboard;