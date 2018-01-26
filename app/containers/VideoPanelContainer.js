import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YoutubeService from '../services/YoutubeService';
import { updateVideos, selectVideo } from '../actions/index';

const videoPanel = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null,
      };

      this.searchVideo('');
    }

    searchVideo(term) {
      const service = new YoutubeService();
      service.search(term, (data) => {
        this.props.updateData(data);
        // this.props.store.dispatch(selectVideo, data[0]);
      });
    }

    render() {
      // const newProps = {
      //   searchVideo: this.searchVideo,
      // };
      return <WrappedComponent {...this.props} searchVideo={term => this.searchVideo(term)} />;
    }
  };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateData: updateVideos }, dispatch);
}

export default WrapperComponent => connect(null, mapDispatchToProps)(videoPanel(WrapperComponent));
