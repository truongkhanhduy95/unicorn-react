import React, { Component } from 'react';
import { FlatList } from 'react-native';
import VideoItemContainer from '../containers/VideoItemContainer';

export default class VideoList extends Component {
  renderItem(item) {
    return <VideoItemContainer value={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.videos}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={(item, index) => index}
      />
    );
  }
}
