import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import StateTutorial from '../src/UseState/StateTutorial'
import ReducerTutorial from './UseReducer/ReducerTutorial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateTutorial/> */}
    <ReducerTutorial/>
  </React.StrictMode>
);


reportWebVitals();
