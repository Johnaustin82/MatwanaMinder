import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Import the CSS file

function Sidebar() {
  const drawerWidth = 240;

  return (
    <Drawer
      className="sidebar"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <List className="sidebar-list">
        <ListItem button component={Link} to="/" className="sidebar-list-item">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/mileage" className="sidebar-list-item">
          <ListItemText primary="Mileage" />
        </ListItem>
        <ListItem button component={Link} to="/reviews" className="sidebar-list-item">
          <ListItemText primary="Reviews" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;