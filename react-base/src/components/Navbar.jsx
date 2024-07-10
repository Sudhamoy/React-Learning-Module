import React from 'react'
import "./Navbar.css"

function Navbar() {
  //internal styling
  const styles={
    //will work as an object(key-value pair)
    //Nested Objects
    NavContainer:{
      border:'1px solid black',
      padding:'10px',
      backgroundColor: 'rgb(2,0,36)',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(193,75,75,1) 100%, rgba(0,212,255,1) 100%)'
    },
    UlContainer:{
      display:'flex',
      justifyContent:'space-evenly',
      flexDirection:'row',
      color:'white'
    }

  }
  return (
    <div className='Navbar' style={styles.NavContainer}>

      <div className="nav-left">
        <h1 style={{color:'white', fontWeight:'700'}}>Netflix</h1>
        <ul type="none" style={styles.UlContainer} >
          <li >Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="nav-right">
        <li>Language Selection</li>
        <li>Sign Up</li>
      </div>
        
      
    </div>
  )
}

export default Navbar


/* Disvadvantage of inline styling:
(i) It gets clutter
(ii) It is not a clean code
(iii) Not a easy to interpret code
 */