// Section 66 - start of React State
// updated in vid 634 - useState() and Rendering

import { useState } from "react";

export default function Counter() {
  // useState functions MUST be used within the react component
  function changeNum() {
    setNum(num + 1);
  }
  const [num, setNum] = useState(5);
  console.log("COMPONENT HAS BEEN EXECUTED AGAIN")
  console.log(`num: ${num}`)
  return (
    <div>
      <p>The Count is: {num}</p>
      <button onClick={changeNum}>Click to increment</button>
    </div>
  )
}