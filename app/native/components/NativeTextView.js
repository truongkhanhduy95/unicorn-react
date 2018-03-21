import PropTypes from 'prop-types';
import { requireNativeComponent, ViewPropTypes } from 'react-native';

const iNativeTextView = {
  name: 'NativeTextView',
  propTypes: {
    text: PropTypes.string,
    ...ViewPropTypes,
  },
};

export default requireNativeComponent('NativeTextView', iNativeTextView);
