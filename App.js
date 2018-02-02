/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import SplashScreen from 'react-native-smart-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import GetStartedScreen from './src/screens/GetStartedScreen';
import LoginScreen from './app/native/components/Login/LoginScreen';
import getLoginScreenWrapper from './app/containers/LoginContainer';

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev m' + 'enu',
});

const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Login with Facebook</Text>
  </Icon.Button>
);

export default class App extends Component {
  static navigationOptions = {
    header: null,
    title: '',
  };

  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  onButtonPress() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Drawer' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const LoginScreenWrapper = getLoginScreenWrapper(LoginScreen);
    return (
      // <GetStartedScreen navigation={this.props.navigation} />
      <LoginScreenWrapper />
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      //   <Button
      //     onPress={this.onButtonPress.bind(this)}
      //     title="Learn More"
      //     color="#841584"
      //     accessibilityLabel="Learn more about this purple button"
      //   />
      //   {myButton}
      //   {myIcon}
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
