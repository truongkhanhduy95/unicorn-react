import App from './App';
import { StackNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import SettingScreen from './src/screens/Settings/SettingScreen';
import DrawerScreen from './src/screens/DrawerScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';

export default (RootNavigator = StackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: {
        title: '',
      },
    },
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Main',
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
      },
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        title: 'Setting',
      },
    },
    Drawer: {
      screen: DrawerScreen,
      navigationOptions: {
        title: 'Unicorn',
      },
    },
  },
  {
    initialRouteName: 'App',
  },
));
