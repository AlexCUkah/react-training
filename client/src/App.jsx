import { useState } from 'react'
import './styles/App.css'
import {Header} from './components/header.jsx'
import {Students} from "./services/Data.jsx" 
import {List} from './components/list.jsx'
   
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header name = "alex"/>
      </div>
      
      
       
    </>
  )
}

export default App
