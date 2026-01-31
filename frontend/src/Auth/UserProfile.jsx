import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const allitems = async () => {
      await axios
        .get("http://localhost:5000/readAll/", { withCredentials: true })
        .then((res) => {
          const userItems = res.data.filter(
            (item) => item.userItem === userInfo.id,
          );
          setItems(userItems);
        })
        .catch((err) => console.log("Items not read " + err));
    };
    allitems();
  }, [userInfo]);

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">All Packages</h1>

      {items.length === 0 ? (
        <p className="text-center">No packages available</p>
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
