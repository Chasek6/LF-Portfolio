import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Menu as MenuIcon, Home, Person, Work, Explore, Mail } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const DropdownMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <Link to="/" className={classes.menuItem}>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </MenuItem>
          </Link>
          <Link to="/identity" className={classes.menuItem}>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Identity" />
            </MenuItem>
          </Link>
          <Link to="/portfolio" className={classes.menuItem}>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="Portfolio" />
            </MenuItem>
          </Link>
          <Link to="/explore" className={classes.menuItem}>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </MenuItem>
          </Link>
          <Link to="/contact" className={classes.menuItem}>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default DropdownMenu;
