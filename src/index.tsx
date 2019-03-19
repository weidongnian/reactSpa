import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import { Router, Route, Link } from 'react-router'

//主页js

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);


registerServiceWorker();
