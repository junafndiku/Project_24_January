import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import "./About.css";
import passport from "./images/passport.png";
import team from "./images/team.png";
import destination from "./images/destination.png";


const About = () => {

    return (

        <Container>
            <h3 style={{textAlign:"center", fontWeight: "bold", marginTop: "30px",fontSize:"40px"}}>Who we are</h3>
        <Container className="containerStyle">
            
            <Row className=" g-5 justify-content-center" >

                <Col xs={12} md={4}>
                <Card style={{ width: '18rem', height: "410px" }}>
                <Card.Img variant="top" src={passport} className="cardStyle"/>
                <Card.Body>
                <Card.Title style={{fontWeight: "bold"}}>Connecting You to the World</Card.Title>
                <Card.Text>Founded in 2017, our travel agency creates unforgettable journeys through carefully crafted tours. Partnering with top resorts worldwide, we ensure comfort, quality, and personalized experiences that leave lasting memories.
        </Card.Text>
      </Card.Body>
    </Card>
                </Col>

                <Col xs={12} md={4}>
                <Card style={{ width: '18rem',  height: "410px" }}>
                <Card.Img variant="top" src={team} className="cardStyle"/>
                <Card.Body>
                <Card.Title style={{fontWeight: "bold"}}>Our team</Card.Title>
                <Card.Text>Our experienced, multilingual team is dedicated to crafting seamless and personalized travel experiences. With deep knowledge and passion for exploration, we ensure every journey is memorable from planning to execution.
        </Card.Text>
      </Card.Body>
    </Card>
                </Col>

                <Col xs={12} md={4}>
                <Card style={{ width: '18rem', height: "410px" }}>
                <Card.Img variant="top" src={destination} className=" cardStyle" />
                <Card.Body>
                <Card.Title style={{fontWeight: "bold"}}>Comprehensive Travel Services for an Unforgettable Journey</Card.Title>
                <Card.Text>
                    <div style={{listStyleType: "none"}}>
                    <li>✈️Booking Flights: Hassle-free airline reservations for domestic and international travel.</li>
                    <li>🏨Hotel & Resort Reservations: Access to some of the world’s finest accommodations.</li>
                    </div>
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