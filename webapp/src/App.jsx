import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import Header from "./components/Header";
import FormDrawer from "./components/FormDrawer";
import Content from "./components/Content";
import ShoppingList from "./components/ShoppingList";
// import AlertDialog from "./components/AlertDialog";
class App extends Component {
  componentDidMount() {
    this.props.getItems(0,20);
  }
  componentShouldUpdate() {
    this.props.getItems(0,20);
  }
  render() {
    let contentItem = null;
  
    if(this.props.itemsData.length === 0 ) {
      contentItem = <Content onToggleOpen={this.props.toggleOpenDrawer} updateFormType={this.props.updateFormType}/>
      // contentItem = <Content {...this.props}/>
    }else{
    //   // contentItem = <ShoppingList items={this.props.itemsData} openEditForm={this.props.toggleOpenDrawer} formAction={this.props.formType} />
      contentItem = <ShoppingList {...this.props} />
    }
    return (
      <Grid container direction="column">
        <Header />
        <FormDrawer
          open={this.props.openDrawer}
          onToggleOpen={this.props.toggleOpenDrawer}
          formAction={this.props.formType}
          onAddItem={this.props.createItem}
          onUpdateItem={this.props.updateItem}
          itemID={this.props.itemID}
        />
        <div>{contentItem}</div>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.itemReducer.loading,
    error: state.itemReducer.error,
    itemsData: state.itemReducer.itemsData,
    openDrawer: state.itemReducer.openDrawer,
    formType: state.itemReducer.formType,
    itemID:state.itemReducer.itemID
  };
}

export default connect(mapStateToProps, actionCreators)(App);
