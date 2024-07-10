import React from 'react'

const containerStyle={
  border:'1px dotted black',
  padding:'20px',
  margin:'20px'
}

function GrandChild1({count,setCount}) {
  return (
    <div style={containerStyle}>
      <h3>GrandChild-1</h3>
      <p style={{fontWeight:'500'}}>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default GrandChild1
