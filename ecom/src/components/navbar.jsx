import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom"
import "../Styles/navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      <nav>
        <Link to="/" className='title'>Jutori Seil</Link>
        <div className='menu' onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          {/* <li>
            <NavLink to="/About"> About </NavLink> 
          </li> */}
          <li>
            <NavLink to="/Shop"> Shop </NavLink>
          </li>
          <li>
            <NavLink to="/Contact"> Contact Us </NavLink>
          </li>
          {/* <li>
            <NavLink to="/Login"> Login/SignUp </NavLink>
          </li> */}
          <li>
            <NavLink to="/Cart"> <BsCart3 /> </NavLink> {/* // this creates the link to the routes must be accompaied by to="" to direct the path  */}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar



