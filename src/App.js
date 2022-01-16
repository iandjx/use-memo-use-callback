import logo from "./logo.svg";
import { useState, useCallback, useMemo, memo } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [localnumber, setlocalnumber] = useState(1);
  const [childnumber, setchildnumber] = useState(1);
  const [arr, setarr] = useState([
    1, 2, 3, 4, 5, 1, 4, 12, 5, 6, 5, 12, 1, 34, 1, 2, 45,
  ]);
  const changeChildNumber = (number) => {
    setchildnumber(number);
  };

  const getlargestnumber = () => {
    console.log("i am working");
    return Math.max(...arr);
  };

  const memoizedCallback = useCallback((number) => {
    changeChildNumber(number);
  }, []);

  const useMemoizedValue = () => {
    return useMemo(() => getlargestnumber(), [arr]);
  };

  const incrementlocal = () => {
    setlocalnumber((state) => state + 1);
  };
  const changearray = () => {
    setarr([412, 123, 123, 12]);
  };

  return (
    <div className="App">
      <Child changeChildNumber={memoizedCallback} number={childnumber} />
      <button onClick={incrementlocal}>click local</button>
      <h1>loca: {localnumber}</h1>
      <h1>large :{useMemoizedValue()}</h1>
      <button onClick={changearray}>change arr</button>
    </div>
  );
}

export default App;
