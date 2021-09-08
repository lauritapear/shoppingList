import * as actionTypes from "./actionTypes";

export function toggleOpenDrawer() {
  return { type: actionTypes.TOGGLE_OPEN_DRAWER };
}

export function setFormAction(formAction) {
    return { type: actionTypes.SET_FORM_ACTION , formAction: formAction};
  }

export function createItem(name, description) {
  return {
    type: actionTypes.CREATE_ITEM,
    name: name,
    description: description
  };
}

export function updateItem(name, description) {
  return {
    type: actionTypes.UPDATE_ITEM,
    name: name,
    description: description
  };
}



export function deleteItem(itemID) {
  return {
    type: actionTypes.DELETE_ITEM,
    itemID: itemID,
  };
}

  
  export function setItemsData(itemsData) {
    return {type: actionTypes.SET_ITEMS, itemsData};
  }

  export function getItems(pageNumber, pageSize) {
    return {
      type: actionTypes.GET_ITEMS,
      pageNumber: pageNumber,
      pageSize: pageSize
    };
  }

  export function actionStart() {
    return { type: actionTypes.ACTION_START };
  }
  
  export function actionFailed(error) {
    return { type: actionTypes.ACTION_FAIL, error };
  }