import React, {FC} from 'react';
import { Grid, TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
        width: "100%",
      },
    
      inputWraper: {
        width: "80%",
      },
      buttonWraper: {
        width: "15%",
      },
      button: {
        height: 50,
        width: "100%",
      },
      root: {
        marginBottom: 50,
      }
  })
);


export default function Search() {
    const classes = useStyles();

    return (
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        className={classes.root}
      >
        <Grid item className={classes.inputWraper}>
          <TextField
            className={classes.input}
            variant="outlined"
            label="Search for Characters by Name"
          />
        </Grid>

        <Grid item className={classes.buttonWraper}>
          <Button variant="outlined" size="large" className={classes.button}>
            Search
          </Button>
        </Grid>
      </Grid>
    );
}