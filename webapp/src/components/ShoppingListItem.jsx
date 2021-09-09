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
import Paper from "@material-ui/core/Paper";
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
    frame: {
      display: "flex",
      marginTop: 10,
      minHeight: 100
    }
  }));

  const classes = useStyles();

  const handleEdit = () => {
    props.updateFormType('Edit');
    props.toggleOpenDrawer();
  };

  // const handleDelete =(item)=>{
  //   console.log(item);
  //   props.onDelete();
  //   // props.handleDelete(item);
  // }
  return (
    <Paper elevation={0} variant="outlined" className={classes.frame}>
      <ListItem id={props.item.id} onClick={props.handleItemClick} button>
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
            <IconButton edge="end" aria-label="delete" onClick={props.onDelete}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </div>
      </ListItem>
    </Paper>);
}
