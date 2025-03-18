import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  const increment = () => setState((prev) => prev + 1);
  const decrement = () => setState((prev) => prev - 1);

  return (
    <div className="App">
      <h1 style={{ fontSize: 70, color: "red" }}>value = {state}</h1>
      <button style={{ padding: 15 }} onClick={increment}>
        incremernt
      </button>
      <button style={{ padding: 15 }} onClick={decrement}>
        decremernt
      </button>
    </div>
  );
}

export default App;
