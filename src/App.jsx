import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/greetings'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       Hello World
       <Greeting />
      
      </div>
      
      
    </>
  )
}

export default App
