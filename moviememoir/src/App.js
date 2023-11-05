
import './App.css';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Create from "./components/create/Create";
import Update from "./components/update/Update";

function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
