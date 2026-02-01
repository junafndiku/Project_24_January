import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Container,
  Table,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";

const ReadAllPackages2 = () => {
  const [items, setItems] = useState([]);
  const [contacts, setContacts] = useState([]);
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    fetchPackages();
    fetchContacts();
  }, []);

  const fetchPackages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/readAll/", {
        withCredentials: true,
      });
      setItems(res.data);
    } catch (err) {
      console.log("Packages not fetched", err);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/contacts", {
        withCredentials: true,
      });
      setContacts(res.data);
    } catch (err) {
      console.log("Contacts not fetched", err);
    }
  };

  /* ================= DELETE PACKAGE ================= */

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`, {
        withCredentials: true,
      });
      fetchPackages();
    } catch (err) {
      console.log("Delete failed", err);
    }
  };

  /* ================= RENDER ================= */

  return (
    <Container className="mt-5">
      {/* ========== PACKAGES TABLE ========== */}
      <h2 className="text-center mb-4">📦 Travel Packages</h2>

      {items.length === 0 ? (
        <p className="text-center">No packages available</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Region</th>
              <th>Destination</th>
              <th>Days</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.packageName}</td>
                <td>{item.packageRegion}</td>
                <td>{item.packageDestination}</td>
                <td>{item.packageDays}</td>
                <td>{item.packagePrice} €</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => navigate(`/update/${item._id}`)}
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* ========== CONTACT REQUESTS ========== */}
      <h2 className="text-center mt-5 mb-4">📩 Contact Requests</h2>

      <Row>
        {contacts.length === 0 ? (
          <p className="text-center">No contact requests yet</p>
        ) : (
          contacts.map((contact) => (
            <Col md={4} className="mb-4" key={contact._id}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{contact.Name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {contact.email}
                  </Card.Subtitle>

                  <Card.Text>
                    <strong>Phone:</strong> {contact.phone} <br />
                    <strong>Region:</strong> {contact.region} <br />
                    <strong>Message:</strong> {contact.comment}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ReadAllPackages2;
