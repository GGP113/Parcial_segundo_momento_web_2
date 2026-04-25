import React from 'react'
import '../styles/navBarStyle.css';

function NavBar() {
  return (
    <nav>
        

        <a   href="/" className='mainName'>Zenith Bonsai</a>
        <div className='seccionesNavBar'>
            <a href="/philosophy">Filosofía</a>
            <a href="/gallery">Galería</a>
            <a href="/booking">Reservas</a>
          
           

        </div>
    </nav>
  )
}

export default NavBar