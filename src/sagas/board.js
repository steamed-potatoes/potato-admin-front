import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import localStorageService from 'libs/localStorageService';

import { AUTH_KEY } from 'constant';
import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
} from '../reducers/board';

function createBoardApi(data) {
  return axios.post(`${AUTH_KEY.adminUrl}/admin/v1/board`, data, {
    headers: {
      Authorization: `Bearer ${localStorageService.get('authToken')}`,
      'Content-Type': 'application/json',
    },
  });
}

function* createBoard(action) {
  try {
    const result = yield call(createBoardApi, action.data);
    yield put({
      type: CREATE_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CREATE_BOARD_FAILURE,
      error: err.data,
    });
  }
}

function* watchcreateBoard() {
  yield takeLatest(CREATE_BOARD_REQUEST, createBoard);
}

function* boardSaga() {
  yield all([fork(watchcreateBoard)]);
}

export default boardSaga;
