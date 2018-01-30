import { type } from 'os';
import { delay } from 'redux-saga';
import { call, put, takeEvery, all } from 'redux-saga/effects';

import TestService from '../services/YoutubeService';
import { UPDATE_VIDEOS, FETCH_VIDEOS_FAILED, FETCH_VIDEOS } from '../constants/Constants';
import loginAsync from './LoginSaga';

export function* fetchVideos(action) {
  try {
    console.log(`action type >>> ${action.type}`);
    // yield delay(3000);
    const service = new TestService();
    const response = yield service.fetchVideos(action.payload);
    console.log(`data >>> ${response}`);
    yield put({ type: UPDATE_VIDEOS, payload: response.data.items });
  } catch (error) {
    yield put({ type: FETCH_VIDEOS_FAILED, message: error.message });
  }
}

function* fetchVideosAsync() {
  yield takeEvery(FETCH_VIDEOS, fetchVideos);
}

function* rootSaga() {
  yield all([fetchVideosAsync(), loginAsync()]);
}

export default rootSaga;
