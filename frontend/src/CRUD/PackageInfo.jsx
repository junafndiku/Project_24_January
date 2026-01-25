import React from "react";
import { Card, Button, Image, ListGroup } from "react-bootstrap";

const PackageInfo = ({
  packageImage,
  packageName,
  packageDescription,
  packageDestination,
  packageDays,
  packageTransportation,
  packagePrice,
  packageRegion,
}) => {
  return (
    <Card style={{ width: "25rem" }}>
      <Image
        variant="top"
        src={`http://localhost:5000/images/${packageImage}`}
        style={{ height: "300px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>{packageName}</Card.Title>
        <Card.Text>{packageDescription}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>Destination: {packageDestination}</ListGroup.Item>
        <ListGroup.Item>Trip duration: {packageDays} days</ListGroup.Item>
        <ListGroup.Item>Transport: {packageTransportation}</ListGroup.Item>
        <ListGroup.Item>Price: {packagePrice} $</ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Button variant="primary">Book now</Button>
      </Card.Body>
    </Card>
  );
};

export default PackageInfo;


