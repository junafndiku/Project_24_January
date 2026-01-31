import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";

const UserProfile = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/readAll/", {
          withCredentials: true,
        });
        setItems(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Items not read:", err);
        setItems([]);
      }
    };
    fetchItems();
  }, []);

  return (
    <Container>
      <h1 className="mb-4 mt-4 text-center">Admin Dashboard - All Packages</h1>
      {items.length === 0 ? (
        <p>No packages found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Package Name</th>
              <th>Description</th>
              <th>Region</th>
              <th>Destination</th>
              <th>Duration</th>
              <th>Transport</th>
              <th>Price</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.packageName}</td>
                <td>{item.packageDescription}</td>
                <td>{item.packageRegion}</td>
                <td>{item.packageDestination}</td>
                <td>{item.packageDays} days</td>
                <td>{item.packageTransportation}</td>
                <td>{item.packagePrice} $</td>
                <td>
                  <Button variant="primary" href={`/readOne/${item._id}`}>
                    Read
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default UserProfile;
