import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const LogIn = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [userLog, setUserLog] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();

  const handleChange = (e) => {
    setUserLog({ ...userLog, [e.target.name]: e.target.value });
  };

  // If admin already logged in, redirect to admin dashboard (ReadAll)
  useEffect(() => {
    if (userInfo && userInfo.id) {
      nav("/readAll");
    }
  }, [userInfo, nav]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Login request
      await axios.post(
        "http://localhost:5000/admin/login",
        userLog,
        { withCredentials: true }
      );

      // Fetch admin info after login
      const res = await axios.get("http://localhost:5000/admin/me", {
        withCredentials: true,
      });

      setUserInfo(res.data);
      nav("/readAll"); // redirect to admin page
    } catch (err) {
      console.log("Login failed:", err.response?.data || err.message);
      alert("Invalid email or password");
    }
  };

  return (
    <Container>
      <h1>Admin Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={userLog.email}
            name="email"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={userLog.password}
            name="password"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LogIn;

