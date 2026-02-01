import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginStyle.css";

const Register = () => {

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [variant, setVariant] = useState("success");
  const nav = useNavigate();
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    await axios
      .post("http://localhost:5000/register/", newUser)
      .then((res) => nav("/login"))
      setMsg("Registration successful! Please log in!");
      setVariant("success")
    }
      
      catch(err){
        console.log("Error not register" + err);
        setMsg("Registration failed. Please try again.");
        setVariant("danger")
      }
  };

  return (
    <Container className="helper-container">
      <h1>Register Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={newUser.username}
            name="username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={newUser.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={newUser.password}
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p>{msg && <Alert variant={variant} className="mt-3">{msg}</Alert>}</p>
      </Form>
    </Container>
  );
};

export default Register;