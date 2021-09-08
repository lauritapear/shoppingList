import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import ItemForm from "./ItemForm";
const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: "auto",
  },
});

export default function FormDrawer(props) {
  const classes = useStyles();
  // const [drawerOpen, setDrawerOpen] = React.useState(props.open);

  const handleDrawerClose = () => {
    // setDrawerOpen(false);
    props.onToggleOpen();
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    ></div>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
      >
        {list("right")}
        <ItemForm formAction={props.formAction} onCancel={props.onToggleOpen}/>
      </Drawer>
    </div>
  );
}
