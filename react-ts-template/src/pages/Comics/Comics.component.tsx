import React, { FC } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { comicsData } from '../../mocks/comics-data';
import Cards from '../../components/Cards';
import Search from '../../components/Search';

const Comics: FC = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
      >
        Comics({comicsData.length})
      </Typography>
      <Search />

      <Grid container justifyContent="space-around">
        {comicsData.map((item) => (
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

export default Comics;
