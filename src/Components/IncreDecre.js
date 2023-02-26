import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function IncreDecre({changeQuantity,editData}) {
    const [count, setCount] = useState(editData?.quantity || 0);
    function increment() {
        setCount(function (prevCount) {
          changeQuantity(editData,prevCount + 1)
          return (prevCount += 1);
        });
      }
    
      function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            changeQuantity(editData,prevCount - 1)
            return (prevCount -= 1); 
          } else {
            changeQuantity(editData,0)
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