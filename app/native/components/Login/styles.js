import { StyleSheet } from 'react-native';
import * as colors from '../../../public/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  coverPhoto: {
    flex: 0.5,
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'stretch',
    backgroundColor:'transparent',
    alignSelf:'stretch',
  },
  textContainer: {
    backgroundColor:'transparent',
    justifyContent: 'flex-end', 
    flex: 1,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 16,
    color: 'white',
  },
  inputForm: {
    flex:1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 6,
    padding: 16,
  },
  logoContainer: { 
    justifyContent: 'center',
    flex: 1,
    alignItems:'center',
    backgroundColor:'transparent',
   },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 16,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  logo: { flex: 0.5, resizeMode: 'contain' },
});

export default styles;
