import React from 'react'
import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)
  /* const [name, setName] = useState('') */

  const increment=()=>{
    //count=count+1 ---> Don't do this dircetly,use setHandler function instead.
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
  }

  const increment3=()=>{
    /*
    increment() //0-->1
    increment() //0-->1
    increment() //0-->1
    Invoking increment function will not work like setCount(count+3) because we are invoking synchronous type of function and setCount is asynchronous in nature.*/
    setCount(count+3)
  }

  const increment5=()=>{
    /*  setCount((prevCount)=>{
      return prevCount+5
    }) */
    setCount((prevCount)=> prevCount+5)
  }

  /* --------------------------------------------- */
  const incre1=()=>{
    setCount((prev_count)=>prev_count+1)
  }
  const increment2=()=>{
    incre1() //0-->1
    incre1() //1-->2
    /*
    setCount((prev_count)=>prev_count+1)
    setCount((prev_count)=>prev_count+1) */
    //It will work because we are handling the asychronous stateHander using callback function.
  }

  return (
    <div className='Count'>
      <h1 style={{fontWeight:'700',backgroundColor:'black',color:'white'}}>{count}</h1>
      <button onClick={increment}>Increment Button</button>&nbsp;
      <button onClick={decrement}>Decrement Button</button>&nbsp;
      {/* Instead of increment() and decrement()--> invoking function as its a javacript lang.
      we will use only reference: increment and decrement 
      And, use camelcase for attribute: onClick instead of onclick
      And, use {} instead of " " for attribute value*/}
      <button onClick={reset}>Reset Button</button><br/>
      <button onClick={increment3}>Increment by 3</button>&nbsp;
      <button onClick={increment5}>Increment by 5</button>&nbsp;
      <button onClick={increment2}>Increment by 2</button>
    </div>
  )
}

export default Count


/* state-Hander : asychronous in nature */