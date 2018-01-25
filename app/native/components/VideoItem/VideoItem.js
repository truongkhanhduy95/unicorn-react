import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default class VideoItem extends Component {
  onPress() {
    this.props.onVideoSelect(this.props.value);
  }

  render() {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={this.onPress.bind(this)}>
        <Image
          source={{
            uri: this.props.value.snippet.thumbnails.default.url,
          }}
          style={styles.coverPhoto}
        />
        <Text style={styles.title}>{this.props.value.snippet.title}</Text>
      </TouchableOpacity>
    );
  }
}
