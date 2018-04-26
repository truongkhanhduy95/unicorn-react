import { 
  UPDATE_VIDEOS,
  SELECT_VIDEO,
  FETCH_VIDEOS,
  LOGIN,
  ADD_NEW_TASK,
  INCREASE } from '../constants/Constants';

export function increaseButtonClicked(number) {
  return {
    type: INCREASE,
    payload: number
  }
}

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

export function login(username, password, callback) {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
      callback,
    },
  };
}

export const addNewTask = (inputTaskName)=>
{
  
}
