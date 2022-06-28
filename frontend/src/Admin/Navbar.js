import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import axios from "axios";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.post('https://go-volunteeredu.herokuapp.com/api/v1/users/logout');
      if(response.status === 200) {
       document.cookie = "token" + '=; exp=Thu, 01 Jan 1970 00:00:01 GMT;';
       localStorage.removeItem('roleId');
       localStorage.removeItem('userId');
       window.location.href = "/"
       navigate('/');
     }
    } catch (error) {
       if (error.response) {
           navigate('/');
       }
    }
   }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <br/>
           <a href="" className="ms-5 mt-5" style={{textDecoration: "none", color: "#fff"}} onClick={logout}>Logout</a>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;