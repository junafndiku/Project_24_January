import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-background">
      <Container className="footer-white-box">
        <Row>
          <Col md={4}>
            <h5>Our Mission</h5>
            <p>
              We help you find the perfect travel tour at the best price, tailored to your unique preferences.
            </p>
          </Col>

          <Col md={4}>
            <h5>Contact</h5>
            <p>Phone: (+355) 686044497</p>
            <p>WhatsApp: (+355) 696044498</p>
            <p>Instagram: global.wingsTravel</p>
            <p>Facebook: Global Wings Travel Tour</p>
            <p>Email: global.wings@hotmail.com</p>
          </Col>

          <Col md={4}>
            <h5>Global Wings</h5>
            <p>Your Gateway to the World</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
