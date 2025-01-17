import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import './SignUp.css';
import logo1 from '../../assets/logo1.png'; // Updated import statement
import AuthLayout from './AuthLayout';

export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [validationError, setValidationError] = useState('');

  const showAlert = (title, text) => {
    Swal.fire({
      icon: 'error',
      title,
      text,
    });
  };

  const validateInputs = () => {
    if (!firstName || !lastName || !email || !password || !num || !confirmPassword) {
      setValidationError('All fields are required.');
      showAlert('Validation Error', 'All fields are required.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordRegex)) {
      setPasswordError(
        'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.'
      );
      showAlert('Validation Error', 'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.');
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      showAlert('Validation Error', 'Passwords do not match.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const register = () => {
    console.log('Register button clicked');  // Confirm click handler is triggered

    if (!validateInputs() || !validatePassword()) {
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      num,
      password,
    };

    console.log('Sending data:', data);  // Check the data being sent

    axios
      .post('http://localhost:4000/authentication/signup', data)
      .then((response) => {
        console.log('Response data:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'User Registered',
          text: 'Congratulations! You have successfully registered.',
        });
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          console.error('Error response data:', error.response.data);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.error || 'An error occurred during registration.',
          });
        } else if (error.request) {
          console.error('No response received:', error.request);
          Swal.fire({
            icon: 'error',
            title: 'Network Error',
            text: 'No response received from server.',
          });
        } else {
          console.error('Error setting up request:', error.message);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error setting up request.',
          });
        }
      });
      
  };
  const login = () => {
    navigate('/');
  };

  return (
   <AuthLayout>
     <div className="wrapper">
      <div className="card">
        <div className="card-body">
          <div className="text-center mb-4">
            <img onClick={() => navigate('/')} src={logo1} alt="logo" className="login-logo" />
          </div>
          <h3 className="card-title text-center">CREATE AN ACCOUNT</h3>
          {/* Form fields */}
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* Error messages */}
          {validationError && (
            <div className="text-danger mb-3">{validationError}</div>
          )}
          {passwordError && (
            <div className="text-danger mb-3">{passwordError}</div>
          )}
          {/* Register button */}
          <div className="text-center">
            <button onClick={register} className="btn btn-primary btn-block">
              Register
            </button>
          </div>
          {/* Back to login button */}
          <p className="text-center mt-3 card-subtitle">ALREADY HAVE AN ACCOUNT?</p>
          <div className="text-center">
            <button onClick={login} className="btn btn-green btn-block">
              Login now
            </button>
          </div>
        </div>
      </div>
    </div>
   </AuthLayout>
  );
}
