import React, { useState } from "react";

// const StateTutorial = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   const decrement = () => {
//     counter > 0 && setCounter(counter - 1);
//   };

//   return (
//     <div>
//       <button onClick={decrement}>Decrement</button> {counter}
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };


// Sample 2 

const StateTutorial = () => {
    const [inputValue, setInputValue] = useState('Damilola Michaels');

    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }
   
  
    return (
      <div>
       <input placeholder='enter something...' onChange={handleChange}/>
       {inputValue}
      </div>
    );
  };
  


export default StateTutorial;
