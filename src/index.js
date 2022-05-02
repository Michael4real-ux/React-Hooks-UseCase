import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import StateTutorial from '../src/UseState/StateTutorial'
//import ReducerTutorial from './UseReducer/ReducerTutorial';
//import EffectTutorial from './useEffect/EffectTutorial';
import RefTutorial from './useRef/RefTutorial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateTutorial/> */}
    {/* <ReducerTutorial/> */}
    {/* <EffectTutorial/> */}
    <RefTutorial/>
  </React.StrictMode>
);


reportWebVitals();
