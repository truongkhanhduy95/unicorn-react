import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'native-base';
import CheckBox from 'react-native-check-box';
import SplashScreen from 'react-native-smart-splash-screen';

import styles from './styles';
import globalStyles from '../../styles/styles';
import * as colors from '../../../public/colors';
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: 'thuan.nguyen@unicorn.vn',
      password: '123456789',
      clickCount: 0,
      checked: false,
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

  onTouch(){
    this.setState(oldState =>
    {
       return {
        username: 'clicked ' + ++oldState.clickCount,
        clickCount : oldState.clickCount++,
      };
    })
  }

  onKeep(){
    this.setState(previousState=>{
      return {
        checked : !previousState.checked
      }
    })
  }

  render() {
    let textTitle = 'Buy. Sell. Earn'
    let textWelcome = 'Welcome back!!!'
    return (
      <View style={styles.container}>
        <Image
          style={styles.coverPhoto}
          source={require('../../../public/images/img_login_bg.png')}/>
        <View style={styles.contentContainer}>
          <KeyboardAvoidingView style={{alignItems:'center',justifyContent:'center',flex: 2,backgroundColor:'transparent',}} behavior='position'>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{textTitle}</Text>
              <Text style={styles.subtitle}>{textWelcome}</Text>
            </View>
            <View style={styles.inputForm}>
              <TextField
                label="Username"
                value={this.state.username}
                onChangeText={phone => console.log(phone)}
                tintColor={colors.TINT}
                onChangeText={phone => this.setState({ username: phone.toString() })}/>
              <TextField
                label="Password"
                value={!this.state.checked?'uncheck':'checked'}
                onChangeText={phone => console.log(phone)}
                tintColor={colors.TINT}
                onChangeText={phone => this.setState({ password: phone.toString() })}/>
              <View style={[styles.subContainer,{backgroundColor:'transparent'}]}>
                <CheckBox
                  style={{ flex: 1 }}
                  onClick={this.onKeep.bind(this)}
                  isChecked={false} 
                  rightText="Keep me logged in"
                  checkBoxColor={colors.TINT}
                />
                <TouchableOpacity
                  onPress={this.onTouch.bind(this)}>
                  <Text>Forgot password</Text>
                </TouchableOpacity>
              </View>
              <Button
                style={[styles.loginButton, globalStyles.filledButton]}
                rounded
                onPress={this.onPress.bind(this)}>
                <Text style={globalStyles.filledButtonText}>{'Login'.toUpperCase()}</Text>
              </Button>
            </View>
            
          </KeyboardAvoidingView>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../../public/images/logo_gcm.png')} />
          </View>
        </View>
        <Spinner
          visible={this.props.isBusy}
          textContent="Loading..."
          textStyle={{ color: '#000' }}/>
      </View>
    );
  }
}
