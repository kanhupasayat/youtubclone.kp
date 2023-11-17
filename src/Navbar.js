import React from 'react';
import "./Nabbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";




const Navbar = () => {
  return (
    <div className="nav11">
    <div className="nav">
        <div className="logo1">
        <h1 className='h1'><AiOutlineBars /></h1>
        <img className='img1' src="https://variety.com/wp-content/uploads/2020/06/youtube-logo.png?w=999" alt="" />

        </div>
        <div className="search-bar">
      <form>
        <input type="text" placeholder="Search"/>
        <button><h1><IoSearchOutline /></h1></button>
      </form>
    </div>
    <div className="last">
        <h1 className='h'><FaVideo /></h1>
        <h1 className='h' ><IoNotificationsSharp /></h1>
        <h1 className='h' ><CgProfile /></h1>
      </div>      
    </div>
    <div className="text11">
      <span className='s'>All</span>
      <span className='s'>Music</span>
      <span className='s'>Mixes</span>
      <span className='s'>YO YO honey Sing</span>
      <span className='s'>Python</span>
      <span className='s'>Javascript</span>
      <span className='s'>Kawasaki</span>
      <span className='s'>Lo-fi</span>
    </div>
    </div>
  )
}

export default Navbar;