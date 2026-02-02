import React, { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Contact.css";


const Reservation = () => {
  const location = useLocation();
  const { packageName, packageRegion } = location.state || {};

  const [booking, setBooking] = useState({
    Name: "",
    Surname: "",
    Age: "",
    departureDay: "",
    arrivalDay: "",
    numberAdults: 1,
    numberChildren: 0,
    accommodation: "",
    numberRooms: 1,
    phone: "",
    email: "",
    comment: "",
    packageName: packageName || "",
    packageRegion: packageRegion || "",
  });

  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ---------------- VALIDATION ----------------
  const checkBooking = () => {
    const requiredFields = ["Name", "Surname", "phone", "email", "departureDay", "arrivalDay", "accommodation"];
    const isMissing = requiredFields.some(field => !booking[field] || booking[field].toString().trim() === "");
    const departureDate = new Date(booking.departureDay);
    const arrivalDate = new Date(booking.arrivalDay);

    if(arrivalDate < departureDate){
      setMsg("Arrival date cannot be before departure date!");
      return false;
    }

    if (isMissing) {
      setMsg("Please fill in all the required fields!");
      return false;
    }
    
    setMsg("Reservation submitted successfully!");
    return true;
  };

  // ---------------- INPUT HANDLER ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!checkBooking()) return;

    try {
      await axios.post("http://localhost:5000/reservation", booking);
      console.log("Reservation saved");
      setBooking({Name: "",
    Surname: "",
    Age: "",
    departureDay: "",
    arrivalDay: "",
    numberAdults: 1,
    numberChildren: 0,
    accommodation: "",
    numberRooms: 1,
    phone: "",
    email: "",
    comment: "",
    packageName: packageName || "",
    packageRegion: packageRegion || "",

      })
    } catch (err) {
      console.error("Error saving reservation:", err);
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="helper-container mt-5">
      <h2 className="text-center mb-4">Book Your Trip</h2>

      <Form className="helper-form p-4 border rounded shadow-sm" onSubmit={handleSubmit}>
        
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="Name" value={booking.Name} onChange={handleChange} />
          </Col>
          <Col md={6}>
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" name="Surname" value={booking.Surname} onChange={handleChange} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name="Age" value={booking.Age} onChange={handleChange} />
          </Col>
          <Col md={4}>
            <Form.Label>Adults</Form.Label>
            <Form.Control type="number" name="numberAdults" value={booking.numberAdults} onChange={handleChange} />
          </Col>
          <Col md={4}>
            <Form.Label>Children</Form.Label>
            <Form.Control type="number" name="numberChildren" value={booking.numberChildren} onChange={handleChange} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Departure Date</Form.Label>
            <Form.Control type="date" name="departureDay" value={booking.departureDay} onChange={handleChange} />
          </Col>
          <Col md={6}>
            <Form.Label>Arrival Date</Form.Label>
            <Form.Control type="date" name="arrivalDay" value={booking.arrivalDay} onChange={handleChange} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Accommodation</Form.Label>
            <Form.Select name="accommodation" value={booking.accommodation} onChange={handleChange}>
              <option value="">Choose...</option>
              <option value="Hotel">Hotel</option>
              <option value="Hostel">Hostel</option>
              <option value="Vacation Rental">Vacation Rental</option>
            </Form.Select>
          </Col>
          <Col md={6}>
            <Form.Label>Number of Rooms</Form.Label>
            <Form.Control type="number" name="numberRooms" value={booking.numberRooms} onChange={handleChange} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phone" value={booking.phone} onChange={handleChange} />
          </Col>
          <Col md={6}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" value={booking.email} onChange={handleChange} />
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>Additional Comments</Form.Label>
          <Form.Control as="textarea" rows={3} name="comment" value={booking.comment} onChange={handleChange} />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit" size="lg">Confirm Reservation</Button>
        </div>
      </Form>

      {submitted && <Alert className="mt-3" variant={msg.includes("Please") || msg.includes("Arrival") ? "danger" : "success"}>{msg}</Alert>}
    </Container>
  );
};

export default Reservation;


