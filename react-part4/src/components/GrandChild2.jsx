import React from 'react'

const containerStyle={
  border:'1px dotted black',
  padding:'20px',
  margin:'20px'
}


function GrandChild2() {
  return (
    <div style={containerStyle}>
      <h3>GrandChild-2</h3>
    </div>
  )
}

export default GrandChild2
