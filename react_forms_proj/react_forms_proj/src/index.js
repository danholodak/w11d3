import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

function Root(){
  <BrowserRouter>
  <App/>
  </BrowserRouter>
}

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);
