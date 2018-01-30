import { UPDATE_VIDEOS, SELECT_VIDEO, FETCH_VIDEOS, LOGIN } from '../constants/Constants';

export function fetchVideos(term) {
  return {
    type: FETCH_VIDEOS,
    payload: term,
  };
}

export function updateVideos(videos) {
  console.log(`>>> videos: ${videos}`);
  return {
    type: UPDATE_VIDEOS,
    payload: videos,
  };
}

export function selectVideo(video) {
  console.log(`selected video: ${video}`);
  return {
    type: SELECT_VIDEO,
    payload: video,
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
}
