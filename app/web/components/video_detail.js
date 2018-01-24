import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.snippet.title} src={url} className="embed-responsive-item" />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    video: state.activeVideo,
  };
}

export default connect(mapStateToProps)(VideoDetail);
