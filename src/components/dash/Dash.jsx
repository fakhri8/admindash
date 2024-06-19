import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import SideBar from '../../sideBar/SideBar';
import menu from '../../assets/menu.png';
import logo1 from '../../assets/logo1.png';
import data from '../../data/data';
import 'bootstrap/dist/css/bootstrap.css';
import UserForm from './UserForm';
import UserTable from './UserTable';
import './Dash.css'
export default function Dash() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState(data);
  const [currentUser, setCurrentUser] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormVisible(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter(user => user.id !== id));
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        );
      }
    });
  };

  const handleSave = (user) => {
    if (user.id) {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
      Swal.fire({
        title: 'Updated!',
        text: 'User has been updated.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    } else {
      user.id = users.length + 1;
      setUsers([...users, user]);
      Swal.fire({
        title: 'Added!',
        text: 'User has been added.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    }
    setCurrentUser(null);
    setFormVisible(false);
  };
  
  

  const handleCancel = () => {
    setCurrentUser(null);
    setFormVisible(false);
  };

  const handleAddUser = () => {
    setCurrentUser(null);
    setFormVisible(true);
  };

  return (
    <div className="cc">
      <img src={menu} alt="menu" className="menu" onClick={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <img src={logo1} alt="logo" className="logo" />
      <Container style={{ position: "relative", top: "-550px" }}>
  <Row className="my-4">
    <Col xs={6}>
      <h1 style={{position:"relative", left:"220px"}}>Admin Dashboard</h1>
    </Col>
    <Col xs={6} className="d-flex justify-content-end align-items-center">
      <Button variant="primary" onClick={handleAddUser}>Add User</Button>
    </Col>
  </Row>
  <Row>
    <Col md={12}>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </Col>
  </Row>
</Container>
      <Modal show={isFormVisible} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentUser ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm currentUser={currentUser} onSave={handleSave} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
