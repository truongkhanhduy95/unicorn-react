import { SELECT_VIDEO } from '../constants/Constants';

export default function (state = null, action) {
  console.log(`active video reducer state >>> ${state} >>> ${action.type}`);
  switch (action.type) {
    case SELECT_VIDEO:
      return action.payload;

    default:
      return state;
  }
}
