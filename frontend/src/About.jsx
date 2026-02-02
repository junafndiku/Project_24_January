import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import "./About.css";
import passport from "./images/chicago.jpg";
import team from "./images/marvin.jpg";
import destination from "./images/relax.jpg";


const About = () => {

    return (

        <Container className="mb-5 mt-5">
            <h3 style={{textAlign:"center", fontWeight: "bold", marginTop: "30px",fontSize:"40px", marginBottom: "30px"}}>Who we are</h3>
        <Container className="containerStyle">
            
            <Row className="g-5 justify-content-center">
  <Col xs={12} md={5} lg={4}>
    <Card className="about-card">
      <Card.Img variant="top" src={passport} className="cardImage" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>
          Connecting You to the World
        </Card.Title>
        <Card.Text>
          Founded in 2017, our travel agency creates unforgettable journeys
          through carefully crafted tours. Partnering with top resorts
          worldwide, we ensure comfort, quality, and personalized experiences.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={12} md={5} lg={4}>
    <Card className="about-card">
      <Card.Img variant="top" src={team} className="cardImage" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>Our team</Card.Title>
        <Card.Text>
          Our experienced, multilingual team is dedicated to crafting seamless
          and personalized travel experiences from planning to execution.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col xs={12} md={5} lg={4}>
    <Card className="about-card">
      <Card.Img variant="top" src={destination} className="cardImage" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>
          Comprehensive Travel Services
        </Card.Title>
        <Card.Text>
          <ul className="list-unstyled">
            <li>✈️ Booking Flights: Hassle-free airline reservations for domestic and international travel.</li>
            <li>🏨 Hotel & Resort Reservations: Access to some of the world’s finest accommodations.</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>

        </Container>
        </Container>

    )
}

export default About;