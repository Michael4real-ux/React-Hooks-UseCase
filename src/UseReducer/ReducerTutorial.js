import React, { useReducer } from "react";

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toogleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
        dispatch({type:"INCREMENT"})
        dispatch({type:'toogleShowText'})
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
