import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './component/Title'
import About from './component/About'
import Clock from './component/clock'

function App() {

  return (
    <center className='clock-container'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title></Title>
      <About></About>
      <Clock></Clock>
    </center>
  )
}

export default App
