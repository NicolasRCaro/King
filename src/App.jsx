import { useState } from 'react'
import './App.css'
import King from './King'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <King/>
    </>
  )
}

export default App
