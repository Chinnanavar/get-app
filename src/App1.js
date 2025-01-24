import React from "react";

const App1 = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

export default App1;
