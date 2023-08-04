// Section 66 - Video 633

import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {

  function changeIsHappy() {
    setIsHappy(!isHappy)
  }
  const[isHappy, setIsHappy] = useState(true)
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 2);
  return (
    <div>
      <p className="Toggler"> {isHappy ? "😄" : "😭"} </p>
      <button onClick={changeIsHappy}>Change the Mood</button>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment le count</button>
    </div>
  )
}