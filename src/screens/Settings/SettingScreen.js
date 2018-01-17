import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

export default class SettingScreen extends Component {
  onSignOutButtonPress() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={this.onSignOutButtonPress.bind(this)}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            source={{
              uri: 'http://www.whatnetworth.com/wp-content/uploads/2017/08/jessica-henwick.jpg',
            }}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.name}>Jessica Henwick</Text>
            <Text>Agent</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
