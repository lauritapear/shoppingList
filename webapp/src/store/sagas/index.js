import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {
  getItemsSaga,
  createItemSaga,
  updateItemSaga,
  deleteItemSaga,
} from "./itemSaga";

export function* watchGetItems() {
  yield takeEvery(actionTypes.GET_ITEMS, getItemsSaga);
}

export function* watchCreateItem() {
  yield takeEvery(actionTypes.CREATE_ITEM, createItemSaga);
}

export function* watchUpdateItem() {
  yield takeEvery(actionTypes.UPDATE_ITEM, updateItemSaga);
}

export function* watchDeleteItem() {
  yield takeEvery(actionTypes.DELETE_ITEM, deleteItemSaga);
}
