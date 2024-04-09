import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(15)

  //let counter  = 15
  const addValue = () =>{
    setCounter(counter + 1)
  }

  const removeValue =() => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>ReactProject2 {counter}</h1>
      <h2>Counter value: </h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
