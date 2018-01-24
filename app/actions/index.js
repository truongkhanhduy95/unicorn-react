// import {
//   TOGGLE_COLOR,
//   EXAMPLE_REQUEST_START,
//   EXAMPLE_REQUEST_DATA,
// } from '../constants/Constants';
// import {
//   exampleRequest,
// } from '../requester';

// /** Toggle the hello world color */
// export function toggleColor() {
//   return { type: TOGGLE_COLOR };
// }

// /** An example async action using the request module */
// export function exampleAsync() {
//   return dispatch => {
//     dispatch({ type: EXAMPLE_REQUEST_START });
//     exampleRequest().then(data => {
//       dispatch({ type: EXAMPLE_REQUEST_DATA, data: data });
//     });
//   };
// }

import { UPDATE_VIDEOS, SELECT_VIDEO } from '../constants/Constants';

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
