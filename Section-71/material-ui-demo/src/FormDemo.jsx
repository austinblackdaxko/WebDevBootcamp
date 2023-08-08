// Section 71 video 674 - Material Forms
// Box - video 675
import { TextField, Slider, Box } from "@mui/material"
import { useState } from "react"

export default function FormDemo() {
  const [name, setName] = useState("")
  const [volume, setVolume] = useState(50)
  const updateName = (e) => {
    setName(e.target.value)
  };
  const changeVolume = (e, newVal) => {
    setVolume(newVal)
  }
  return (
    <Box sx={{border: '1px solid red', p: 2}}>
      <h1>Name is {name}</h1>
      <TextField
        id="outlined-basic"
        placeholder="Puppy Name"
        label="Outlined"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <h2>Volume is {volume}</h2>
      <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
    </Box>
  )
}