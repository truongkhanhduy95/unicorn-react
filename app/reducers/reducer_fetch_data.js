import { FETCHING_DATA } from '../constants/Constants';

export default function (state = false, action) {
  console.log(`action type >>> ${action.type}`);
  switch (action.type) {
    case FETCHING_DATA:
      return action.payload;
    default:
      return state;
  }
}
