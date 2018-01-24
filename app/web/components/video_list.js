import React from 'react';
import VideoListItem from './video_list_item';
import { connect } from 'react-redux';

const VideoList = ({ videos, onVideoSelect }) => {
  if (!videos) {
    return <div>No videos available</div>;
  }

  const items = videos.map(video => (
    <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
  ));
  return <ul className="col-md-4 list-group">{items}</ul>;
};

function mapStateToProps(state) {
  return {
    videos: state.videos,
  };
}

export default connect(mapStateToProps)(VideoList);
