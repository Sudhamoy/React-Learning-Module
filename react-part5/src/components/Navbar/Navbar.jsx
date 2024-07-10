import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const boxStyle={
  border:'2px solid white',
  borderRadius:'7px',
  fontWeight:'600',
  textDecoration:'none',
  padding:'10px 20px',
  color:'white',
}

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="logo">
        <Link to='/'><img style={{width:'60px'}} src={logo} alt="logo"/></Link>
        </div>
      
      <div className="left-nav">
        
        <Link style={boxStyle} to='/'>Home</Link>
        <Link style={boxStyle} to='/about'>About-Us</Link>
        <Link style={boxStyle} to='/contact'>Contact-Us</Link>
      </div>
      <div className="right-nav">
        <Link style={boxStyle} to='/signup'>Sign-Up</Link>
        <Link style={boxStyle} to='/signin'>Sign-In</Link>
      </div>
    </div>
  )
}

export default Navbar

/* //Note: use "Link" instead of "anchor tag" in react-router-dom to route/connect pages.
  Link component has two props:
    -(i) to (for linking pages)
    -(ii)
*/

