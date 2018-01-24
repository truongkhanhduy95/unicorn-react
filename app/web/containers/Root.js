import React, { Component } from 'react';
import { createStore } from 'redux';
import VideoList from '../components/video_list';
import SearchBar from '../components/search_bar';
import VideoDetail from '../components/video_detail';
import YoutubeService from '../../services/YoutubeService';
import { bindActionCreators } from 'redux';
import { updateVideos } from '../../actions/index';
import { connect } from 'react-redux';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.searchVideo();
  }

  searchVideo(term) {
    const service = new YoutubeService();
    service.search(term, (data) => {
      this.props.updateData(data);
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.searchVideo(term)} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateData: updateVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
