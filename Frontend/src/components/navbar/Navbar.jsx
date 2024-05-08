import React from 'react'
import "./Navbar.scss"

function Navbar() {
  return (
    
    <nav>
        <div className='left'>
        <a href='/' className='logo'>
         <img src='' alt=''/>
          <span>HomeSeek</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
        </div>
        <div className='right'>
        <a href='/'>Sign in</a>
        <a href='/'>Sign up</a>
        </div>
    </nav>
    
  )
}

export default Navbar