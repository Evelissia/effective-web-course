import React, { FC } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { seriesData } from '../../mocks/series-data';
import Cards from '../../components/Cards';
import Search from '../../components/Search';

const Series: FC = () => {
  return (
    <Box>
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
