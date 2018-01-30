import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Root from './RootNavigator';
// import { Provider } from 'react-redux';

// import App from './app/native/App';
// import configureStore from './app/store/configureStore';
// import getEnhancedVideoPanel from './app/containers/VideoPanelContainer';

// const store = configureStore();

// const Root = () => {
//   const EnhancedVideoPanel = getEnhancedVideoPanel(App);
//   return (
//     <Provider store={store}>
//       <EnhancedVideoPanel />
//     </Provider>
//   );
// };

AppRegistry.registerComponent('UnicornReact', () => Root);
