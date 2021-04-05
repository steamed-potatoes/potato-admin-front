import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import localStorageService from 'libs/localStorageService';

import { AUTH_KEY } from 'constant';
import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
  RETRIEVE_BOARD_REQUEST,
  RETRIEVE_BOARD_SUCCESS,
  RETRIEVE_BOARD_FAILURE,
} from '../reducers/board';

// 게시글 조회
function retrieveBoardApi(data) {
  const { startDate, endDate } = data;
  return axios.get(
    `${AUTH_KEY.apiUrl}/api/v1/schedule?startDate=${startDate}&endDate=${endDate}`
  );
}

function* retrieveBoard(action) {
  try {
    const result = yield call(retrieveBoardApi, action.data);
    yield put({
      type: RETRIEVE_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: RETRIEVE_BOARD_FAILURE,
      error: err.data,
    });
  }
}

// 게시글 생성
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

function* watchRetrieveBoard() {
  yield takeLatest(RETRIEVE_BOARD_REQUEST, retrieveBoard);
}

function* watchcreateBoard() {
  yield takeLatest(CREATE_BOARD_REQUEST, createBoard);
}

function* boardSaga() {
  yield all([fork(watchcreateBoard), fork(watchRetrieveBoard)]);
}

export default boardSaga;
