import "../../../App.css";
import React, { useState } from "react";

function Count() {
    const [count, setCount] = useState(0)
  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count + 100)}>+100</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count - 100)}>-100</button>
    </div>
  );
}

export default Count;
