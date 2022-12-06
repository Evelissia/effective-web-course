import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { cardTypes } from '../../types/cardTypes';
import {
  Typography,
  Card as MuiCard,
  CardMedia,
  CardContent,
  Box
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 350,
      height: '100%'
    },
    root: {
      marginTop: '20px'
    }
  })
);

const Cards: FC<cardTypes> = ({ id, image, name, description }) => {
  const classes = useStyles();
  return (
    <Box border={1} borderColor="secondary.main" className={classes.root}>
      <MuiCard className={classes.card}>
        <CardMedia component="img" height="350" image={image} alt="item" />
        <CardContent>
          <Typography variant="h5" color="primary">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </MuiCard>
    </Box>
  );
};

export default Cards;
