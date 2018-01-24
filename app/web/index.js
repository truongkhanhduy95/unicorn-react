import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import Root from './containers/Root';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

// load our css
require('./styles/style.less');

const store = configureStore();
const rootElement = document.getElementById('root');

const App = props => (
  <Provider store={props.store}>
    <Root />
  </Provider>
);

render(<App store={store} />, rootElement);
