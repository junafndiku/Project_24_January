import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";
import together from "./images/together.png"

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    region: "",
    comments: "",
  });

  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track if form was submitted

  const checkContact = () => {
    if(contact.name==="" || contact.phone ==="" || contact.email === "" || contact.region === "" || contact.comments===""){
      setMsg("Please fiil in all the fields!")
      return false;
    }else{
      setMsg("Thank you for reaching out to us! We will get back to you soon!");
      return true;
    }
  }

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // Mark form as submitted
    if(!checkContact()){
      return;
    }
    await axios
      .post("http://localhost:5000/addContact/", contact)
      .then((res) => console.log("200 Added contact"))
      .catch((err) => console.log("Error " + err));
       setContact({
      name: "",
      phone: "",
      email: "",
      region: "",
      comments: ""
    });
  };

  const decideAlert = () => {
    if(msg==="Please fiil in all the fields!"){
      return "danger";
    }
    else{
      return "success";
    }
  }

  return (
    <Container className="helper-container">
      <h4 style={{fontWeight: "bold"}}>
        Interested in partnering with us or exploring new business opportunities?
        We’re excited to hear your ideas and collaborate!
      </h4>
      <h6>
        Please leave your contact information and a brief description of your
        proposal. Our team will get back to you promptly to discuss how we can
        work together.
      </h6>
      <img src={together} className="imgStyle"></img>

      {/* Form starts here */}
      <Form className="helper-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlName1">
          <Form.Label>Name and Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Jon Smith"
            value={contact.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlNumber1">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="(+355) 686044497"
            value={contact.phone}
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={contact.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        {/* Select starts here */}
        <Form.Label>Please select your target region</Form.Label>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            value={contact.region}
            name="region"
            onChange={handleChange}
          >
            <option>Open this select menu</option>
            <option value="1">Albania</option>
            <option value="2">Europe</option>
            <option value="3">Middle East</option>
            <option value="4">Far East</option>
          </Form.Select>
        </Form.Group>
        {/* Select ends here */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Proposal / Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={contact.comments}
            name="comments"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      {/* Form ends here */}

      {/* Alert only shows after submission */}
      {submitted && (
        <p>
          <Alert variant={decideAlert()}>
            {msg}
          </Alert>
        </p>
      )}
    </Container>
  );
};

export default Contact;
