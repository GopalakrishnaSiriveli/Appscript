import './Navbar.css';
import React from 'react';
import { FaCartPlus, FaChevronDown, FaHeart, FaSistrix, FaUserCircle } from 'react-icons/fa';



function Navbar() {
  return (
 
<>
<div className="nav-header">
    <img src="" alt="logo" className="header-logo" />
    <h5> LOGO</h5>
    <div className="header-icons" >
        <FaSistrix  className="nav-image"/>
        <FaHeart className="nav-image"/>
        <FaCartPlus className="nav-image" />
        <FaUserCircle  className="nav-image" /> 
        <p className="text">ENG</p>
        
        <FaChevronDown className="eng-arrow" />
       
    
   </div>
</div>
<div className="nav2">
    <navLink className="nav-item" >SHOP</navLink>
    <navLink className="nav-item"  >SKILLS</navLink>
    <navLink  className="nav-item" >STORIES</navLink>
    <navLink className="nav-item"  >ABOUT</navLink>
    <navLink  className="nav-item" >CONTACT US</navLink>
</div>
<hr />
<div className="heading">
    <h1>DISCOVER OUR PRODUCTS</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi elementu dolor</p>
</div>

</>
);
}



export default Navbar;