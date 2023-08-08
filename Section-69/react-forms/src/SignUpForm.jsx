// Section 69 - video 657 working with multiple inputs
import { useState } from "react"

export default function SignUpForm() {
  const[firstName, setFirstName] = useState("")
  const[lastName, setLastName] = useState("")
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value)
  }
  const updateLastName = (evt) => {
    setLastName(evt.target.value)
  }

  const handleSubmit = () => {
    console.log(`${firstName} ${lastName}`)
  }

  return (
    <div>
      <label htmlFor="firstName">first name: </label>
      <input 
        type="text" 
        placeholder="John" 
        value={firstName} 
        onChange={updateFirstName}
        id="firstName"/>
        <br />
      <label htmlFor="lastName">last name: </label>
      <input 
        type="text" 
        placeholder="Smith" 
        value={lastName} 
        onChange={updateLastName}
        id="lastName"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}