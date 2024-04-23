import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [hasNumbers, setHasNumbers] = useState(false)
  const [hasCharacters, sethasCharacters] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() =>{
    console.log("changed dependency so inside")
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let sym = '!@#$%^&*()_+'
    let pass = ''

    if(hasCharacters) str += sym
    if(hasNumbers) str += num

    for(let i=1; i<length; i++) {
      let  char_index = Math.floor(Math.random() * str.length )
      pass += str.charAt(char_index)
    }
    setPassword(pass)

  },[length, hasNumbers, hasCharacters])
  

  //when page loads or if any dependency changes
  useEffect(() => {
    generatePassword()
  },[length, hasNumbers, hasCharacters])

  const copyClipboard =() => {
    navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md bg-gray-800 rounded-lg text-orange-500 px-4 py-3">
        <h1 className='text-white text-center'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value ={password} 
          className='outline-none' name="" id="" readOnly placeholder='Password'
          ref= {passwordRef}/>

          <button className='bg-blue-500 rounded-lg px-3 py-0.5 shrink-0 outline-none text-white' onClick={copyClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name="" 
            id="" 
            />
            <label htmlFor="length">{length}</label>
          </div>
        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="" checked={hasNumbers} onChange={() => {
              setHasNumbers((prev) => !prev)
            }} />
          <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="" checked={hasCharacters} onChange={() => {
            sethasCharacters((prev) => !prev)
          }} />
          <label htmlFor="hasCharacters">Character</label>
          </div>
      </div>
    </>
  )
}

export default App
