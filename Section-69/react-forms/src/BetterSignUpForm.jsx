// Section 69 - video 658 - a better sign up form
import { useState } from "react"

export default function BetterSignUpForm() {

  const [formData, setFormData] = useState({firstName: "", lastName: "", password : ""})

  const handleSubmit = () => {
    console.log(formData)
  }
  
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData(currData => {
      return {
        ...currData,
        [changedField] : newValue
      }
    })
  }

  return (
    <div>
      <label htmlFor="firstName">first name: </label>
      <input 
        type="text" 
        placeholder="John" 
        value={formData.firstName} 
        onChange={handleChange}
        name="firstName"
        id="firstName"/>
        <br />
      <label htmlFor="lastName">last name: </label>
      <input 
        type="text" 
        placeholder="Smith" 
        value={formData.lastName} 
        onChange={handleChange}
        name="lastName"
        id="lastName"/>
      <label htmlFor="passworrd">passworrd: </label>
      <input 
        type="password" 
        placeholder="Secret123" 
        value={formData.password} 
        onChange={handleChange}
        name="password"
        id="password"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}