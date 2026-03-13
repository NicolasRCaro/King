import { useState } from 'react'
import Redeem from './redeem'
import './redeem.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Redeem/>
      </div>
     
    </>
  )
}

export default App
