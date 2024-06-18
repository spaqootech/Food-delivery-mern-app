import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
  <footer id='footer'>
<div className="footer">
<div className="left">
        <img src={assets.logo} alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ipsa eveniet animi nihil eligendi eos quo distinctio dolorem praesentium, ab ducimus expedita.
        </p>
    </div>
    <div className="center">
        <h2>Company</h2>
        <p>Home</p>
        <p>About Us</p>
        <p>Delivery</p>
        <p>Privacy policy</p>
    </div>
    <div className="right">
        <h2>Get in Touch</h2>
        <p>+9234051340545</p>
        <p>mail@gmail.com</p>
    </div>
</div>
<div className="copyright">
    <p>Copyright 2024 &#160; Tomato.com - All Right Reserved</p>
</div>
  </footer>
  )
}

export default Footer