import React, { useEffect, useContext } from "react"; 
import "./Navigationbar_css.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import travel from "./images/travel.png";
import { UserContext } from './Auth/UserContext'
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 

const Navigationbar = () => {

    const nav = useNavigate()
  const { userInfo, setUserInfo } = useContext(UserContext)
  useEffect(() => {
    const userData = async () => {
      if (!userInfo.email) {
        await axios.get('http://localhost:5000/user/', { withCredentials: true })
          .then(res => setUserInfo(res.data))
          .catch(err => {
            console.log("No data " + err)
          })
      }
    }
  userData();
  }, [userInfo.email])
  const handleLogout = async () => {
    await axios.post('http://localhost:5000/logout/', null, { withCredentials: true })
      .then(res => {
        setUserInfo({})
        nav('/login', { replace: true })
      })
      .catch(err => console.log("Not logut"))
  }

  return (
    <Navbar expand="lg" className="navbarStyle">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/home"
          style={{ color: "white", fontWeight: "bold" }}
        >
          <div className="imgStyle">
            Global Wings
            <img
              src={travel}
              alt="logo"
              style={{
                height: "35px",
                width: "auto",
                objectFit: "contain",
                marginLeft: "8px",
              }}
            />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              About us
            </Nav.Link>

            <Nav.Link as={Link} to="/packages" className="nav-link-custom">
              Travel tours
            </Nav.Link>

            <Nav.Link as={Link} to="/addContact" className="nav-link-custom">
              Contact us
            </Nav.Link>

            <Nav.Link as={Link} to="/readAll" className="nav-link-custom">
              Read All
            </Nav.Link>

            {userInfo.email ? (
              <>
                <Nav.Link as={Link} to="/createPackage" className="nav-link-custom">Create</Nav.Link>
                <Nav.Link as={Link} to="/user">Profile: {userInfo.username}</Nav.Link>

                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register" className="nav-link-custom">Register</Nav.Link>
                <Nav.Link as={Link} to="/login" className="nav-link-custom">Login</Nav.Link>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;


