import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar/NavBar'
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