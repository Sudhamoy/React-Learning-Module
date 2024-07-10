import React from 'react'
import GrandChild1 from './GrandChild1'
import GrandChild2 from './GrandChild2'

const containerStyle={
  border:'1px dotted black',
  padding:'20px',
  margin:'20px',
}

function Child1({count,setCount}) {
  return (
    <div style={containerStyle}>
      <h1>Child-1</h1>
      <p style={{fontWeight:'500'}}>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <GrandChild1 count={count} setCount={setCount}/>
        <GrandChild2/>
      </div>
    </div>
  )
}

export default Child1
