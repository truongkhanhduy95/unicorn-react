import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLoginButtonPress() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Drawer' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <Image
          style={styles.coverPhoto}
          source={require('../../../public/images/img_login_bg.png')}
        />
        <View
          style={{
            // width: 200,
            // height: 200,
            backgroundColor: 'transparent',
            opacity: 1,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // alignContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              bottom: 42,
            }}
          >
            Buy. Sell. Earn
          </Text>
          <Text
            style={{
              fontSize: 20,
              bottom: 30,
            }}
          >
            Wecome back!!!
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              flex: 0.5,
              marginHorizontal: 20,
              alignSelf: 'stretch',
              borderRadius: 6,
              padding: 24,
            }}
          >
            {/* <Text style={styles.labelStyle}>Username</Text>
            <TextInput
              style={styles.textboxStyle}
              onChangeText={text => this.setState({ username: text })}
              value={this.state.username}
              placeholder="Enter username"
            />
            <Text style={[styles.labelStyle, { top: 12 }]}>Password</Text>
            <TextInput
              style={[styles.textboxStyle, { top: 24 }]}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
              placeholder="Password"
              secureTextEntry
            />
            <Button
              title="Login"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            /> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    bottom: 8,
  },
  textboxStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
