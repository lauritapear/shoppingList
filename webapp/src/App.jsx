import React, { Component } from 'react';
import {
  Grid
} from '@material-ui/core';
import Header from './components/Header';
import FormDrawer from './components/FormDrawer'
import Content from './components/Content'
import ShoppingListItem from './components/ShoppingListItem'
import AlertDialog from './components/AlertDialog'
class App extends Component {
  render() {
  return (
    <Grid container direction="column">
      <Header />
      <FormDrawer />
      <Content />
      <ShoppingListItem
          // key={item.id}
          // item={item}
          // toggleItemChecked={toggleItemChecked(item.id)}
          // openItemEditDialog={openItemEditDialog(item)}
        />
        <AlertDialog />
    </Grid>
  );
  }
}

export default App;
