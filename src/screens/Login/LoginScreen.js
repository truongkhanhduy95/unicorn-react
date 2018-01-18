import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

export default class LoginScreen extends Component {
  onLoginButtonPress() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text>Username</Text>
          <TextInput />
          <Text>Password</Text>
          <TextInput secureTextEntry />
          <Button
            style={styles.loginButton}
            title="Login"
            onPress={this.onLoginButtonPress.bind(this)}
          />
        </View>
      </View>
    );
  }
}
