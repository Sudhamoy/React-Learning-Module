import React from 'react'

const styles={
  studentCard:{
    border:'1px solid black',
    borderRadius:'10px',
    padding:'20px',
    margin:'10px auto',
    color:'white',
    backgroundColor:'red',
    width:'max-content'
  }
}

function Student(props) {
  return (
    <div style={styles.studentCard}>
      <h2>{props.fullname}</h2>
      <p>{props.email}</p>
      <p>Batch : {props.batchno}</p>
    </div>
  )
}


/*
TWO METHODS OF DESTRUCTURING PROPS: USING ES6 FEATURES

  1. Directly in the function parameters
  function Student(props) {
    const {fullname,email,batchno}=props
    return (
      <div style={styles.studentCard}>
        <h2>{fullname}</h2>
        <p>{email}</p>
        <p>Batch : {batchno}</p>
      </div>
    )
  }

  2. Using destructuring in the function body
  function Student({fullname,email,batchno}) {
    return (
      <div style={styles.studentCard}>
        <h2>{fullname}</h2>
        <p>{email}</p>
        <p>Batch : {batchno}</p>
      </div>
    )
  } 

*/

export default Student
