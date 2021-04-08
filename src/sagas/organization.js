import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import localStorageService from 'libs/localStorageService';

import { AUTH_KEY } from 'constant';
import {
  RETRIEVE_ORGANIZATION_REQUEST,
  RETRIEVE_ORGANIZATION_SUCCESS,
  RETRIEVE_ORGANIZATION_FAILURE,
  CHANGE_CATEGORY_REQUEST,
  CHANGE_CATEGORY_SUCCESS,
  CHANGE_CATEGORY_FAILURE,
} from '../reducers/organization';

// 카테고리 변경하기
function changeCategoryApi(data) {
  console.log(data.subDomain, data.category);
  return axios.patch(
    `${AUTH_KEY.adminUrl}/admin/v1/organizaiton/category/approved/${data.subDomain}`,
    data.category,
    {
      headers: {
        Authorization: `Bearer ${localStorageService.get('authToken')}`,
        'Content-Type': 'application/json',
      },
    }
  );
}

function* changeCategory(action) {
  try {
    const result = yield call(changeCategoryApi, action.data);
    console.log(result);
    yield put({
      type: CHANGE_CATEGORY_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: CHANGE_CATEGORY_FAILURE,
      error: err.data,
    });
  }
}

// 조직들 조회
function retrieveOrganizationApi() {
  return axios.get(`${AUTH_KEY.apiUrl}/api/v1/organization/list`, {
    headers: {
      Authorization: `Bearer ${localStorageService.get('authToken')}`,
      'Content-Type': 'application/json',
    },
  });
}

function* retrieveOrganization() {
  try {
    const result = yield call(retrieveOrganizationApi);
    yield put({
      type: RETRIEVE_ORGANIZATION_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: RETRIEVE_ORGANIZATION_FAILURE,
      error: err.data,
    });
  }
}

function* watchChangeCategory() {
  yield takeLatest(CHANGE_CATEGORY_REQUEST, changeCategory);
}

function* watchRetrieveOrganization() {
  yield takeLatest(RETRIEVE_ORGANIZATION_REQUEST, retrieveOrganization);
}

function* organizationSaga() {
  yield all([fork(watchRetrieveOrganization), fork(watchChangeCategory)]);
}

export default organizationSaga;
