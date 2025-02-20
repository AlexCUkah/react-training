import { useState, useEffect } from 'react'
import './styles/App.css'
import {Header} from './components/header.jsx'
import axios from "axios" 
import {theme} from './theme/themes.js'
import { ThemeProvider } from '@mui/material/styles'
import {CssBaseline} from '@mui/material'

function App() {
 

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
       <Header/>
      <div sx ={{display: "flex"}}>
        <p1>Hello</p1>
      </div>
    
      </ThemeProvider>  
    </>
  )
}

export default App
