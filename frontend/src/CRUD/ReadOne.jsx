import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Card, Image, ListGroup } from "react-bootstrap";
import { UserContext } from "../Auth/UserContext";

const ReadOne = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();
  const { userInfo } = useContext(UserContext); // authentication

  // Fetch single package
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/readOne/${id}`);
        setItem(res.data);
      } catch (err) {
        console.error("Item not read: ", err);
      }
    };
    fetchItem();
  }, [id]);

  // Delete package (only for admin)
  const handleDelete = async (id) => {
    if (!userInfo || !userInfo.email) return; // block if not admin
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`, {
        withCredentials: true, // send cookie for auth verification
      });
      nav("/readAll");
    } catch (err) {
      console.error("Not deleted: ", err);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      {item && (
        <Card style={{ width: "30rem", margin: "0 auto" }}>
          <Image
            src={`http://localhost:5000/images/${item.packageImage}`}
            style={{ height: "300px", objectFit: "cover" }}
            rounded
          />
          <Card.Body>
            <Card.Title>{item.packageName}</Card.Title>
            <Card.Text>{item.packageDescription}</Card.Text>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>Destination: {item.packageDestination}</ListGroup.Item>
            <ListGroup.Item>Trip duration: {item.packageDays} days</ListGroup.Item>
            <ListGroup.Item>Transport: {item.packageTransportation}</ListGroup.Item>
            <ListGroup.Item>Price: {item.packagePrice} $</ListGroup.Item>
          </ListGroup>

          {/* Only show Update/Delete if admin is logged in */}
          {userInfo && userInfo.email && (
            <Card.Body className="text-center">
              <Button
                variant="warning"
                href={`/update/${item._id}`}
                className="me-2"
              >
                Update
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </Button>
            </Card.Body>
          )}
        </Card>
      )}
    </Container>
  );
};

export default ReadOne;

