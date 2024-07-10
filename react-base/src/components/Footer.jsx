import React from 'react'

function Footer() {
  //nested objects
  //data displaying
  const links={
    profile:"/profile",
    faq:"/FAQ",
    copyright:"Streaming App 2024",
  }

  return (
    <>
      <div>
        <hr/>
        <a href= {links.profile} >Profile</a>&nbsp;&nbsp;
        <a href= {links.faq}>FAQ</a>&nbsp;
        &copy; {links.copyright}
      </div>

      
    </>
  )
}

export default Footer
