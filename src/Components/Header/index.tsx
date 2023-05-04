import React from 'react'
import { FiPhone } from "react-icons/fi";
import "./header.css"
import logo from "../../assets/images/logo.png"

const Header = () => {
  const menuData = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "Sự kiện",
      link: "#",
    },
    {
      title: "Liên hệ",
      link: "#",
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
            {menuData.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                    >
                      {item.title}
                    </a>
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