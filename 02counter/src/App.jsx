import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let counter=10
  const addValue=()=>{
    console.log("clicked",counter);
    counter=counter+1;
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <button>remove value</button>
    </>
  )
}

export default App
