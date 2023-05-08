import React, { useState } from 'react'
import { FiPhone } from "react-icons/fi";
import "../../App.css"
import "./header.css"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  const [addClass,setAddClass] = useState<number>()
  const menuData = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "Sự kiện",
      link: "event",
    },
    {
      title: "Liên hệ",
      link: "contact",
    },
  ];

  return (
    <nav className='wrapper-menu'>
      <div className='container'>
        <div className='menu ' >
        <div className='logo_menu'>
              <img src={logo} alt="logo"/>
          </div>
          <ul className='main_menu'>
            {menuData.map((item,index) => (
                  <li key={index}>
                    <Link to={item.link}
                    className={addClass === index ? 'active' : "inactive"}
                    onClick={()=>setAddClass(index)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
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