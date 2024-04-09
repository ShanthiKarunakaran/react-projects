import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const person = {
    name: 'SSSS',
    age: 25,
    location: 'India'
  }
  
  return (
    <>
      <h1 className='text-3xl bg-green-300 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="shan" age={person.age} />
      <Card  />
      <Card  />
    </>
  )
}

export default App
