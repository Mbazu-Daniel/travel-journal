import React from 'react'
import map from "../assets/map.svg"
const NavBar = () => {
  return (
    <nav className='nav--box'>
        
<img src={map} className="nav--img"/>
<h2 className='nav--title'>my travel journal.</h2>
    </nav>
  )
}

export default NavBar