import { Fragment, useEffect, useState } from "react";

function Hello() {
  function createdFn() {
    console.log("created ");
    return destroyedFn; //CleanUp Function
  }
  function destroyedFn() {
    console.log("destroy");
  }
  //useEffect(createdFn, []);
  useEffect(() => {
    console.log("created ");
    return () => console.log("destroy");
  }, []);
  return <h1>Hello</h1>;
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <Fragment>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "hide" : "show"}</button>
    </Fragment>
  );
}

export default Cleanup;
