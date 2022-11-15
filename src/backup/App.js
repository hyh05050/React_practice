import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Cleanup from "./Cleanup";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  //useEffect args => callBack, dependencyList
  useEffect(() => {
    console.log("CALL Only ONE");
  }, []);

  useEffect(() => {
    console.log("CALL when counter change ", counter);
  }, [counter]);

  useEffect(() => {
    if (keyword !== "" && keyword?.length >= 5)
      console.log("CALL when Keyword change ", keyword);
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={keyword}
        placeholder="Search"
      />
      <h1 className={styles.title}>Welcome back</h1>
      <h1>{counter}</h1>
      <button type="button" onClick={onClick}>
        Click Me
      </button>
      <Button text="Continue" />
      <hr />
      <Cleanup />
    </div>
  );
}

export default App;
