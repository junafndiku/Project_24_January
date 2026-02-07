import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";
import together from "./images/rod.jpg";

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
      contact.comment.trim() === "" ||
      contact.company.trim() === ""
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

      setContact({
        Name: "",
        phone: "",
        email: "",
        company: "",
        region: "",
        comment: "",
      });
    } catch (err) {
      setMsg("Something went wrong. Please try again.");
    }
  };

  const decideAlert = () =>
    msg === "Please fill in all the fields!" ? "danger" : "success";

  return (
    <Container className="contact-page">
      {/* HEADER */}
      <div className="contact-header">
        <div className="contact-text">
          <h2>Let’s Work Together</h2>
          <p>
            Interested in partnering with us or exploring new business
            opportunities? Leave your details and our team will contact you
            shortly.
          </p>
        </div>

        <img src={together} alt="Together" className="contact-image" />
      </div>

      {/* FORM CARD */}
      <div className="contact-card">
        <Form onSubmit={handleSubmit}>
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
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your company name"
              name="company"
              value={contact.company}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Target region</Form.Label>
            <Form.Select
              name="region"
              value={contact.region}
              onChange={handleChange}
            >
              <option value="">Select region</option>
              <option value="Albania">Albania</option>
              <option value="Europe">Europe</option>
              <option value="Middle East">Middle East</option>
              <option value="Far East">Far East</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Proposal / Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              value={contact.comment}
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="submit-btn" type="submit">
            Send Message
          </Button>
        </Form>

        {submitted && (
          <Alert className="mt-4" variant={decideAlert()}>
            {msg}
          </Alert>
        )}
      </div>
    </Container>
  );
};

export default Contact;


