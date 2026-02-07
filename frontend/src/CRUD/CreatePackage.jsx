import React, { useState, useContext } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreatePackage.css";
import { UserContext } from "../Auth/UserContext";

const CreatePackage = () => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const [newItem, setNewItem] = useState({
    packageName: "",
    packageDescription: "",
    packageRegion: "",
    packageDestination: "",
    packageDays: "",
    packageTransportation: "",
    packagePrice: "",
    packageImage: null,
  });

  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewItem({ ...newItem, packageImage: e.target.files[0] });
  };

  const checkPackage = () => {
    for (const key in newItem) {
      if (!newItem[key]) {
        setMsg("Please fill in all the fields.");
        return false;
      }
    }
    setMsg("Package created successfully!");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!checkPackage()) return;

    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) =>
      formData.append(key, value)
    );

    formData.append("userId", userInfo.id);

    try {
      await axios.post("http://localhost:5000/create/", formData, {
        withCredentials: true,
      });
      navigate("/readAll/");
    } catch (err) {
      setMsg("Server error: Could not create package");
    }
  };

  if (!userInfo?.email) {
    return (
      <Container className="create-package-container">
        <p>
          You must be logged in as admin. <a href="/login">Login</a>
        </p>
      </Container>
    );
  }

  return (
    <Container className="create-package-container">
      <h1 className="form-title">Create Travel Package</h1>

      <Form
        className="create-package-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <Form.Group className="mb-3">
          <Form.Label>Package Name</Form.Label>
          <Form.Control
            name="packageName"
            value={newItem.packageName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="packageDescription"
            value={newItem.packageDescription}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Region</Form.Label>
          <Form.Select
            name="packageRegion"
            value={newItem.packageRegion}
            onChange={handleChange}
          >
            <option value="">-- Select a region --</option>
            <option value="Albania">Albania</option>
            <option value="Europe">Europe</option>
            <option value="Middle East">Middle East</option>
            <option value="Far East">Far East</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            name="packageDestination"
            value={newItem.packageDestination}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Days of stay</Form.Label>
          <Form.Control
            type="number"
            name="packageDays"
            value={newItem.packageDays}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Transportation</Form.Label>
          <Form.Select
            name="packageTransportation"
            value={newItem.packageTransportation}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="airplane">Airplane</option>
            <option value="train">Train</option>
            <option value="private car">Private car</option>
            <option value="cruise">Cruise</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price (€)</Form.Label>
          <Form.Control
            type="number"
            name="packagePrice"
            value={newItem.packagePrice}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handlePhoto}
          />
        </Form.Group>

        <Button type="submit" className="submit-btn">
          Create Package
        </Button>

        {submitted && msg && (
          <Alert
            className="mt-3"
            variant={msg.includes("success") ? "success" : "danger"}
          >
            {msg}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default CreatePackage;

