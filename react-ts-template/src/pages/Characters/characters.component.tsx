import React, { FC } from 'react';
import { Box, Grid, Typography} from '@material-ui/core';
import {charactersData} from '../../mocks/characters-data';
import Cards from '../../components/Cards';
import Search from '../../components/Search';

const Characters: FC = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
      >
        Characters({charactersData.length})
      </Typography>
      <Search />

      <Grid container justifyContent="space-around">
        {charactersData.map((item) => (
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

export default Characters;