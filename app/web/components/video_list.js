import React from 'react';
import VideoListItemContainer from '../../containers/VideoListItemContainer';
import VideoListItem from './video_list_item';

const VideoList = ({ videos }) => {
  if (!videos) {
    return <div>No videos available</div>;
  }

  const items = videos.map((video) => {
    const EnhancedVideoItem = VideoListItemContainer(VideoListItem);
    return <EnhancedVideoItem key={video.etag} video={video} />;
  });
  return <ul className="col-md-4 list-group">{items}</ul>;
};

export default VideoList;
