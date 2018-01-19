import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import tabStyles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option
    // below.
    tabBarIcon: tintColor => <Icon name="home" size={26} color="#900" />,
  };

  render() {
    return <Button onPress={() => this.props.navigation.navigate('Dummy')} title="Go to Dummy" />;
  }
}
