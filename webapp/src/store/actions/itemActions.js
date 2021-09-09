import * as actionTypes from "./actionTypes";

export function toggleOpenDrawer() {
  return { type: actionTypes.TOGGLE_OPEN_DRAWER };
}

export function updateFormType(formType) {
  return { type: actionTypes.UPDATE_FORM_TYPE, formType };
}

export function updateItemID(itemID) {
  return { type: actionTypes.UPDATE_ITEM_ID, itemID };
}

export function createItem(name, description) {
  return {
    type: actionTypes.CREATE_ITEM,
    name: name,
    description: description,
    done: false
  };
}

export function updateItem(name, description, done, itemID) {
  return {
    type: actionTypes.UPDATE_ITEM,
    name: name,
    description: description,
    itemID: itemID,
    done:done
  };
}

export function deleteItem(itemID) {
  return {
    type: actionTypes.DELETE_ITEM,
    itemID: itemID,
  };
}

export function setItemsData(itemsData) {
  return { type: actionTypes.SET_ITEMS, itemsData };
}

export function getItems(pageNumber, pageSize) {
  return {
    type: actionTypes.GET_ITEMS,
    pageNumber: pageNumber,
    pageSize: pageSize,
  };
}

export function actionStart() {
  return { type: actionTypes.ACTION_START };
}

export function actionFailed(error) {
  return { type: actionTypes.ACTION_FAIL, error };
}
