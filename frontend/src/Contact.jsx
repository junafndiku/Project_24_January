import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";
import together from "./images/together.png";

const Contact = () => {
  const [contact, setContact] = useState({
    Name: "",
    phone: "",
    email: "",
    region: "",
    comment: "",
  });

  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ---------------- VALIDATION ----------------
  const checkContact = () => {
    if (
      contact.Name.trim() === "" ||
      contact.phone.trim() === "" ||
      contact.email.trim() === "" ||
      contact.region.trim() === "" ||
      contact.comment.trim() === ""
    ) {
      setMsg("Please fill in all the fields!");
      return false;
    }

    setMsg("Thank you for reaching out to us! We will get back to you soon!");
    return true;
  };

  // ---------------- INPUT HANDLER ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!checkContact()) return;

    try {
      await axios.post("http://localhost:5000/addContact", contact);
      console.log("Contact saved");

      // Reset form after successful submit
      setContact({
        Name: "",
        phone: "",
        email: "",
        region: "",
        comment: "",
      });
    } catch (err) {
      console.error("Error saving contact:", err);
      setMsg("Something went wrong. Please try again.");
    }
  };

  // ---------------- ALERT STYLE ----------------
  const decideAlert = () => {
    return msg === "Please fill in all the fields!" ? "danger" : "success";
  };

  return (
    <Container className="helper-container">
      <h4 style={{ fontWeight: "bold" }}>
        Interested in partnering with us or exploring new business opportunities?
        We’re excited to hear your ideas and collaborate!
      </h4>

      <h6>
        Please leave your contact information and a brief description of your
        proposal. Our team will get back to you promptly.
      </h6>

      <img src={together} className="imgStyle" alt="Together" />

      {/* ---------------- FORM ---------------- */}
      <Form className="helper-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name and Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Smith"
            name="Name"
            value={contact.Name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="(+355) 686044497"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Please select your target region</Form.Label>
          <Form.Select
            name="region"
            value={contact.region}
            onChange={handleChange}
          >
            <option value="">Open this select menu</option>
            <option value="Albania">Albania</option>
            <option value="Europe">Europe</option>
            <option value="Middle East">Middle East</option>
            <option value="Far East">Far East</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Proposal / Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            value={contact.comment}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* ---------------- ALERT ---------------- */}
      {submitted && (
        <Alert className="mt-3" variant={decideAlert()}>
          {msg}
        </Alert>
      )}
    </Container>
  );
};

export default Contact;

