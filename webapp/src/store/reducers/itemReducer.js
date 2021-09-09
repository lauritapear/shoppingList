import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils/utils";

const initialState = {
  loading: false,
  error: false,
  openDrawer: false,
  formType: '',
  itemID: null,
  itemsData: [],
};

function actionStart(state) {
  return updateObject(state, { loading: true });
}

function actionFailed(state, error) {
  return updateObject(state, {
    loading: false,
    error: true,
  });
}

function handleToggleDrawer(state) {
  return updateObject(state, { openDrawer: !state.openDrawer });
}

function handleFormTypeUpdate(state, formAction){
  return updateObject(state, { formType: formAction });
}

function handleItemIdUpdate(state, id){
  return updateObject(state, { itemID: id });
}

function setItems(state, itemsData) {
  console.log(itemsData);
  let sortedData = itemsData;
  let newData = [];
  sortedData.forEach((element) => {
    newData.push({
      id: element._id,
      name: element.name,
      description: element.description,
    });
  });
  return updateObject(state, {
    itemsData: newData,
    loading: false,
  });
}

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ACTION_FAIL:
      return actionFailed(state, action.error);
    case actionTypes.ACTION_START:
      return actionStart(state);
    case actionTypes.SET_ITEMS:
      return setItems(state, action.itemsData);
    case actionTypes.TOGGLE_OPEN_DRAWER:
      return handleToggleDrawer(state);
    case actionTypes.UPDATE_FORM_TYPE:
      return handleFormTypeUpdate(state, action.formType);
    case actionTypes.UPDATE_ITEM_ID:
      return handleItemIdUpdate(state, action.itemID);
    default:
      return state;
  }
}
