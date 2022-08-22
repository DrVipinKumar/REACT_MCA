import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(2);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  //   function plusFive() {
  //     increment();
  //     increment();
  //     increment();
  //     increment();
  //     increment();
  //   }
  return (
    <div>
      <button onClick={increment} className="btn btn-primary btn-sm m-2">
        Increment
      </button>
      <span className="btn btn-warning btn-sm">{count}</span>
      <button onClick={decrement} className="btn btn-primary btn-sm m-2">
        Decrement
      </button>
      {/* <button onClick={plusFive} className="btn btn-primary btn-sm m-2">
        Increment + 5
      </button> */}
    </div>
  );
};

export default HookCounter;
