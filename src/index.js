import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

const element = <App />;
ReactDOM.render(element, container);
