import React, { useContext } from "react"; 
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from './Auth/UserContext';
import axios from "axios";
import "./Navigationbar_css.css";

const Navigationbar = () => {
  const nav = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/logout/', null, { withCredentials: true });
      setUserInfo({});
      nav('/login');
    } catch {
      console.log("Logout failed");
    }
  };

  return (
    <Navbar expand="lg" className="navbarStyle">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          Global Wings
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="nav-links-custom">
            <Nav.Link as={Link} to="/about" className="nav-link-custom">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/packages" className="nav-link-custom">TRAVEL TOURS</Nav.Link>
            <Nav.Link as={Link} to="/addContact" className="nav-link-custom">CONTACT US</Nav.Link>

            {userInfo?.email ? (
              <>
                <Nav.Link as={Link} to="/createPackage" className="nav-link-custom">CREATE</Nav.Link>
                <Nav.Link as={Link} to="/readAll" className="nav-link-custom">DASHBOARD</Nav.Link>
                <Nav.Link onClick={handleLogout} className="nav-link-custom">LOGOUT</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/register" className="nav-link-custom">REGISTER</Nav.Link>
                <Nav.Link as={Link} to="/login" className="nav-link-custom">LOGIN</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;

