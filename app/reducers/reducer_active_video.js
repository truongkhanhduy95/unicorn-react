import { SELECT_VIDEO } from '../constants/Constants';

export default function (state = null, action) {
  console.log(`videos reducer state >>> ${state} >>> ${action}`);
  switch (action.type) {
    case SELECT_VIDEO:
      return action.payload;
  }
  // return [{ etag: 'Javascript' }, { etag: 'React Native' }, { etag: 'Reactjs' }];
  return state;
}
