//import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("I love you all from michael!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
export default CallBackTutorial