import React from "react";
import './Navigationbar_css.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import travel from './images/travel.png';


const Navigationbar = () => {
  return (
    <Navbar expand="lg" className="navbarStyle" variant="dark">
      <Container>
        <Navbar.Brand href="/" >
        <div className="imgStyle">Global Wings<img src={travel} style={{height: "35px",width: "auto",objectFit: "contain"}}></img>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about" className="nav-link-custom">About us</Nav.Link>
            <Nav.Link href="/packages" className="nav-link-custom">Travel tours</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact us</Nav.Link>
            <Nav.Link href="/createPackage/">Create</Nav.Link>
            <Nav.Link href="/readAll/">Read All</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;

