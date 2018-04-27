import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './app/store/configureStore';
import RootNavigator from './RootNavigator';
import LearnRedux from './app/native/components/LearnRedux'

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <LearnRedux />
  </Provider>
);

AppRegistry.registerComponent('UnicornReact', () => Root);
