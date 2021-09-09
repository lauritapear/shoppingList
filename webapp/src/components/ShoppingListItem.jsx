import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { makeStyles } from "@material-ui/core/styles";

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
    text: {
      textDecoration: "line-through",
    },
    frame: {
      display: "flex",
      marginTop: 10,
      minHeight: 100,
    },
    frameColored: {
      display: "flex",
      marginTop: 10,
      minHeight: 100,
      backgroundColor: "ghostwhite",
      border: "0",
    },
  }));

  const classes = useStyles();

  const handleEdit = () => {
    props.updateFormType("Edit");
    props.toggleOpenDrawer();
  };

  return (
    <Paper
      elevation={0}
      variant="outlined"
      className={props.item.done ? classes.frameColored : classes.frame}
    >
      <ListItem id={props.item.id} onClick={props.handleItemClick}>
        <ListItemAvatar>
          <Checkbox
            color="primary"
            checked={props.item.done}
            onChange={props.handleChecked}
          />
        </ListItemAvatar>
        <ListItemText
          className={props.item.done ? classes.text : null}
          primary={props.item.name}
          secondary={props.item.description}
        />
        <div className={classes.buttonContainer}>
          <ListItemSecondaryAction className={classes.secondaryAction}>
            <IconButton edge="end" aria-label="delete" onClick={handleEdit}>
              <EditOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={props.onDelete}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </div>
      </ListItem>
    </Paper>
  );
}
