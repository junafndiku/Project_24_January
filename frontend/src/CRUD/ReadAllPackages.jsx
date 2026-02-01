import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Table, Button, Card, ListGroup } from "react-bootstrap"; // <- added Card, ListGroup
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";

const ReadAllPackages = () => {
  const [items, setItems] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [bookings, setBookings] = useState([]);
  const { userInfo } = useContext(UserContext);
  const nav = useNavigate();

  // ---------------- Fetch packages ----------------
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/readAll/");
        setItems(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Items not read:", err);
        setItems([]);
      }
    };
    fetchItems();
  }, []);

  // ---------------- Fetch inquiries ----------------
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await axios.get("http://localhost:5000/inquiry");
        setInquiries(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.log("Error fetching inquiries:", err);
        setInquiries([]);
      }
    };
    fetchInquiries();
  }, []);

  // ---------------- Fetch bookings ----------------
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/readBooking");
        setBookings(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setBookings([]);
      }
    };
    fetchBookings();
  }, []);

  // ---------------- Delete handlers ----------------
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

      {/* ---------------- Packages Table ---------------- */}
      <h1 className="mb-4 text-center">📦 Travel Packages</h1>
      {items.length === 0 ? (
        <p className="text-center">No packages available</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Region</th>
              <th>Destination</th>
              <th>Duration</th>
              <th>Transport</th>
              <th>Price</th>
              {userInfo?.email && (
                <>
                  <th>Update</th>
                  <th>Delete</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.packageName}</td>
                <td>{item.packageDescription}</td>
                <td>{item.packageRegion}</td>
                <td>{item.packageDestination}</td>
                <td>{item.packageDays} days</td>
                <td>{item.packageTransportation}</td>
                <td>{item.packagePrice} $</td>
                {userInfo?.email && (
                  <>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => nav(`/update/${item._id}`)}
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
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* ---------------- Bookings Table ---------------- */}
      <h1 className="mb-4 mt-5 text-center">📨 Collaboration offers</h1>
      {bookings.length === 0 ? (
        <p className="text-center">No inquiries yet</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Region</th>
              <th>Comment</th>
              {userInfo?.email && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.Name}</td>
                <td>{b.Surname}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.packageRegion}</td>
                <td>{b.comment}</td>
                {userInfo?.email && (
                  <td>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleDeleteBooking(b._id)}
                    >
                      Done
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* ---------------- Bookings Cards ---------------- */}
      <h1 className="mb-4 mt-5 text-center">🛎️ Customer Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-center">No bookings yet</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {bookings.map((b) => (
            <Card key={b._id} style={{ width: "22rem" }}>
              <Card.Header>Booking for {b.packageName}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Name:</strong> {b.Name} {b.Surname}</ListGroup.Item>
                <ListGroup.Item><strong>Age:</strong> {b.Age}</ListGroup.Item>
                <ListGroup.Item><strong>Departure Day:</strong> {b.departureDay}</ListGroup.Item>
                <ListGroup.Item><strong>Arrival Day:</strong> {b.arrivalDay}</ListGroup.Item>
                <ListGroup.Item><strong>Number of Adults:</strong> {b.numberAdults}</ListGroup.Item>
                <ListGroup.Item><strong>Number of Children:</strong> {b.numberChildren}</ListGroup.Item>
                <ListGroup.Item><strong>Accommodation:</strong> {b.accommodation}</ListGroup.Item>
                <ListGroup.Item><strong>Number of rooms:</strong> {b.numberRooms}</ListGroup.Item>
                <ListGroup.Item><strong>Phone:</strong> {b.phone}</ListGroup.Item>
                <ListGroup.Item><strong>Email:</strong> {b.email}</ListGroup.Item>
                <ListGroup.Item><strong>Destination:</strong> {b.packageName}</ListGroup.Item>
                <ListGroup.Item><strong>Region:</strong> {b.packageRegion}</ListGroup.Item>
                <ListGroup.Item><strong>Comment:</strong> {b.comment}</ListGroup.Item>
                {userInfo?.email && (
                  <ListGroup.Item>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteBooking(b._id)}
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          ))}
        </div>
      )}

    </Container>
  );
};

export default ReadAllPackages;
