import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";

import home from "./images/home.jpg";
import location from "./images/location.png";
import helpdesk from "./images/helpdesk.png";
import first_icon from "./images/first_icon.png";
import collaboration from "./images/collaboration.png";
import calendar from "./images/calendar.png";

const Home = () => {
  return (
    <Container fluid className="p-0 home-container">
      <img src={home} alt="travel" className="hero-image" />

      <div className="hero-text">
        Let us take you away on vacation
      </div>
      <Container>
      <h2 className="textStyle">Your Trusted Travel Partner</h2>

      <Container fluid className="features-container">
        <Row className="mt-3">
          <Col xs={12} md={4} className="d-flex justify-content-center">
            <Card className="feature-card">
              <Card.Img src={first_icon} className="card-image" />
              <Card.Body>
                <Card.Text>
                  Carefully designed travel packages tailored to your preferences and travel style.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="d-flex justify-content-center">
            <Card className="feature-card">
              <Card.Img src={location} className="card-image" />
              <Card.Body>
                <Card.Text>
                  We collaborate with reliable hotels, guides, and airlines to ensure comfort and safety.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="d-flex justify-content-center">
            <Card className="feature-card">
              <Card.Img src={helpdesk} className="card-image" />
              <Card.Body>
                <Card.Text>
                  Our team is available before, during, and after your trip to assist you anytime.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

  <Container>
    </Container>

  <h2 className="textStyle">Where Partnerships Take Flight</h2>
    

  <Container className="cta-card">
  <img
    src={collaboration}
    alt="collaboration"
    className="collaboration-image"
  />
  <div className="cta-text">
    Looking to grow your business? Partner with us and explore exciting
    collaboration opportunities in the travel industry. Click
    <a href="/Contact"> here </a>
    to collaborate with us and let’s start this journey toward success together!
  </div>
</Container>

<h2 className="textStyle">Start Your Journey With Us</h2>

<Container className="cta-card">
  
  <div className="cta-text">
    Ready for your next adventure? Explore our travel tours and find the
    perfect vacation for you. Click
    <a href="/packages"> here </a>
     to start planning your trip and book your escape plan!
  </div>
  <img
    src={calendar}
    alt="calendar"
    className="collaboration-image"
  />
  </Container>
</Container>
    </Container>
  );
};

export default Home;

