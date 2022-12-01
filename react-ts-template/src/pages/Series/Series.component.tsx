import React, { FC } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { seriesData } from '../../mocks/series-data';
import Cards from '../../components/Cards';
import Search from '../../components/Search';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '60px'
    }
  })
);

const Series: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        variant="h2"
        component="h2"
      >
        Series({seriesData.length})
      </Typography>
      <Search />

      <Grid container justifyContent="space-around">
        {seriesData.map((item) => (
          <Cards
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            id={''}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Series;
