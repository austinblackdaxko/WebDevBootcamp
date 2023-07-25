export default function Die({ sides=6 }) {
  const roll = Math.floor(Math.random() * sides) + 1;
  return (
    <p>
      {sides}-sided Die Role: {roll}
    </p>
  )
}