import React, { Component } from 'react';
import VideoPanelContainer from '../../containers/VideoPanelContainer';
import VideoPanel from '../components/video_panel';

const Root = () => {
  const EnhancedVideoPanel = VideoPanelContainer(VideoPanel);

  return <EnhancedVideoPanel />;
};

export default Root;
