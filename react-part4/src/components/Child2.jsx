import React from 'react'

const containerStyle={
  border:'1px dotted black',
  padding:'20px',
  margin:'20px'
}

function Child2() {
  return (
    <div style={containerStyle}> 
      <h1>Child-2</h1>
    </div>
  )
}

export default Child2
