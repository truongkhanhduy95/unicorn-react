import React, { Component } from 'react';
import { Provider } from 'react-redux';
import VideoList from './VideoListContainer';
import { createStore } from 'redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          Learning redux
          <VideoList />
        </div>
      </Provider>
    );
  }
}
