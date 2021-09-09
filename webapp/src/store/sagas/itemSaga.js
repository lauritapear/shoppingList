import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

export function* getItemsSaga(action) {
  yield put(actions.actionStart());
  const url = "http://localhost:4000/api/items";
  try {
    const response = yield axios.get(url, {
      params: {
        pageNumber: action.pageNumber,
        pageSize: action.pageSize,
      },
    });
    yield put(actions.setItemsData(response.data[0].paginatedResults));
  } catch (error) {
    yield put(actions.actionFailed(error));
  }
}

export function* createItemSaga(action) {
  yield put(actions.actionStart());
  const url = "http://localhost:4000/api/items";
  try {
    yield axios.post(url, {
      name: action.name,
      description: action.description,
      done: false,
    });
  } catch (error) {
    yield put(actions.actionFailed(error));
  }
}

export function* updateItemSaga(action) {
  yield put(actions.actionStart());
  const url = "http://localhost:4000/api/items/" + action.itemID;
  try {
    yield axios.patch(url, {
      name: action.name,
      description: action.description,
      done: action.done,
    });
    yield put(actions.getItems(0, 20));
  } catch (error) {
    yield put(actions.actionFailed(error));
  }
}

export function* deleteItemSaga(action) {
  yield put(actions.actionStart());
  const url = "http://localhost:4000/api/items/" + action.itemID;
  try {
    yield axios.delete(url, {});
    yield put(actions.getItems(0, 20));
  } catch (error) {
    yield put(actions.actionFailed(error));
  }
}
