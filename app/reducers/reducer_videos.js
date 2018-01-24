import { UPDATE_VIDEOS } from '../constants/Constants';

export default function (state = null, action) {
  console.log(`videos reducer state >>> ${state} >>> ${action}`);
  switch (action.type) {
    case UPDATE_VIDEOS:
      return action.payload;
  }
  // return [{ etag: 'Javascript' }, { etag: 'React Native' }, { etag: 'Reactjs' }];
  return state;
}
