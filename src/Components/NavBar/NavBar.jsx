import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <ul>            
            <Link to={"/"} className='item'>Inicio</Link>
            <Link to={"/filter/Male"} className='item'>Masculino</Link>            
            <Link to={"/filter/Female"} className='item'>Femenino</Link>      
            <Link to={"/acerca_de"} className="item">Acerca De</Link>         
        </ul>
    </nav>
  )
}

export default NavBar