import React, { useState, useEffect } from "react";
import { Form, Button, Container, Image, Alert } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const UpdateItem = () => {

  const [item, setItem] = useState({
    packageName: "",
    packageDescription: "",
    packageRegion: "",
    packageDestination: "",
    packageDays: "",
    packageTransportation: "",
    packagePrice: "",
    packageImage: "", 
  });

  const [showImg, setShowImg] = useState(null);
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const nav = useNavigate();

  // 2. Fetch existing data
  useEffect(() => {
    const fetchOneItem = async () => {
      try {
        // Ensure there is a slash between readOne and id
        const res = await axios.get(`http://localhost:5000/readOne/${id}`);
        setItem(res.data);
        // Show current image from server as initial preview
        if (res.data.packageImage) {
          setShowImg(`http://localhost:5000/images/${res.data.packageImage}`);
        }
      } catch (err) {
        console.log("Item not read " + err);
      }
    };
    fetchOneItem();
  }, [id]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    // We update the packageImage in state with the File object
    setItem({ ...item, packageImage: e.target.files[0] });
    setShowImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 3. FormData is required for Multer to process images
    const formData = new FormData();
    Object.entries(item).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      // Endpoint must match your backend: app.patch("/update/:id/")
      await axios.patch(`http://localhost:5000/update/${id}/`, formData);
      nav("/readAll/");
    } catch (err) {
      setMsg("Error updating item: " + err.message);
      console.log("Error " + err);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Update Package</h1>
      {msg && <Alert variant="danger">{msg}</Alert>}
      
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Form.Label>Package Name</Form.Label>
          <Form.Control
            type="text"
            name="packageName"
            value={item.packageName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="packageDescription"
            value={item.packageDescription}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Region</Form.Label>
          <Form.Select
            name="packageRegion"
            value={item.packageRegion}
            onChange={handleChange}
          >
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
            value={item.packageDestination}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price ($)</Form.Label>
          <Form.Control
            type="number"
            name="packagePrice"
            value={item.packagePrice}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Update Photo</Form.Label>
          <Form.Control
            type="file"
            accept=".png, .jpg, .jpeg"
            name="packageImage"
            onChange={handlePhoto}
          />
        </Form.Group>

        {showImg && (
          <div className="mb-3">
            <p>Image Preview:</p>
            <Image src={showImg} alt="preview" style={{ width: '200px', borderRadius: '8px' }} />
          </div>
        )}

        <Button variant="warning" type="submit" className="px-5">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateItem;