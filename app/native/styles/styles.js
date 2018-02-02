import { StyleSheet } from 'react-native';
import { TINT } from '../../../public/colors';

export default StyleSheet.create({
  reactNativeWeb: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
  filledButton: {
    backgroundColor: TINT,
  },
  filledButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
