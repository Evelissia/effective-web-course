import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/marvel_logo.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: '#B22222'
    },
    root: {
      flexGrow: 1
    },
    logo: {
      maxWidth: 70,
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
          <Grid className={classes.menuButton}>
            <Button color="inherit">Characters</Button>
            <Button color="inherit">Comics</Button>
            <Button color="inherit">Series</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
