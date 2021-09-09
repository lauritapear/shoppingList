import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AlertDialog from "./AlertDialog";
import Spinner from "./Spinner";

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
    listTitle: {
      marginTop: 60,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "80%",
      margin: "0 auto",
      justifyContent: "space-between"
    },
    content: {
      display: "flex",
      flexDirection: "column",
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
    console.log("item clicked", item);
  };

  const handleAddItem = () => {
    props.updateFormType("Add");
    props.toggleOpenDrawer();
  };

  const handleDelete = () => {
    setOpenDialog(!openDialog);
    props.deleteItem(clickedItem.id);
  };
  const handleChecked = (item) => {
    props.updateItem(item.name, item.description, !item.done, item.id);
  };

  let list = props.itemsData.map((item, index) => (
    <ShoppingListItem
      className={classes.list}
      key={index}
      item={item}
      updateFormType={props.updateFormType}
      toggleOpenDrawer={props.toggleOpenDrawer}
      onDelete={handleOpenDialogToggle}
      handleChecked={() => handleChecked(item)}
      handleItemClick={() => handleItemClick(item)}
    />
  ));

  let content = null;
  if (props.loading) {
    content = (
      <div>
        <Spinner />
      </div>
    );
  } else {
    content = 
    <>
      <div className={classes.listTitle}>
      <Typography gutterBottom variant="h6">Your Items</Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleAddItem}
        >
          Add Item
        </Button>
        </div>
        <div className={classes.container}>
          {list}
          <AlertDialog
            openDialog={openDialog}
            handleDelete={handleDelete}
            toggleDialog={handleOpenDialogToggle}
          />
        </div>
      </>
  }

  return <div className={classes.content}>{content}</div>;
}
