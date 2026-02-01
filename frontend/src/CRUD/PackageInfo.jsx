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
    <Card style={{ width: "30rem" }}>
      <Image
        variant="top"
        src={`http://localhost:5000/images/${packageImage}`}
        style={{ height: "300px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title><strong>{packageName}</strong></Card.Title>
        <Card.Text>{packageDescription}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Region:</strong> {packageRegion}</ListGroup.Item>
        <ListGroup.Item><strong>Destination:</strong> {packageDestination}</ListGroup.Item>
        <ListGroup.Item><strong>Trip duration:</strong> {packageDays} days</ListGroup.Item>
        <ListGroup.Item><strong>Transport:</strong> {packageTransportation}</ListGroup.Item>
        <ListGroup.Item><strong>Price:</strong> {packagePrice} $</ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Button variant="primary">Book now</Button>
      </Card.Body>
    </Card>
  );
};

export default PackageInfo;


