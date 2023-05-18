import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.footer} elevation={3}>
      <Typography variant="body2">&copy; 2023 CHASE STRATTON. All rights reserved.</Typography>
    </Paper>
  );
};

export default Footer;
