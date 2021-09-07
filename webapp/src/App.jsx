import React, { Component } from 'react';
import {
  Grid
} from '@material-ui/core';
import Header from './components/Header';
import FormDrawer from './components/FormDrawer'
import Content from './components/Content'

class App extends Component {
  render() {
  return (
    <Grid container direction="column">
      <Header />
      <FormDrawer />
      <Content />
    </Grid>
  );
  }
}

export default App;
