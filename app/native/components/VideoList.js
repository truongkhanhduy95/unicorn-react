import React, { Component } from 'react';
import { FlatList } from 'react-native';

import VideoItem from './VideoItem/VideoItem';
import getEnhancedVideoListItem from '../../containers/VideoListItemContainer';

export default class VideoList extends Component {
  render() {
    const EnhancedVideoListItem = getEnhancedVideoListItem(VideoItem);
    return (
      <FlatList
        data={this.props.videos}
        renderItem={({ item }) => <EnhancedVideoListItem value={item} />}
        keyExtractor={(item, index) => index}
      />
    );
  }
}
