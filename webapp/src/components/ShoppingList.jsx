import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AlertDialog from "./AlertDialog";

export default function ShoppingList(props) {
  const useStyles = makeStyles((theme) => ({
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-end",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      flexWrap: "nowrap",
      width: "80%",
    },
    secondaryAction: {
      paddingRight: 48,
    },
  }));
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpenDialogToggle = () => {
    setOpenDialog(!openDialog);
  };

  const [clickedItem, setClickedItem] = React.useState(null);
  const handleItemClick = (item) => {
    setClickedItem(item);
    props.updateItemID(item.id);
  };

  const handleAddItem = () => {
    props.updateFormType('Add');
    props.toggleOpenDrawer();
  };

  const handleDelete = () => {
    setOpenDialog(!openDialog);
    props.deleteItem(clickedItem.id);
  };

  // const handleEditItem = () => {
    // console.log("HAndleEdit", props.itemID);
    // handleItemClick(item);
    // props.editItem(clickedItem.name, clickedItem.description, props.itemID);
  // };

  let list = props.itemsData.map((item, index) => (
    <ShoppingListItem
      className={classes.list}
      key={index}
      item={item}
      updateFormType={props.updateFormType}
      toggleOpenDrawer={props.toggleOpenDrawer}
      onDelete={handleOpenDialogToggle}
      // handleEdit={handleEditItem}
      handleItemClick={() => handleItemClick(item)}
    />
  ));
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleAddItem}
      >
        Add Item
      </Button>
      {list}
      <AlertDialog
        openDialog={openDialog}
        handleDelete={handleDelete}
        toggleDialog={handleOpenDialogToggle}
      />
    </div>
  );
}
