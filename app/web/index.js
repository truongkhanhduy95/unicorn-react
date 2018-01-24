import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import App from './containers/App';
import configureStore from '../store/configureStore';

// load our css
// require('./styles/style.less');
const store = configureStore();
const rootElement = document.getElementById('root');

render(<App store={store} />, rootElement);
