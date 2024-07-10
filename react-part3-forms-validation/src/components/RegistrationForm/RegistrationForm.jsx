import React from 'react'
import './RegistrationForm.css'
import { useState } from 'react'

function RegistrationForm() {
  const [name,setName]=useState('');
  const [company,setCompany]=useState('Gooogle');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');


  /* 
  //using object concepts in useState for the whole form
  const[form,formData]=useState({
    name:''
    company:'Google'
    email:''
    password:''
    confirmPassword:''
  })
 */
  const [showSuccess,setShowSuccess]=useState(false);

  const [nameError,setNameError]=useState(false);
  const [emailError,setEmailError]=useState(false);
  const [passwordError,setPasswordError]=useState(false);
  const [confirmPasswordError,setConfirmPasswordError]=useState(false);

  const sayhi=(number)=>{
    console.log("Hello_guys",number)
  }

  const reset=()=>{
    setName('');
    setCompany('Gooogle');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  /* Validation rule:
  (i) Name length should be atleast of 3.
  (ii) Email should includes "@" and "."
  (iii) Password should be of atleast 6 characters
  (iv) Confirm Password should match the password inputted.(confirm password=password) */

  const handleSubmit=(e)=>{
    e.preventDefault(); //preventing page reloading here after submitting


    setNameError(false)
    setEmailError(false)
    setPasswordError(false)
    setConfirmPasswordError(false)


    let error=false;

    if(name.length < 3){
      setNameError(true)
      error=true;
    }
    if(!(email.includes("@") && email.includes("."))){
      setEmailError(true)
      error=true;
    }
    if(password.length < 6){
      setPasswordError(true)
      error=true;
    }
    if(confirmPassword !== password){
      setConfirmPasswordError(true)
      error=true;
    }


    if(!error){
      reset()
      setShowSuccess(true);
    }

    console.log({
      name,
      company,
      email,
      password,
      confirmPassword
    })
    
  }


  return (
    <>
    <div className='RegistrationForm'>
      <h1>Registration Form</h1>
      <form
      className='form'
      onSubmit={handleSubmit}>

      <div className='form-element'>
        <label htmlFor='name'>Name : </label>
        <input
        type='text'
        id='name'
        placeholder='Enter your name'
        value={name}
        /* onInput={(e)=>{console.log(e.target.value)}}
        This is a event handler.(like : onChange()
        (e) is a Iscapture parameter to capture the event*/
        onInput={(e)=>{setName(e.target.value)}}
        />

        {nameError && (<div className="errorMsg">Name should be of atleast 3 character</div>)}
      </div>

      <div className='form-element'>
        <label htmlFor='name'>Company : </label>
        <input
        type='text'
        id='name'
        value={company}
        placeholder='Enter company'
        />
      </div>

      <div className='form-element'>
        <label htmlFor='email'>Email-Id : </label>
        <input
        type='email'
        id='email'
        placeholder='abc@gmail.com'
        value={email}
        onInput={(e)=>{setEmail(e.target.value)}}/>

        {emailError && (<div className="errorMsg">Email should includes "@" and "."</div>)}
      </div>

      <div className='form-element'>
        <label htmlFor='password1'>Password : </label>
        <input
        type='password'
        id='password1'
        placeholder='Enter your password'
        value={password}
        onInput={(e)=>{setPassword(e.target.value)}}/>

        {passwordError && (<div className="errorMsg">Password should be of atleast 6 characters</div>)}
      </div>

      <div className='form-element'>
        <label htmlFor='password2'>Confirm Password : </label>
        <input
        type='password'
        id='password2'
        placeholder='Confirm your password'
        value={confirmPassword}
        onInput={(e)=>{setConfirmPassword(e.target.value)}}/>

        {confirmPasswordError && (<div className="errorMsg">Confirm Password should match the password inputted</div>)}
      </div>

        <button>Submit</button>
      </form>

      
      {showSuccess && (<div className='form-submission-text'>
        Form Submitted Successfully!
        <span onClick={()=>setShowSuccess(false)}>&#x2718;</span>
      </div>)}
    </div>

    <button onClick={() => sayhi(10)}>Say Hi</button>{/* always use callbacks while passing a argument otherwise it will take it as a function invoking due to javascript nature. */}

    </>
  )
}

export default RegistrationForm



/*
#React Forms:
//Single source of truth : state at one place only(e.g:our aadhar details in uidai)

##Types:
//(i) Controlled Components :
Where we control the elements/html doc by react state, that means updating the things parallely from html form/doc to react state.
(e.g:input, select,text-area etc.)
//(ii) Uncontrolled Components:(e.g:file upload)

##2 Steps:(for update the states parallely)
(i) Assign form elements values = state value.
(ii)Attach state-Handler to the event-handler
*/