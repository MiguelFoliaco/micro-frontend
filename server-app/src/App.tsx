import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "remote_app/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Server App</h1>
      <Button />
    </div>
  );
}

export default App;
