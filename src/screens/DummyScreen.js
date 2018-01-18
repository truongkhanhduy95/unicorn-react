import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import tabStyles from './styles';

export default class DummyScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Dummy',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../public/images/ic_knowledge.png')}
        style={[
          tabStyles.icon,
          {
            tintColor,
          },
        ]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>Dummy</Text>
      </View>
    );
  }
}
