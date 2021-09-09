import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Spinner from "./Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 80,
    minHeight: 300,
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    margin: "0 auto",
    minWidth: 480,
    minHeight: 150,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
}));

export default function Content(props) {
  const classes = useStyles();

  const handleAddItem = () => {
    props.updateFormType("Add");
    props.onToggleOpen();
  };

  let content = null;
  if (props.loading) {
    content = (
      <div>
        <Spinner />
      </div>
    );
  } else {
    content = (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={0} variant="outlined">
          <div className={classes.content}>
            <Typography gutterBottom variant="subtitle1">
              Your shopping list is empty :(
            </Typography>
            <Button variant="contained" color="primary" onClick={handleAddItem}>
              Add yout first item
            </Button>
          </div>
        </Paper>
      </div>
    );
  }

  return <div>{content}</div>;
}
