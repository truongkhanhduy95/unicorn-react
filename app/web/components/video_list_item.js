import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../../actions/index';
import { connect } from 'react-redux';

class VideoListItem extends Component {
  render() {
    const { video } = this.props;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li className="list-group-item" onClick={() => this.props.onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img alt={imageUrl} className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onVideoSelect: selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListItem);
