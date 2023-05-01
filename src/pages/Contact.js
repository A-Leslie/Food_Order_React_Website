import React from 'react'
import Burger from '../assets/pexels-teresa-jang-16169365.jpg'
import '../styles/contact.css'
function Contact() {
  return (
    <div className='contact'>
      <div className='left'style={{ backgroundImage: `url(${Burger})` }}></div>
      <div className='right'>
      <h1> Contact Us</h1>

<form id="contact-form" method="POST">
  <label htmlFor="name">Full Name</label>
  <input name="name" placeholder="Enter full name..." type="text" />
  <label htmlFor="email">Email</label>
  <input name="email" placeholder="Enter email..." type="email" />
  <label htmlFor="message">Message</label>
  <textarea
    rows="6"
    placeholder="Enter message..."
    name="message"
    required
  ></textarea>
  <button type="submit"> Send Message</button>
</form>
      </div>
    </div>
  )
}

export default Contact
