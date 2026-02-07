import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";
import "./Dashboard.css";

const ReadAllPackages = () => {
  const [items, setItems] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [bookings, setBookings] = useState([]);
  const { userInfo } = useContext(UserContext);
  const nav = useNavigate();

  // Fetch packages
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/readAll/");
        setItems(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Items not read:", err);
      }
    };
    fetchItems();
  }, []);

  // Fetch inquiries
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/inquiry");
        setInquiries(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.log("Error fetching inquiries:", err);
      }
    };
    fetchInquiries();
  }, []);

  // Fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/readBooking");
        setBookings(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };
    fetchBookings();
  }, []);

  // Delete handlers
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this package?")) return;
    try {
      await axios.delete(`http://localhost:5000/delete/${id}/`, { withCredentials: true });
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Item not deleted:", err);
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;
    try {
      await axios.delete(`http://localhost:5000/inquiry/${id}/`);
      setInquiries(inquiries.filter((inq) => inq._id !== id));
    } catch (err) {
      console.error("Inquiry not deleted:", err);
    }
  };

  const handleDeleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      await axios.delete(`http://localhost:5000/readBooking/${id}/`);
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Booking not deleted:", err);
    }
  };

  return (
    <Container className="mt-5 mb-5">

      {/* ================== Packages ================== */}
      <h1 className="mb-4 text-center">📦 Travel Packages</h1>
      {items.length === 0 ? (
        <p className="text-center">No packages available</p>
      ) : (
        <Row className="g-4">
          {items.map((item) => (
            <Col key={item._id} xs={12} md={6} lg={4}>
              <Card className="dashboard-card h-100">
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/images/${item.packageImage}`}
                  className="dashboard-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.packageName}</Card.Title>
                  <Card.Text className="flex-grow">{item.packageDescription}</Card.Text>
                  <div className="mb-2">
                    <Badge bg="info" className="me-2">{item.packageRegion}</Badge>
                    <Badge bg="secondary">{item.packageDestination}</Badge>
                  </div>
                  <div className="d-flex justify-content-between mt-auto">
                    {userInfo?.email && (
                      <>
                        <Button variant="warning" size="sm" onClick={() => nav(`/update/${item._id}`)}>Update</Button>
                        <Button variant="danger" size="sm" onClick={() => handleDelete(item._id)}>Delete</Button>
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* ================== Collaboration Offers ================== */}
      <h1 className="mb-4 mt-5 text-center">📨 Collaboration Offers</h1>
      {inquiries.length === 0 ? (
        <p className="text-center">No inquiries yet</p>
      ) : (
        <Row className="g-4">
          {inquiries.map((inq) => (
            <Col key={inq._id} xs={12} md={6} lg={4}>
              <Card className="dashboard-card h-100">
                <Card.Header>{inq.company || "Collaboration"}</Card.Header>
                <Card.Body className="d-flex flex-column">
                  <div className="flex-grow">
                    <p><strong>Name:</strong> {inq.Name}</p>
                    <p><strong>Email:</strong> {inq.email}</p>
                    <p><strong>Phone:</strong> {inq.phone}</p>
                    <p><strong>Region:</strong> {inq.region}</p>
                    <p><strong>Comment:</strong> {inq.comment}</p>
                  </div>
                  {userInfo?.email && (
                    <Button variant="danger" size="sm" onClick={() => handleDeleteInquiry(inq._id)}>Delete</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* ================== Bookings ================== */}
      <h1 className="mb-4 mt-5 text-center">🛎️ Customer Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-center">No bookings yet</p>
      ) : (
        <Row className="g-4">
          {bookings.map((b) => (
            <Col key={b._id} xs={12} md={6} lg={4}>
              <Card className="dashboard-card h-100">
                <Card.Header>Booking for {b.packageName}</Card.Header>
                <Card.Body className="d-flex flex-column">
                  <div className="flex-grow">
                    <p><strong>Name:</strong> {b.Name} {b.Surname}</p>
                    <p><strong>Age:</strong> {b.Age}</p>
                    <p><strong>Departure:</strong> {b.departureDay}</p>
                    <p><strong>Arrival:</strong> {b.arrivalDay}</p>
                    <p><strong>Adults:</strong> {b.numberAdults}</p>
                    <p><strong>Children:</strong> {b.numberChildren}</p>
                    <p><strong>Accommodation:</strong> {b.accommodation}</p>
                    <p><strong>Rooms:</strong> {b.numberRooms}</p>
                    <p><strong>Phone:</strong> {b.phone}</p>
                    <p><strong>Email:</strong> {b.email}</p>
                    <p><strong>Destination:</strong> {b.packageName}</p>
                    <p><strong>Region:</strong> {b.packageRegion}</p>
                    <p><strong>Comment:</strong> {b.comment}</p>
                  </div>
                  {userInfo?.email && (
                    <Button variant="danger" size="sm" onClick={() => handleDeleteBooking(b._id)}>Delete</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

    </Container>
  );
};

export default ReadAllPackages;


