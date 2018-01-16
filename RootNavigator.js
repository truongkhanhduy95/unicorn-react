import App from './App';
import { StackNavigator } from 'react-navigation';
import MainScreen from './app/screens/MainScreen';

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
    }
});
