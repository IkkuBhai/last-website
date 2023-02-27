import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sec from './Sec';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
    <Sec />
    <Third />
    <Fourth />
    <Fifth />
  </React.StrictMode>
);

