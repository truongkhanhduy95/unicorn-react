/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import YoutubeService from '../../services/YoutubeService';
import { updateVideos } from '../../actions/index';
import VideoListContainer from './VideoListContainer';
import ActiveVideoContainer from './ActiveVideoContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.searchVideo();
  }

  searchVideo(term) {
    const service = new YoutubeService();
    service.search(term, (data) => {
      this.props.updateData(data);
    });
  }

  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  render() {
    return (
      <View>
        <ActiveVideoContainer />
        <VideoListContainer />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateData: updateVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
