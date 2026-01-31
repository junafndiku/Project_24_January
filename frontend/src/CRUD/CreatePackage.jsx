import React, { useState } from "react";
import { Container, Form, Button, Image, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreatePackage.css";

const CreatePackage = () => {
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
  const [uploadedImage, setUploadedImage] = useState(null);
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewItem({ ...newItem, packageImage: e.target.files[0] });
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };

  // Validation
  const checkPackage = () => {
    for (const key in newItem) {
      if (!newItem[key]) {
        setMsg("Please fill in all the fields!");
        return false;
      }
    }
    setMsg("Package created successfully!");
    return true;
  };

  const decideAlert = () => (msg === "Please fill in all the fields!" ? "danger" : "success");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!checkPackage()) return;

    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => formData.append(key, value));

    try {
      await axios.post("http://localhost:5000/create/", formData);
      navigate("/readAll/");
    } catch (err) {
      console.error("Server error: Item not created", err);
      setMsg("Server error: Could not create package");
    }

    setNewItem({
      packageName: "",
      packageDescription: "",
      packageRegion: "",
      packageDestination: "",
      packageDays: "",
      packageTransportation: "",
      packagePrice: "",
      packageImage: null,
    });
    setUploadedImage(null);
  };

  return (
    <Container className="create-package-container">
      <h1 className="form-title">Create Package</h1>

      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Package Name */}
        <Form.Group className="mb-3">
          <Form.Label>Name of tour package</Form.Label>
          <Form.Control
            type="text"
            name="packageName"
            value={newItem.packageName}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Description */}
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

        {/* Region */}
        <Form.Group className="mb-3">
          <Form.Select name="packageRegion" value={newItem.packageRegion} onChange={handleChange}>
            <option value="">-- Select a region --</option>
            <option value="Albania">Albania</option>
            <option value="Europe">Europe</option>
            <option value="Middle East">Middle East</option>
            <option value="Far East">Far East</option>
          </Form.Select>
        </Form.Group>

        {/* Destination */}
        <Form.Group className="mb-3">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            name="packageDestination"
            value={newItem.packageDestination}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Days */}
        <Form.Group className="mb-3">
          <Form.Label>Days of stay</Form.Label>
          <Form.Control
            type="number"
            name="packageDays"
            value={newItem.packageDays}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Transportation */}
        <Form.Group className="mb-3">
          <Form.Select
            name="packageTransportation"
            value={newItem.packageTransportation}
            onChange={handleChange}
          >
            <option value="">-- Select an option --</option>
            <option value="airplane">Airplane</option>
            <option value="train">Train</option>
            <option value="private car">Private car</option>
            <option value="cruise">Cruise</option>
          </Form.Select>
        </Form.Group>

        {/* Price */}
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="packagePrice"
            value={newItem.packagePrice}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Image */}
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" accept=".jpeg,.png,.jpg" onChange={handlePhoto} />
        </Form.Group>

        {/* Image Preview */}
        {uploadedImage && (
          <div className="preview-column">
            <h5>Preview Image</h5>
            <Image src={uploadedImage} alt="Preview" rounded className="preview-image" />
          </div>
        )}

        <Button variant="primary" type="submit" className="buttonModel mt-3">
          Submit
        </Button>

        {submitted && msg && (
          <Alert variant={decideAlert()} className="mt-3">
            {msg}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default CreatePackage;
