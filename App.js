/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import SplashScreen from 'react-native-smart-splash-screen';
import Realm from 'realm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev m' + 'enu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open({
      schema: [{ name: 'Dog', properties: { name: 'string' } }],
    }).then((realm) => {
      realm.write(() => {
        realm.deleteAll();
      });
      realm.write(() => {
        realm.create('Dog', { name: 'Rex' });
        realm.create('Dog', { name: 'Max' });
      });
      this.setState({ realm });
    });
  }

  componentDidMount() {
    // SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
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
    const info = this.state.realm
      ? `Number of dogs in this Realm: ${this.state.realm.objects('Dog').length}`
      : 'Loading...';
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          onPress={this.onButtonPress.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{info}</Text>
      </View>
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
