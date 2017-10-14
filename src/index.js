import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={ Store }/>, document.getElementById('root'));
registerServiceWorker();
