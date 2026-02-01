import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import airplane from './images/airplane.png';
import agent from './images/agent.png';

const Footer = () => {

    const containerStyle = {
        backgroundColor: "#3c54f0",
        display: "flex",
        flexDirection: "column",
        minHeight: "50px",
        
        bottom: "0",
        color: "white",
        fontStyle: "oblique",
        fontSize: "13px",
        padding: "10px 50px", // added more padding for left/right edges
    }

    const imgStyle = {
        height: "100px",
        width: "auto",
        marginLeft: "15%"
    }

    
    return (
        <Container fluid style={containerStyle}>
            {/* g-4 adds equal spacing between columns */}
            <Row className="g-4 justify-content-between">
                <Col md={4}>
                    <h3 style={{ fontWeight: "bold", marginLeft: "10%" }}>Our Mission</h3>
                    <img src={airplane} style={imgStyle} alt="airplane"/>
                
                    <p>
                        We help you find the perfect travel tour at the best price, tailored to your unique preferences. 
                    </p>
                    
                </Col>

                <Col md={4}>
    <div style={{ margin: "0 auto", width: "fit-content" }}>
        <h3 style={{ fontWeight: "bold", marginBottom: "11px" }}>Contact</h3>
        <p><i className="fa-solid fa-phone"></i> (+355) 686044497</p>
        <p><i className="fa-brands fa-whatsapp"></i> (+355) 696044498</p>
        <p><i className="fa-brands fa-instagram"></i> global.wingsTravel</p>
        <p><i className="fa-brands fa-facebook"></i> Global Wings Travel Tour</p>
        <p><i className="fa-sharp fa-regular fa-location-dot"></i> global.wings@hotmail.com</p>
    </div>
</Col>

                <Col md={4}>
                <div style={{ margin: "0 auto", width: "fit-content" }}>
                    <h3 style={{ fontWeight: "bold" }}>Global Wings</h3>
                    <p>
                        Your Gateway to the World
                    </p>
                    <img src={agent} style={imgStyle}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
