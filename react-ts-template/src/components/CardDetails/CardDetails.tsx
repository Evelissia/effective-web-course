import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageBlock: {
      '& img': {
        width: '100%',
        height: '90%'
      },
      height: '90vh'
    },
    root: {
      marginBottom: '100px'
    }
  })
);

interface DetailsProps {
  name: string;
  picture: string;
  description: string;
}


const CardDetails: React.FC<DetailsProps> = ({
  name,
  picture,
  description
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.imageBlock}>
        <img src={picture} alt="detils-img"/>
        <Typography variant='h3' color='inherit'>
            {name}
        </Typography>
      </Grid>

        <Grid item>
            <Typography variant='h5' component="p" color="secondary">
                {description}
            </Typography>
        </Grid>

    </Grid>
  );
};

export default CardDetails;
