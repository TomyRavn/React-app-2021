import Button from "./Button.js";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  const onlyOnce = () => {
    console.log("I run only once.");
  }
  useEffect(onlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <Button text="click me" onClick={onClick} />
    </div>
  );
}

export default App;
