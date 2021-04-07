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
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
  REMOVE_BOARD_REQUEST,
  REMOVE_BOARD_SUCCESS,
  REMOVE_BOARD_FAILURE,
} from '../reducers/board';

// 게시글 삭제
function removeBoardApi(data) {
  return axios.delete(`${AUTH_KEY.adminUrl}/admin/v1/board/${data.id}`, {
    headers: {
      Authorization: `Bearer ${localStorageService.get('authToken')}`,
      'Content-Type': 'application/json',
    },
  });
}

function* removeBoard(action) {
  try {
    const result = yield call(removeBoardApi, action.data);
    yield put({
      type: REMOVE_BOARD_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_BOARD_FAILURE,
      error: err.data,
    });
  }
}

// 게시글 수정
function updateBoardApi(data) {
  return axios.put(`${AUTH_KEY.adminUrl}/admin/v1/board`, data, {
    headers: {
      Authorization: `Bearer ${localStorageService.get('authToken')}`,
      'Content-Type': 'application/json',
    },
  });
}

function* updateBoard(action) {
  try {
    const result = yield call(updateBoardApi, action.data);
    yield put({
      type: UPDATE_BOARD_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_BOARD_FAILURE,
      error: err.data,
    });
  }
}

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
      data: result.data.data.adminBoards,
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

function* watchRemoveBoard() {
  yield takeLatest(REMOVE_BOARD_REQUEST, removeBoard);
}

function* watchUpdateBoard() {
  yield takeLatest(UPDATE_BOARD_REQUEST, updateBoard);
}

function* watchRetrieveBoard() {
  yield takeLatest(RETRIEVE_BOARD_REQUEST, retrieveBoard);
}

function* watchcreateBoard() {
  yield takeLatest(CREATE_BOARD_REQUEST, createBoard);
}

function* boardSaga() {
  yield all([
    fork(watchcreateBoard),
    fork(watchRetrieveBoard),
    fork(watchUpdateBoard),
    fork(watchRemoveBoard),
  ]);
}

export default boardSaga;
