import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ActiveVideo extends Component {
  render() {
    let title = '';
    if (this.props.video) {
      title = this.props.video.snippet.title;
    }
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>{title}</Text>
      </View>
    );
  }
}
