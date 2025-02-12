import { useState, useEffect } from 'react'
import './styles/App.css'
import {Header} from './components/header.jsx'
import axios from "axios" 


function App() {
  const [set, setArray] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8000/")
    setArray(response.data.hello)
    console.log(response.data.hello)  
  }
  
  useEffect(() => {
    fetchAPI()
  },[])

  return (
    <>
      <div>
       <Header name = "alex"/>
      </div>

      {
      set.map((fruit, index) => (
        <div key = {index}>
          <p>{fruit}</p> 
        </div>
      ))
      }
      
       
    </>
  )
}

export default App
