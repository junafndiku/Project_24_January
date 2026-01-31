import React from "react";
import "./Navigationbar_css.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import travel from "./images/travel.png";

const Navigationbar = () => {
  return (
    <Navbar expand="lg" className="navbarStyle">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
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

            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              Contact us
            </Nav.Link>

            <Nav.Link as={Link} to="/createPackage" className="nav-link-custom">
              Create
            </Nav.Link>

            <Nav.Link as={Link} to="/readAll" className="nav-link-custom">
              Read All
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;


