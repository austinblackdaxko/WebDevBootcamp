// Section 66 - Video 632

import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {

  function changeIsHappy() {
    setIsHappy(!isHappy)
  }

  const[isHappy, setIsHappy] = useState(true)
  return (
    <div>
      <p className="Toggler"> {isHappy ? "😄" : "😭"} </p>
      <button onClick={changeIsHappy}>Change the Mood</button>
    </div>
  )
}