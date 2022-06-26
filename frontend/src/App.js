import React, { useState, useEffect } from "react";

import { Nav, Navbar, Container } from "react-bootstrap";

import {
  Routes,
  Route,
  NavLink,
  useNavigate
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Logo from "./logo.png";

import axios from "axios";

import Home from "./Home/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import About from "./component/About";

import Schedule from "./reuse/Schedule";
import Gallery from "./reuse/Gallery";

import MyActivity from "./pages/MyActivity";
import Footer from "./component/Footer";

import Navbars from "./Admin/Navbar";
import Homes from "./Admin/Home";
import LGallery from "./Admin/LGallery";
import AddGallery from "./Admin/AddGallery";
import UpdateGallery from "./Admin/UpdateGallery";
import ListClass from "./Admin/ClassList";
import AddClass from "./Admin/AddClass";
import UpdateClass from "./Admin/UpdateClass";
import Userlist from "./Admin/Userlist";
import UserParticipant from "./Admin/UserParticipant";
import UserVolunteer from "./Admin/UserVolunteer";

import useStore from "./auth/useLogin";

function App() {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  
  const [isLogin, setisLogin] = useState(false)
  const [isLoginAdmin, setisLoginAdmin] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/users/token');
        const token = response.data.data;
        const userId = await axios.get('http://localhost:8080/api/v1/users/'+token);
        localStorage.setItem('roleId', userId.data.data.role_user_id);
        localStorage.setItem('userId', userId.data.data.user_id);
        setisLogin(true)
        if(userId.data.data.role_user_id === 1){
          setisLoginAdmin(true)
        }
    } catch (error) {
        if (error.response) {
            navigate('/');
        }
    }
  }

  const logout = async () => {
   try {
      document.cookie = "token" + '=; Max-Age=0';
      localStorage.removeItem('roleId');
      localStorage.removeItem('userId');
      setisLogin(false)
      window.location.href = "/"
      navigate('/');
   } catch (error) {
      if (error.response) {
          navigate('/');
      }
   }
  }

  return (
    <div className="App">
     {!isLoginAdmin ?
     <>
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <img height={20} src={Logo} alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <Nav className="justify-content-center fw-bold">
            <NavLink
              className="ms-3"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#5790FF" : "#2C2C2C",
                textDecoration: "none",
              })}
            >
              Home
            </NavLink>
            <NavLink
              className="ms-3"
              to="/Event"
              style={({ isActive }) => ({
                color: isActive ? "#5790FF" : "#2C2C2C",
                textDecoration: "none",
              })}
            >
              Event
            </NavLink>
            <NavLink
              className="ms-3"
              to="/Gallery"
              style={({ isActive }) => ({
                color: isActive ? "#5790FF" : "#2C2C2C",
                textDecoration: "none",
              })}
            >
              Gallery
            </NavLink>
            <NavLink
              className="ms-3"
              to="/About"
              style={({ isActive }) => ({
                color: isActive ? "#5790FF" : "#2C2C2C",
                textDecoration: "none",
              })}
            >
              AboutUs
            </NavLink>
          </Nav>
          {!isLogin ? 
          <Nav className="fw-bold">
            <NavLink
              className="ms-3"
              to="/Login"
              style={({ isActive }) => ({
                color: isActive ? "#5790FF" : "#2C2C2C",
                textDecoration: "none",
              })}
            >
              Login
            </NavLink>
            <NavLink
              className="ms-3"
              to="/Signup"
              style={({ isActive }) => ({
                color: isActive ? "#5790FF" : "#2C2C2C",
                textDecoration: "none",
              })}
            >
              SignUp
            </NavLink>
          </Nav>
          :
          <Nav className="fw-bold">
          <NavLink
            className="ms-3"
            to="/MyActivity"
            style={({ isActive }) => ({
              color: isActive ? "#5790FF" : "#2C2C2C",
              textDecoration: "none",
            })}
          >
            MyActivity
          </NavLink>
          <a href="" className="ms-3" style={{textDecoration: "none", color: "#2C2C2C"}} onClick={logout}>Logout</a>
        </Nav>
          }
        </Container>
      </Navbar>


      <div className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
         {!isLogin ? (
          <>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          </>
          ) : (
            <>
            </>
          )
         }
          <Route path="/Event" element={<Schedule />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/MyActivity" element={<MyActivity/>} />
        </Routes>
      </div>
      <Footer />
      </>
      : 
      <>
      <Navbars/> 
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/User" element={<Userlist />} />
        <Route path="/gallery" element={<LGallery />} />
        <Route path="gallery/add" element={<AddGallery />} />
        <Route path="/gallery/update/:id" element={<UpdateGallery />} />
        <Route path="/class" element={<ListClass />} />
        <Route path="class/add" element={<AddClass />} />
        <Route path="/class/update/:id" element={<UpdateClass/>} />
        <Route path="/User/Participant" element={<UserParticipant/>} />
        <Route path="/User/Volunteer" element={<UserVolunteer/>} />
      </Routes>
      </>
      }

    </div>
  );
}

export default App;