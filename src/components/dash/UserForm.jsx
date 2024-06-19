import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ currentUser, onSave }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    numero: '',
    password: '',
  });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        numero: '',
        password: '',
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="formRole">
        <Form.Label>Role</Form.Label>
        <Form.Control
          as="select"
          name="role"
          value={user.role}
          onChange={handleChange}
        >
          <option value="">Select role</option>
          <option value="courtier">Courtier</option>
          <option value="client">Client</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formNumero">
        <Form.Label>Numero</Form.Label>
        <Form.Control
          type="text"
          name="numero"
          value={user.numero}
          onChange={handleChange}
          placeholder="Enter numero"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default UserForm;
