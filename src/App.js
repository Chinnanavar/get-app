import "./App.css";

function App() {
  let a = 2;
  return (
    <div className="hero">
      <h1 style={{ backgroundColor: "yellowgreen", color: "orange" }}>Hello</h1>
      <p>This is a variable: {a + 20}</p>
    </div>
  );
}

export default App;
