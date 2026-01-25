import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PackageInfo from "./PackageInfo";

const ReadAllPackages = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  // read query param
  const region = new URLSearchParams(location.search).get("packageRegion");

  useEffect(() => {
    axios
      .get("http://localhost:5000/readAll/")
      .then((res) => {
        if (region) {
          const filtered = res.data.filter(
            (item) => item.packageRegion === region
          );
          setItems(filtered);
        } else {
          setItems(res.data);
        }
      })
      .catch((err) => console.log("Items not read " + err));
  }, [region]);

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">
        {region ? `${region} Tours` : "All Tours"}
      </h2>

      <Row className="justify-content-center">
        {items.map((item) => (
          <Col className="mb-5 d-flex justify-content-center" key={item._id}>
            <PackageInfo {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReadAllPackages;
