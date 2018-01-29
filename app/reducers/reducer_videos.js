import { UPDATE_VIDEOS } from '../constants/Constants';

export default function (state = [], action) {
  console.log(`videos reducer state >>> ${state} >>> ${action.type}`);
  switch (action.type) {
    case UPDATE_VIDEOS:
      return action.payload;
    default:
      return state;
  }
}
