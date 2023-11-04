import { useState, useEffect } from 'react'
import './Register.css';
import { registerUser } from '../../api';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (token != null) {
      navigate("/");
    }
  }, [])

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data to be submitted:', formData);
      const response = await axios.post('http://localhost:8080/api/v1/signup', formData);
      navigate('/login');
    } catch (error) {
      console.log(error, "error while calling register api endpoint");
    }

  };


  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
        <p className='register-heading'>Register</p>
        <div className="input-container">
          <label htmlFor="email">Email*</label>
          <input
            type="email" id="email" name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div className="input-container">
          <label htmlFor="username">Username*</label>
          <input type="text" id="username" name="username"
            value={formData.username}
            onChange={handleChange}
            required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" name="password"
            value={formData.password}
            onChange={handleChange}
            required />
        </div>
        <div className="register-submit-btn">
          <button className="register-submit" type="submit">Register</button>
        </div>

      </form>
    </div>
  )
}

export default Register
