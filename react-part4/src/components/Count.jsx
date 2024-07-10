import React,{useState, useEffect } from 'react'

function Count() {

  const [count,setCount]=useState(0);
  

  //componentDidMount
  useEffect(()=>{
    console.log("Count Component gets mounted successfully...");
  },[])

  //componentDidUpdate
  useEffect(()=>{
    console.log("Count Component gets updated successfully...");

    if(count>3){
      console.log("Account is locked");
    }
  },[count])

  
  /* //componentWillUnmount
  useEffect(()=>{
    return ()=>{
      console.log("Count Component gets unmounted successfully...");
    }
  },[count]) */

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Count++</button>
    </div>
  )
}

export default Count

/*
  #@Syntax:

  useEffect=(()=>{

  },[])

  -This is a hook that allows you to run some code after rendering.
  -There are two parameters in this hook:
  (i)Callback function(effect-function)
  (ii) Dependency array
*/
