import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './constants/data';

$(function() {
  ReactDOM.render(
    <App data={data} />,
    document.getElementById('app')
  );
});
