import App from './App';
import { StackNavigator } from 'react-navigation';
import MainScreen from './app/screens/MainScreen';
import LoginScreen from './app/screens/Login/LoginScreen';
import SettingScreen from './app/screens/Settings/SettingScreen';

export default RootNavigator = StackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            title: 'App'
        }
    },
    Main: {
        screen: MainScreen,
        navigationOptions: {
            title: 'Main'
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            title: 'Setting'
        }
    }
});
