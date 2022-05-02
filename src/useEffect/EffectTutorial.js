import axios from "axios";
import React, { useEffect, useState } from "react";

// sample 1
// const EffectTutorial = () => {
// // lets say I want to get the first email of the data
// const [data, setData] = useState('')

//     useEffect(()=>{
//       axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
//           setData(res.data[0].email)
//       })
//     },[])
//   return (
//     <div>{data}</div>
//   )
// }

// Sample 2

const EffectTutorial = () => {
    // I want the api to be called anytime the button was clicked so there I will add the count state as an array of dependency
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[0].email);
      console.log("API was called")
    });
  }, [count]);
  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default EffectTutorial;
