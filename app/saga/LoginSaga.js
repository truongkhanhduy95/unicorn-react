import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, FETCHING_DATA } from '../constants/Constants';
import { delay } from 'redux-saga';
import login from '../services/LoginService';

function* executeLogin(action) {
  try {
    yield put({ type: FETCHING_DATA, payload: true });
    console.log('start logging in');
    yield delay(5000);
    const response = yield login(action.payload);
    console.log(response.data);
    yield put({ type: LOGIN_SUCCESS, data: response.data });
    yield put({ type: FETCHING_DATA, payload: false });
    action.payload.callback();
  } catch (error) {
    yield put({ type: LOGIN_FAILED, message: error.message, done: false });
    yield put({ type: FETCHING_DATA, payload: false });
  }
}

export default function* loginAsync() {
  yield takeLatest(LOGIN, executeLogin);
}
