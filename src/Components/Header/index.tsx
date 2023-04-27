import React from 'react'
import { FiPhone } from "react-icons/fi";
import "./header.css"
import logo from "../../assets/images/logo.png"

const Header = () => {
  
  return (
    <nav className='wrapper-menu'>
     <div className="container">
      <div className='menu'>
     <div className='logo_menu'>
          <img src={logo} alt="logo"/>
      </div>
      <ul className='main_menu'>
        <li>
          <a href='#DFFq'>Trang chủ</a>
        </li>
        <li>
        <a href='#fdsfsd'>Sự kiện</a>
        </li>
        <li>
        <a href='#sadasc'>Liên hệ</a>
        </li>
      </ul>
      <div className='phone_menu'>
          <span><FiPhone/></span>
          1234567890
      </div>
     </div>
     </div>
    </nav>
  )
}

export default Header