import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DummyScreen from './DummyScreen';
import tabStyles from './styles';
import MainScreen from './MainScreen';
import MenuScreen from './Menu/MenuScreen';
import { DrawerItems, SafeAreaView } from 'react-navigation';

class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../public/images/ic_home.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../public/images/ic_home.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    return <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />;
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
  },
});

export default (DrawerScreen = DrawerNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },
  {
    contentComponent: MenuScreen,
  },
));

// const CustomDrawerContentComponent = props => (
//   <ScrollView>
//     <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//       {/* <DrawerItems {...props} /> */}
//       <MenuScreen />
//     </SafeAreaView>
//   </ScrollView>
// );
