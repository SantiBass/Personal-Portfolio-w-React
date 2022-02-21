import React from 'react'
import Logo from '../../Assets/images/macLogo.jpg'
 function Navbar() {
  return (
    <div>This is the Navbar
      <div className='leftSide'>
        <img src={Logo}/>
      </div>
      <div className='rightSide'></div>

    </div>
  )
}
export default Navbar();
