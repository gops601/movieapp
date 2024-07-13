import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import {Routes,Route} from 'react-router-dom'
import Add from './components/Add'

function App() {
 
  return (
    <>
     <Navbar/>
     
     <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
     </Routes>
    </>
  )
}

export default App
