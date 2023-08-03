import './App.css';
import './index.css'
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';

const data= [
  {id: 1, item:"eggs", quantity: 12 , completed:false},
  {id: 2, item:"milk", quantity: 1 , completed:true},
  {id: 3, item:"chicken", quantity: 4 , completed:false},
  {id: 4, item:"carrots", quantity: 6 , completed:true},
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      <PropertyList properties={properties}/>
      {/* <ShoppingList items={data}/> */}
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
    </div>
  )
}

export default App
