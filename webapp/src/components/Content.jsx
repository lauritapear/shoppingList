import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Content(props) {
  const classes = useStyles();

  const handleAddItem = () => {
    props.onToggleOpen();
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid
                item
                xs
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {/* <Box p={1}> */}
                <Typography gutterBottom variant="subtitle1">
                  Your shopping list is empty :(
                </Typography>
                <Button variant="contained" color="primary"
                onClick={handleAddItem}>
                  Add yout first item
                </Button>
                {/* </Box> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
