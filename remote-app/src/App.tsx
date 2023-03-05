import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Remote app</h1>
      <Button />
    </div>
  );
}

export default App;
