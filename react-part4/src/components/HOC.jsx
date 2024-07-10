import React from 'react'

function HOC({Component}) {
  const sectionStyling={
    backgroundColor:'blue',
    color:'white',
    fontWeight:'500',
    border:'2px solid black',
    margin:'20px',
    padding:'10px',
    fontSize:'1.2rem'
  }

  return (
    <div style={sectionStyling}>
      <Component/>
    </div>
  )
}

export default HOC

/* 
HOC : Higher Order Component
- Component which takes other component as parameter and returns a customized components.
- The component that is get passed as a parameter will automatically become the child component of the HOC(parent component)----> < App Component*/