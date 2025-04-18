import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage/HomePage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import FilterPage from './Pages/FilterPage/FilterPage'
import AcercaDe from './Components/AcercaDe/AcercaDe'
const App = () => {

  

  return (
    <>
      <Header/>
     
     
      <BrowserRouter>
      <Navbar/>
      
        
       
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details/:id' element={<DetailsPage/>}/>
        <Route path='/filter/:genero' element={<FilterPage/>}/>
        <Route path="/acerca_de" element={<AcercaDe />} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App