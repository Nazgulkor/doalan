import React from 'react'
import logo from '../images/logo.png'

function Header() {
  return (
    <header className='header'>
        <img className='logo' src={logo} alt="" />
    </header>
  )
}

export default Header;