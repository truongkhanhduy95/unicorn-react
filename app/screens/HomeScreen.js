import React, { Component } from 'react';
import {View, Text, Button, Image} from 'react-native';
import tabStyles from './styles';

export default class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option
    // below.
    tabBarIcon: ({tintColor}) => (
        <Image
            source={require('../../public/images/ic_home.png')}
            style={[
              tabStyles.icon, {
                    tintColor: tintColor
                }
            ]}/>
    )
};

render() {
    return (
        <Button
            onPress={() => this.props.navigation.navigate('Dummy')}
            title="Go to Dummy"/>
    );
}
};

