import "./ColorBox.css"
import { useState } from "react";

export default function ColorBox({colors}) {

  function randomChoice() {
    const idx = Math.floor(Math.random() * colors.length);
    return idx;
  }

  function changeColor() {
    setColor(colors[randomChoice()])
  }

  const[color, setColor] = useState(colors[randomChoice()])


  return (
    <div 
    className="ColorBox"
    style={{ backgroundColor: color }}
    onClick={changeColor}>
    </div>
    )
}