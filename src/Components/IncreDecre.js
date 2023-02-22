import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function IncreDecre() {
    const [count, setCount] = useState(0);
    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }
    
      function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }
    return (
        <div className="App-IncreDecre">
            <button onClick={decrement}><FaMinus /></button>
            <p>{count}</p>
            <button onClick={increment}><FaPlus />  </button>
        </div>
    );
}