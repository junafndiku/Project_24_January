import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

import airplane from "./images/airplane.png";
import agent from "./images/agent.png";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      {/* g-4 adds equal spacing between columns */}
      <Row className="g-4 justify-content-between">
        <Col md={4}>
          <h3 className="footer-heading footer-mission-heading">
            Our Mission
          </h3>

          <img
            src={airplane}
            alt="airplane"
            className="footer-image"
          />

          <p>
            We help you find the perfect travel tour at the best price, tailored
            to your unique preferences.
          </p>
        </Col>

        <Col md={4}>
          <div className="footer-centered footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <p><i className="fa-solid fa-phone"></i> (+355) 686044497</p>
            <p><i className="fa-brands fa-instagram"></i> global.wingsTravel</p>
            <p><i className="fa-brands fa-facebook"></i> Global Wings Travel Tour</p>
            <p><i className="fa-sharp fa-regular fa-location-dot"></i> global.wings@hotmail.com</p>
          </div>
        </Col>

        <Col md={4}>
          <div className="footer-centered">
            <h3 className="footer-heading">Global Wings</h3>
            <p>Your Gateway to the World</p>
            <img
              src={agent}
              alt="agent"
              className="footer-image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
