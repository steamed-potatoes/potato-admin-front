import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import boardSaga from './board';

axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(boardSaga)]);
}
