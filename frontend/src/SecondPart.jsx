import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import travelimg from "./images/mapi.jpg";
import travel2 from "./images/newyork.jpg";
import travel3 from "./images/lexi.jpg";

const SecondPart = () => {
  const titleStyle = {
    fontWeight: "800",
    color: "#0a0a0a",
    fontSize: "2.2rem",
    marginBottom: "0.75rem",
  };

  const accentLine = {
    width: "60px",
    height: "4px",
    background: "#0096ff",
    borderRadius: "2px",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.15rem",
    lineHeight: "1.7",
    color: "black",
    fontWeight: "400",
  };

  const imageStyle = {
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0, 150, 255, 0.2)",
    width: "100%",
    height: "320px",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  };

  const cardStyle = {
    border: "none",
    borderRadius: "22px",
    padding: "2.5rem",
    marginBottom: "4rem",
    background: "linear-gradient(135deg, #f8fbff, #ffffff)",
    boxShadow: "0 12px 35px rgba(0, 150, 255, 0.12)",
  };

  return (
    <Container className="my-5">

      {/* SECTION 1 */}
      <Card style={cardStyle}>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={titleStyle}>Connecting You to the World</h2>
            <div style={accentLine}></div>

            <p style={paragraphStyle}>
              Looking to grow your business? Partner with us and explore exciting
              collaboration opportunities in the travel industry. Together, we
              create meaningful connections that turn journeys into long-term
              success stories.
            </p>

            <Button variant="primary" href="/addContact">
              🤝 Partner With Us
            </Button>
          </Col>

          <Col md={6} className="text-center">
            <Image
              src={travelimg}
              fluid
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Col>
        </Row>
      </Card>

      {/* SECTION 2 */}
      <Card style={cardStyle}>
        <Row className="align-items-center flex-md-row-reverse">
            <Col md={6}>
            <h2 style={titleStyle}>Why Choose Us</h2>
            <div style={accentLine}></div>

            <p style={paragraphStyle}>
              With years of experience in the travel industry, we combine local
        knowledge with international partnerships to deliver reliable,
        high-quality travel solutions. Our focus is on trust, flexibility, and
        creating journeys that truly match your expectations.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src={travel2}
              fluid
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Col>

        </Row>
      </Card>

      {/* SECTION 3 */}
      <Card style={cardStyle}>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={titleStyle}>Our Services</h2>
            <div style={accentLine}></div>

            <p style={paragraphStyle}>
              Ready for your next adventure? Discover carefully curated tours,
              personalized itineraries, and seamless travel experiences designed
              just for you.
            </p>

            <Button variant="success" href="/packages">
              ✈️ Explore Our Packages
            </Button>
          </Col>

          <Col md={6} className="text-center">
            <Image
              src={travel3}
              fluid
              style={imageStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SecondPart;
