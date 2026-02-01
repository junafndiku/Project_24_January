import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Auth/UserContext";

const ReadAllPackages = () => {
  const [items, setItems] = useState([]);
  const [inquiries, setInquiries] = useState([]);
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

  // ---------------- Delete package ----------------
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this package?")) return;

    try {
      await axios.delete(`http://localhost:5000/delete/${id}/`, {
        withCredentials: true,
      });
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Item not deleted:", err);
    }
  };

  // ---------------- Delete inquiry ----------------
  const handleDeleteInquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      await axios.delete(`http://localhost:5000/inquiry/${id}/`);
      setInquiries(inquiries.filter((inq) => inq._id !== id));
    } catch (err) {
      console.error("Inquiry not deleted:", err);
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

      {/* ---------------- Inquiries Table ---------------- */}
      <h1 className="mb-4 mt-5 text-center">📨 Customer Inquiries</h1>
      {inquiries.length === 0 ? (
        <p className="text-center">No inquiries yet</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Region</th>
              <th>Comment</th>
              {userInfo?.email && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq) => (
              <tr key={inq._id}>
                <td>{inq.Name}</td>
                <td>{inq.email}</td>
                <td>{inq.phone}</td>
                <td>{inq.region}</td>
                <td>{inq.comment}</td>
                {userInfo?.email && (
                  <td>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleDeleteInquiry(inq._id)}
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
    </Container>
  );
};

export default ReadAllPackages;
