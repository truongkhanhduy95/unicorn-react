import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onLoginButtonPress() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Drawer' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.coverPhoto}
          source={require('../../../public/images/img_login_bg.png')}
        />
      </View>
    );
  }
}
