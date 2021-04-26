import React from "react";
import "./App.css";

function useStickyState(defaultValue, name) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(name);

    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue];
}

function App() {
  const [count, setCount] = useStickyState(0, "count");

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Currentcount: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
