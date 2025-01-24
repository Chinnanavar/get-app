import React from "react";

const App2 = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const Hello = () => {
  return (
    <div>
      <h1>Hiiiiiii</h1>
    </div>
  );
};

const Greetings = () => {
  return (
    <div>
      <h1>Greetings</h1>
    </div>
  );
};

export default App2;
export { Hello as Bye, Greetings };

export const value = "Hello";
