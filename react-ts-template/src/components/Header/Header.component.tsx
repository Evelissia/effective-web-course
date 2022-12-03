import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/marvel_logo.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NavigationButton from '../Navigation-button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: '#B22222',
      position: 'fixed',
      height: '60px'
    },
    root: {
      flexGrow: 1
    },
    logo: {
      maxWidth: 60,
      marginRight: '10px'
    },
    menuButton: {
      marginLeft: '1080px'
    }
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <AppBar position="absolute" className={classes.header}>
        <Toolbar>
          <img src={logo} className={classes.logo} />
          <Grid container className={classes.menuButton} spacing={5} alignItems="center">
            <NavigationButton linkTo="/" title="Characters" />
            <NavigationButton linkTo="/comics" title="Comics" />
            <NavigationButton linkTo="/series" title="Series" />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
