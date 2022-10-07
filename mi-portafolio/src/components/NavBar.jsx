import React from 'react'
import logo from '../assets/Logo-negro.png'

const NavBar = () => {
  return (
    <nav>
        <section className='nav-logo-container'>
            <a href='/'><img src={logo} alt="Logo del portafolio"/></a>
        </section>
        <section className='profile-link'>
            <a href='/perfil'>Sobre mí</a>
        </section>
    </nav>
  )
}

export default NavBar