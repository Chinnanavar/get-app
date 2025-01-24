import React, { useState } from "react";

const App3 = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  console.log(useState("Hello"));

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick1 = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick1}>-</button>
    </div>
  );
};

export default App3;
