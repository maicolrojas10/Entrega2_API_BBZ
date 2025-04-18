import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
const App = () => {

  

  return (
    <>
      <Header/>
      <BrowserRouter>
        
       
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App