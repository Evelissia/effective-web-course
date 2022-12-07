import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { cardTypes } from '../../types/cardTypes';
import {
  Typography,
  Card as MuiCard,
  CardMedia,
  CardContent,
  Box,
  CardActionArea
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

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

interface CardProps extends cardTypes {
  type: string;
}

const Cards: FC<CardProps> = ({ id, image, name, description, type }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick: () => void = () => {
    navigate(`/${type}/${id}`);
  };

  return (
    <Box border={1} borderColor="secondary.main" className={classes.root}>
      <CardActionArea>
        <MuiCard className={classes.card} onClick={handleClick}>
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
      </CardActionArea>
    </Box>
  );
};

export default Cards;
