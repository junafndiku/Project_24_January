import React, { useState } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
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
    packageImage: "",
  });

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewItem({ ...newItem, packageImage: e.target.files[0] });
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await axios.post("http://localhost:5000/create/", formData);
      console.log(res.data);
      navigate("/readAll/");
    } catch (err) {
      console.log("Error server, Item not created " + err);
    }
  };

  return (
    <Container className="create-package-container">
      <div>
          <h1 className="form-title">Create</h1>

          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group className="mb-3">
              <Form.Label>Name of tour package</Form.Label>
              <Form.Control
                type="text"
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
              <Form.Select
                name="packageRegion"
                value={newItem.packageRegion}
                onChange={handleChange}
                required
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
                type="text"
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
              <Form.Select
                name="packageTransportation"
                value={newItem.packageTransportation}
                onChange={handleChange}
                required
              >
                <option value="">-- Select an option --</option>
                <option value="Airplane">Airplane</option>
                <option value="Train">Train</option>
                <option value="Private car">Private car</option>
                <option value="Cruise">Cruise</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="packagePrice"
                value={newItem.packagePrice}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept=".jpeg,.png,.jpg"
                onChange={handlePhoto}
                name="packageImage"
              />
            </Form.Group>

            <div className="preview-column">
          <h1 className="preview-title">Preview Image</h1>
          {uploadedImage && (
            <Image
              src={uploadedImage}
              alt="Uploaded"
              rounded
              className="preview-image"
            />
          )}

          <div>
          <Button variant="primary" type="submit">
              Submit
            </Button>
        </div>
        </div>

          </Form>

        
      </div>
    </Container>
  );
};

export default CreatePackage;
