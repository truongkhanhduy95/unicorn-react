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

import YoutubeService from '../services/YoutubeService';
import { updateVideos } from '../actions/index';
import VideoList from './components/VideoList';
import ActiveVideo from './components/ActiveVideo/ActiveVideo';
import getEnhancedVideoList from '../containers/VideoListContainer';
import getEnhancedActiveVideo from '../containers/VideoDetailContainer';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  render() {
    const EnhancedVideoList = getEnhancedVideoList(VideoList);
    const EnhancedActiveVideo = getEnhancedActiveVideo(ActiveVideo);
    return (
      <View>
        <EnhancedActiveVideo />
        <EnhancedVideoList />
      </View>
    );
  }
}
