import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Grid,
  Typography,
  Box,
  Link
} from '@material-ui/core';
import logo from '../../assets/marvel_logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "20px 30px",
      height: '22vh',
      backgroundColor: '#595959',
      flexDirection: 'column'
    },
    logo: {
      '& img': {
        width: 100,
        height: 50
      }
    }
  })
);

export default function Footer() {
  const classes = useStyles();
  const year: number = new Date().getFullYear();

  return (
    <Grid item>
      <AppBar position="absolute" color='secondary' className={classes.root}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item className={classes.logo}>
            <img src={logo} alt="logo" />
            <Typography component="h3">
              Data provided by Marvel. © {year} MARVEl
            </Typography>
            <Box>
              <Link
                href="https://developer.marvel.com/"
                underline="hover"
                color="inherit"
              >
                developer.marvel.com
              </Link>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    </Grid>
  );
}
