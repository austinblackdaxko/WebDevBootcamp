import './App.css'
// import Counter from './Counter'
// import Dumbo from './Dumbo'
// import ScoreKeeper from './ScoreKeeper'
// import EmojiClicker from './EmojiClicker'
import ScoreKeepers from './ScoreKeepers'

function App() {

  return (
    <>
      <h1>State Demo</h1>
      {/* <Counter/> */}
      {/* <Dumbo/> */}
      {/* <ScoreKeeper/> */}
      {/* <EmojiClicker/> */}
      <ScoreKeepers players={10} target={5}/>
    </>
  )
}

export default App