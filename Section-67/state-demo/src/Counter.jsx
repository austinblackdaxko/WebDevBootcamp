// Section 67 - vid 637 Setting State With an updater function


import { useState } from "react";

export default function Counter() {
  console.log("RENDERED!")
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  }

  // how to properly update state if you need to rely on the previous state
  const addThree = () => {
    setCount(currentCount => currentCount + 1);
    setCount(currentCount => currentCount + 1);
    setCount(currentCount => currentCount + 1);
  }

  // Section 67 - vid 639 - When Does React Re-Render?
  const setToTen = () => {
    setCount(10);
  }



  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
      <button onClick={setToTen}>Set To 10</button>
    </div>
  )
}