import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'native-base';
import CheckBox from 'react-native-check-box';
import SplashScreen from 'react-native-smart-splash-screen';

import styles from './styles';
import globalStyles from '../styles';
import * as colors from '../../../public/colors';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: 'thuan.nguyen@unicorn.vn',
      password: '123456789',
    };
  }

  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  onLoginButtonPress() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Drawer' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  onPress() {
    this.props.onLoginButtonPress(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.coverPhoto}
          source={require('../../../public/images/img_login_bg.png')}
        />
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Buy. Sell. Earn</Text>
            <Text style={styles.subtitle}>Wecome back!!!</Text>
          </View>
          <View style={styles.inputForm}>
            <TextField
              label="Username"
              value={this.state.username}
              onChangeText={phone => console.log(phone)}
              tintColor={colors.TINT}
              onChangeText={phone => this.setState({ username: phone.toString() })}
            />
            <TextField
              label="Password"
              value={this.state.password}
              onChangeText={phone => console.log(phone)}
              tintColor={colors.TINT}
              secureTextEntry
              onChangeText={phone => this.setState({ password: phone.toString() })}
            />
            <View style={styles.subContainer}>
              <CheckBox
                style={{ flex: 1 }}
                onClick={() => console.log('123')}
                isChecked={false}
                rightText="Keep me logged in"
                checkBoxColor={colors.TINT}
              />
              <TouchableOpacity>
                <Text>Forgot password xx</Text>
              </TouchableOpacity>
            </View>
            <Button
              style={[styles.loginButton]}
              rounded
              onPress={this.onPress.bind(this)}
            >
              <Text style={globalStyles.filledButtonText}>{'Login 12'.toUpperCase()}</Text>
            </Button>
          </View>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../../public/images/logo_gcm1.png')} />
          </View>
        </View>
      </View>
    );
  }
}
