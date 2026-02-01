import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";
import SecondPart from "./SecondPart";

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
      <SecondPart />
      
    </Container>
  );
};

export default Home;

