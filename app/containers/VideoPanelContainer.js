import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YoutubeService from '../services/YoutubeService';
import { fetchVideos } from '../actions/index';

const videoPanel = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null,
      };

      this.props.fetchVideos('');
    }

    render() {
      return (
        <WrappedComponent {...this.props} searchVideo={term => this.props.fetchVideos(term)} />
      );
    }
  };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}

export default WrapperComponent => connect(null, mapDispatchToProps)(videoPanel(WrapperComponent));
