import App from './App';
import { StackNavigator } from 'react-navigation';

export default RootNavigator = StackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            title: 'App'
        }
    }
});
