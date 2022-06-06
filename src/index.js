import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import todoReducer from './state/reducers/todoReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);