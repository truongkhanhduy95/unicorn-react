import React, { Component } from 'react';

export default class VideoList extends Component {
  renderList() {
    return this.props.videos.map(video => (
      <li key={video.title} className="list-group-item">
        {video.title}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}
