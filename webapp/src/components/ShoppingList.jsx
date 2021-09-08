import React from "react";

import ShoppingListItem from "./ShoppingListItem";

import { makeStyles } from "@material-ui/core/styles";
import AlertDialog from "./AlertDialog";

export default function ShoppingList(props) {
    const useStyles = makeStyles((theme) => ({
        buttonContainer: {
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          justifyContent: "flex-end",
        },
        secondaryAction: {
            paddingRight: 48,
          },
      }));
      const classes = useStyles();

      let list = props.items
      .map((item, index) => (
        <ShoppingListItem className={classes.buttonContainer}
          key={index}
          item={item}
          openEditForm={props.openEditForm}
        />
      ));
  return (
    <div>
    {list}
    <AlertDialog />
  </div>
 
    
      
  );
}
