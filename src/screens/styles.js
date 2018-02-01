import { StyleSheet } from 'react-native';
import { TINT } from '../../public/colors';

const tabStyles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  filledButton: {
    backgroundColor: TINT,
  },
  filledButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default tabStyles;
