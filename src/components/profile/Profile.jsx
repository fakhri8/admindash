import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import mod from '../../assets/mod.png'
import './Profile.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import lo from '../../assets/lo.png'
import SideBar from '../../sideBar/SideBar';
export default function Profile({ user }) {
    const navig=useNavigate()
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
  if (!user) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <div className='cc'>
         <img src={menu} alt='menu' className='menu' onClick={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <img src={logo} alt="logo" className="logo" onClick={()=>{navig('/home')}}/>
      <Container className="profile-container" style={{position:"relative", top:"-550px"}}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="profile-card shadow-sm">
            <Card.Body>
              <Card.Title className="text-center">User Profile</Card.Title>
              <img src={mod} alt="..." style={{position:"relative", 
                height:"20px", width:"20px", left:'420px',
                top:"190px", cursor:"pointer"}} />
              <Card.Img 
                variant="top" 
                src={lo}
                alt="Profile Picture"
                className="rounded-circle mx-auto d-block mb-3"
                style={{ width: '150px', height: '150px' }}
              />
              <Card.Text className="text-center">
                <strong>Email: </strong> <span style={{color:'green'}}>{user.email}</span><br />
                <strong>First Name: </strong><span style={{color:'green'}}>{user.firstName}</span><br />
                <strong>Last Name: </strong><span style={{color:'green'}}> {user.lastName}</span><br />
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>

  );
}
