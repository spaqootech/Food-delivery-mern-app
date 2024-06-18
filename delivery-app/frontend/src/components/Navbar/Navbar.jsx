import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
    const [menu , setMenu] = useState("home");
  return (
    <div className="navbar" id='home'>
        <img src={assets.logo}/>
        <ul>
            <a href='#home' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</a>
            <a href='#menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#mobile-app' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <ul>
        <img src={assets.search_icon}/>
        <img src={assets.basket_icon}/>
        <button>Sign in</button>
        </ul>
    </div>
  )
}

export default Navbar