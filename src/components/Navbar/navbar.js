import React from 'react'
import macLogo from '../../Assets/images/macLogo.jpg'
function Navbar() {
  return (
    <div className='navbar'>Thin is the Navbar
    <div className='leftSide'>
        <img src={macLogo} alt= "logo"/>
    </div>
    <div className='rightSide'></div>
    </div>
  )
}

export default Navbar