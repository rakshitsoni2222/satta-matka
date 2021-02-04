import { useState } from "react";
import "./styles.css";

export default function App() {
  let array = ["red", "violet", "green"];
  let [variable, setVariable] = useState("");

  let clickFunction = () => {
    setVariable("loading...");
    setTimeout(() => {
      let result = array[Math.floor(Math.random() * array.length)];
      setVariable(result);
    }, 500);
  };

  return (
    <div className="App">
      <input
        style={{ color: variable === "loading..." ? "black" : variable }}
        value={variable}
        className="input"
        disabled
      />
      <button onClick={clickFunction} className="btn">
        GET
      </button>
    </div>
  );
}
