import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import PackageInfo from "./PackageInfo";
import { useParams } from "react-router-dom";

const ReadTours = () => {
  const [items, setItems] = useState([]);
  
  // This extracts "Europe" from /readByRegion/Europe
  const { region } = useParams(); 

  useEffect(() => {
    if (!region) return;

    const fetchPackages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/readByRegion/${region}`
        );
        setItems(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.log("Items not read:", err);
      }
    };

    fetchPackages();
  }, [region]);

  return (
    <Container className="mt-5">
      <h2 className="mb-5 text-center">
        {region ? `${region} Tours` : "No tours to show"}
      </h2>

      {items.length === 0 ? (
        <p className="text-center fs-5 mt-4">
          No travel tours to show.
        </p>
      ) : (
        <Row className="justify-content-center">
          {items.map((item) => (
            <Col
              key={item._id}
              className="mb-5 d-flex justify-content-center"
              xs={12}   // iPhone SE & small devices: 1 per row
              sm={6}    // small devices and up: 2 per row
              md={4}    // medium devices and up: 3 per row
              
            >
              <PackageInfo {...item} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ReadTours;


