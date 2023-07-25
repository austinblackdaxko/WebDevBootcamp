import './App.css';
import './index.css'
// import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from "./Die";
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';

function App() {
  return (
    <div>
      {/* <Greeter person="Bill"/>
      <Greeter from="Austin"/>
      <Greeter person="World" from="The AI Apocalypse"/>
      <Die sides={20}/>
      <Die/>
      <Die sides={12}/>
      <ListPicker values={[1,2,3]}/>
      <ListPicker values={["A","B","C"]}/> */}
      {/* <Heading color="magenta" text="welcome..." fontSize="20px"></Heading>
      <Heading color="teal" text="welcome..." fontSize="48px"></Heading>
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>

      <ColorList colors={["red", "pink", "purple", "teal"]}/>
      <ColorList colors={["olive", "orangered", "turqoise", "brown"]}/> */}
      <Slots/>

    </div>
  )
}

export default App
