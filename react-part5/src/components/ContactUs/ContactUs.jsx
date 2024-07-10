import React from 'react'
import './Contact.css'

const contactStyle={
  border:'2px solid black',
  borderRadius:'6px',
  fontWeight:'700',
  padding:'10px 20px'
}

function ContactUs() {
  return (
    <div className='ContactUs'>
      
      <h1>Contact Us</h1>
      
      <div className="details">
        <p style={contactStyle}>abc@gmail.com</p>
        <p style={contactStyle}>1234567890</p>
      </div>

      <p style={{fontWeight:'500'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem soluta odit natus quibusdam reiciendis illo amet aperiam! Perspiciatis exercitationem animi optio nesciunt possimus est dignissimos nulla vero neque cumque corporis alias praesentium incidunt, qui tempora unde! Fugiat, sapiente maxime! Expedita sit voluptatem repudiandae. Possimus, itaque rem laboriosam maiores, illum quibusdam reiciendis aut eveniet aliquam cumque numquam. Iste doloribus iure error soluta aliquam nobis doloremque non? Totam quas provident aperiam similique nihil vel excepturi quae in molestias tempore eveniet, facilis sint fuga temporibus tempora dignissimos minus deserunt non expedita quam impedit. Quae qui saepe sit libero corrupti consectetur, mollitia esse harum.</p>

    </div>
  )
}

export default ContactUs
