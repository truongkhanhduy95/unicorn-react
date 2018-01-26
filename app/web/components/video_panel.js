import React, { Component } from 'react';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import SearchBar from './search_bar';

import VideoListContainer from '../../containers/VideoListContainer';
import VideoDetailContainer from '../../containers/VideoDetailContainer';
import SearchBarContainer from '../../containers/SearchBarContainer';

const VideoPanel = ({ searchVideo }) => {
  const EnhancedSearchBar = SearchBarContainer(SearchBar);
  const VideoListWrapper = VideoListContainer(VideoList);
  const VideoDetailWrapper = VideoDetailContainer(VideoDetail);

  return (
    <div>
      <h3>React demo</h3>
      <EnhancedSearchBar onSearchTermChange={term => searchVideo(term)} />
      <VideoDetailWrapper />
      <VideoListWrapper />
    </div>
  );
};

export default VideoPanel;
