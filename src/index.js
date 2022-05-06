import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

//import StateTutorial from '../src/UseState/StateTutorial'
//import ReducerTutorial from './UseReducer/ReducerTutorial';
//import EffectTutorial from './useEffect/EffectTutorial';
//import RefTutorial from './useRef/RefTutorial';
//import LayoutEffectTutorial from './useLayoutEffect/LayoutEffectTutorial';
//import ImperativeaHandle from './useImperativeHandle/ImperativeaHandle';
import ContextTutorial from './useContext/ContextTutorial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateTutorial/> */}
    {/* <ReducerTutorial/> */}
    {/* <EffectTutorial/> */}
    {/* <RefTutorial/> */}
    {/* <LayoutEffectTutorial /> */}
    {/* <ImperativeaHandle/> */}
    <ContextTutorial/>
  </React.StrictMode>
);



