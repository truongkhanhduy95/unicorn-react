import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/native/containers/App';
import configureStore from './app/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('UnicornReact', () => Root);
