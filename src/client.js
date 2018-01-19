'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/IndexPage';

window.onload = () => {
  ReactDOM.render(<IndexPage />, document.getElementById('main'));
};
