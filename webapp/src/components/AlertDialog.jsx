import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

export default function AlertDialog(props) {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "center",
      margin: "auto",
      width: "fit-content",
    },
    item: {
      padding: theme.spacing(0, 3),
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={props.openDialog}
        onClose={props.toggleDialog}
        aria-labelledby="max-width-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Item?"}</DialogTitle>
        <DialogContent className={classes.container}>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item? This can not be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.toggleDialog}>Cancel</Button>
          <Button
            onClick={props.handleDelete}
            variant="contained"
            color="primary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
