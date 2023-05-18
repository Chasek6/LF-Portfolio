import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
    
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Chase Stratton</Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/identity">
            <ListItemText primary="Identity" />
          </ListItem>
          <ListItem button component={Link} to="/portfolio">
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button component={Link} to="/explore">
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
