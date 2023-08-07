// Section 67 - vid 638 State Initializer Functions

import { useState } from "react";

function generateGameBoard() {
  console.log("MAKING THE INITIAL GAME BOARD");
  return Array(50);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  console.log(board)
  return <button onClick={() => setBoard("Hello")}>Click me to change state</button>
}