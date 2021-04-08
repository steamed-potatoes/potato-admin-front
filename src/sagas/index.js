import { all, fork } from 'redux-saga/effects';
import boardSaga from './board';
import orgnaizationSaga from './organization';

export default function* rootSaga() {
  yield all([fork(boardSaga), fork(orgnaizationSaga)]);
}
