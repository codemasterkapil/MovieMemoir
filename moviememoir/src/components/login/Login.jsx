import { useState, useEffect } from 'react'
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const[token,setToken]=useState('');

  useEffect(() => {
    const check_token = window.sessionStorage.getItem('token');
    if (check_token != null) {
      navigate("/");
    }
  }, [token])

  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:8080/api/v1/signin', formData);

      window.sessionStorage.setItem('id', response.data.id);
      window.sessionStorage.setItem('username', response.data.username);
      window.sessionStorage.setItem('email', response.data.email);
      window.sessionStorage.setItem('token', response.data.accessToken);
      setToken(response.data.accessToken);
      
    } catch (error) {
      console.log(error, "error while calling login api endpoint");
    }
  };

  return (
    <div className="container" >
      <form className="register-form" onSubmit={handleSubmit}>
        <p className='register-heading'>Login</p>
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
          <button className="register-submit" type="submit">Login</button>
        </div>
        <p style={{ fontWeight: "bold" }}>
          <Link style={{ textDecoration: "none" }} to="/register">register</Link> if you dont have your account created </p>
      </form>
    </div>
  )
}

export default Login
