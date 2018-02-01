import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from '../constants/Constants';
import { delay } from 'redux-saga';
import login from '../services/LoginService';

function* executeLogin(action) {
  try {
    console.log('start logging in');
    const response = yield login(action.payload);
    console.log(response.data);
    yield put({ type: LOGIN_SUCCESS, data: response.data });
    action.payload.callback();
  } catch (error) {
    yield put({ type: LOGIN_FAILED, message: error.message, done: false });
  }
}

export default function* loginAsync() {
  yield takeLatest(LOGIN, executeLogin);
}
