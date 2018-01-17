import App from './App';
import { StackNavigator } from 'react-navigation';
import MainScreen from './app/screens/MainScreen';
import LoginScreen from './app/screens/Login/LoginScreen';

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
    }
});
