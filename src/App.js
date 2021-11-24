// import Button from "./Button.js";
import { useState, useEffect } from "react";

function Hello() {
  //1. 개별 function 작성
  // const destroyedFn = () => {
  //   console.log("destroyed :<");
  // };
  // const effectFn = () => {
  //   console.log("created :)");
  //   return destroyedFn;
  // };
  // useEffect(
  //   effectFn,
  //   //return () => console.log("destroyed :<"); //Clean up Function
  //   []
  // );

  //2. useEffect 안에 통합(more used)
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);
  // console.log("I run all the time");
  // const onlyOnce = () => {
  //   console.log("I run only once.");
  // };
  // useEffect(onlyOnce, []);
  // useEffect(() => {
  //   if (keyword !== "") console.log("SEARCH FOR", keyword);
  // }, [keyword]);
  // return (
  //   <div>
  //     <input
  //       value={keyword}
  //       onChange={onChange}
  //       type="text"
  //       placeholder="Search here."
  //     />
  //     <h1>{counter}</h1>
  //     <Button text="click me" onClick={onClick} />
  //   </div>
  // );

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
