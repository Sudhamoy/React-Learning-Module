import React from 'react'

function Header() {
  const welcomeMsg="Welcome to Netflix";
  return (
    <div>
      <hr />
      <h1>{welcomeMsg}</h1>
      <p>{5+5}</p>
      <h5>{"React"+".js"}</h5>
      <h1>Unlimited movies, TV shows and more</h1>
      <h5>Watch anywhere. Cancel anytime.</h5>
      <p style={{font:'bold'}}>Ready to watch? Enter your email to create or restart your membership.</p>
      <form>
        <label htmlFor='email'>Email address</label>
        <input type='email' id='email' name='email' placeholder='abc@gmail.com'></input>&nbsp;
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Header

/* Display data using : {} */