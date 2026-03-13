import { useState } from 'react'
import './App.css'
import King from './King'
import PostsSection from './PostsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <King/>
       <PostsSection/>
      
    </>
  )
}

export default App
