import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(0);
//let counter=0;

const addValue = () => {
  counter =counter + 1;
  console.log(counter);
  setCounter(counter);

}

const removeValue = () => {
  counter = counter - 1;
  console.log(counter);
  setCounter(counter);
}


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addValue}>
      Add Value:{counter}</button><br />
    <button onClick={removeValue}>
      Remove Vlaue:{counter}</button>
    </>
  )
}

export default App
