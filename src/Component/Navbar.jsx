import React from 'react'
import './Navbar.css'
import Hamburger from './Hamburger'
const Navbar = ({setCatagory}) => {
  return (
    <div className='nav'>
        <div className="icon">
            <Hamburger setCatagory={setCatagory}/>
        </div>
        <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" style={{cursor:'pointer'}} className='logo' height='80%' alt="ishort logo" />
    </div>
  )
}

export default Navbar