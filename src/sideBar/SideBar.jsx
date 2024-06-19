import React from 'react';
import './SideBar.css';
import ferme from '../assets/ferme.png'
import { useNavigate } from 'react-router-dom';
export default function SideBar({ isOpen, toggleSidebar }) {
    const navige=useNavigate()
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img className="meenu" src={ferme} alt='menu' onClick={toggleSidebar}/>
       
      <ul>
        <li onClick={()=>{navige('/profile')}} >Profile</li>
        <li onClick={()=>{navige('/Dash')}}>DashBoard</li>
        <li onClick={()=>{navige('/Users')}}>Users</li>
      </ul>
    </div>
  )
}
