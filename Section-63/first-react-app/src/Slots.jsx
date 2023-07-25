export default function Slots() {
  const slotValues = ["🍒", "🍓", "🍌", "🍍"];

  function randomValue() {
    const num = Math.floor(Math.random() * slotValues.length);
    return num
  }
  const slot1 = slotValues[randomValue()];
  const slot2 = slotValues[randomValue()];
  const slot3 = slotValues[randomValue()];

  const isWinner = slot1 === slot2 && slot2 === slot3;

  const styles = {color: isWinner? "green" : "red"};

  return (
    <div className="Slots" style={styles}>
      <h1>{slot1} {slot2} {slot3}</h1>
      <h2>{isWinner ? "You Win!" : "You Lose :("}</h2>
      {isWinner && <h3>Congrats!</h3>}
    </div>
  )

}