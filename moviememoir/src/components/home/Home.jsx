import { useEffect,useState } from 'react'
import './Home.css';
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Movie from './Movie.jsx';

const Home = () => {
  
  const navigate = useNavigate();
  const [username,setUserName]=useState('');
  const [token,setToken]=useState('');
  const [id,setId]=useState('');

  useEffect(()=>{
    const token = window.sessionStorage.getItem('token');
    if(token==null){
      navigate("/login");
    }
    const username = window.sessionStorage.getItem('username');
    const id = window.sessionStorage.getItem('id');
    setUserName(username);
    setId(id);
    setToken(token);
  },[])

  return (
    <div>
      <Navbar username={username}></Navbar>
       <div className="outer-movie-container">
          <Movie token={token} id={id} ></Movie>
       </div>
    </div>
  )
}

export default Home
