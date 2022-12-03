import React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#ffffff',
      textDecoration: 'none'
    },
    activeLink: {
      textDecoration: 'underline',
      color: '#ffffff'
    }
  })
);

interface NavigationButtonProps {
  linkTo: string;
  title: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  linkTo,
  title
}) => {
  const classes = useStyles();
  return (
    <Grid item>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.root
        }
        to={linkTo}
      >
        {title}
      </NavLink>
    </Grid>
  );
};

export default NavigationButton;
