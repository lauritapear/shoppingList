import React from "react";
// import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { makeStyles } from "@material-ui/core/styles";
// import AlertDialog from "./AlertDialog";

export default function ShoppingListItem(props) {
  const useStyles = makeStyles((theme) => ({
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-end",
    },
    secondaryAction: {
        paddingRight: 48,
      },
  }));

  const classes = useStyles();

  const handleEdit = () => {
    props.openEditForm();
    props.setFormAction("Edit");
  };

  return (
    <ListItem id={props.item.id}>
      <ListItemAvatar>
        <Checkbox color="primary" />
      </ListItemAvatar>
      <ListItemText primary={props.item.name} secondary={props.item.description} />
      <div className={classes.buttonContainer}>
        <ListItemSecondaryAction className={classes.secondaryAction}>
          <IconButton edge="end" aria-label="delete" onClick={handleEdit}>
            <EditOutlinedIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <ListItemSecondaryAction >
          <IconButton edge="end" aria-label="delete">
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </div>
    </ListItem>
  );
}
