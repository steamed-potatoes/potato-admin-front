import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import localStorageService from 'libs/localStorageService';

import { AUTH_KEY } from 'constant';
import {
  RETRIEVE_ORGANIZATION_REQUEST,
  RETRIEVE_ORGANIZATION_SUCCESS,
  RETRIEVE_ORGANIZATION_FAILURE,
} from '../reducers/organization';

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
    console.log(result);
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

function* watchRetrieveOrganization() {
  yield takeLatest(RETRIEVE_ORGANIZATION_REQUEST, retrieveOrganization);
}

function* organizationSaga() {
  yield all([fork(watchRetrieveOrganization)]);
}

export default organizationSaga;
