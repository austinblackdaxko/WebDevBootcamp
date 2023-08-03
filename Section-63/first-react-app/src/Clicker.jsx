// Start of Section 65 - React Events
// function handleClick() {
//   console.log("CLICKED TEH BUTTON!!1!")
// }

// function handleHover() {
//   console.log("YOU HOVERED OVER ME")
// }

// export default function Clicker() {
//   return (
//     <div>
//       <p onMouseOver={handleHover}>Hover Over Me</p>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// Section 65 Clicker Exercise



export default function Clicker({ message, buttonText }) {

  const handleClick = () => {
    alert(message);
  }
  return <button onClick={handleClick}>{buttonText}</button> 
}