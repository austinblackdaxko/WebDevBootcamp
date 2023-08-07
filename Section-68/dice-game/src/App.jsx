
// import LuckyN from './LuckyN';
// import { sum } from './utils';
// import Box from './Box';
import './App.css'
import BoxGrid from './BoxGrid'

// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every((v) => v === dice[0]);
// }

function App() {
  return (
    <>
      {/* <LuckyN title={"Less than 4"}winCheck={lessThan4}/>
      <LuckyN title= {"All Same Value"} winCheck={allSameValue}/> */}
      < BoxGrid />
    </>
  )
}

export default App
