import Button from "./Button.js";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  const onlyOnce = () => {
    console.log("I run only once.");
  };
  useEffect(onlyOnce, []);
  useEffect(() => {
    if (keyword !== "") console.log("SEARCH FOR", keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here."
      />
      <h1>{counter}</h1>
      <Button text="click me" onClick={onClick} />
    </div>
  );
}

export default App;
