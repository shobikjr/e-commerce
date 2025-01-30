import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import { Link } from "react-router-dom";
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {

    const[menu,setMenu]= useState("shop");
  return (
    <div className='navbar'>
        
        <div className='nav-logo'>
            <img src={logo} lat=""/>
            <p>कपड़ा PASAL</p>
        </div>
           <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='Kids'>Kid</Link>{menu==="kids"?<hr/>:<></>}</li>
         </ul>  
         <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
         <Link to='/cart'><img src={cart_icon} alt=''/></Link> 
         <div className='nav-cart-count'>0</div>
         </div>
    </div>
  )
}

export default Navbar