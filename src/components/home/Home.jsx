import React, { useState, useEffect } from 'react';
import SideBar from '../../sideBar/SideBar';
import menu from '../../assets/menu.png';
import logo1 from '../../assets/logo1.png'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className='cc'>
         <img src={menu} alt='menu' className='menu' onClick={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <img src={logo1} alt="logo" className="logo" />
    </div>
  )
}
