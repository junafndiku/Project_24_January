import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OurDestinations = ({ image, title, desc, region }) => {
  return (
    <Card 
      className="mx-auto my-3 destination-card" 
      style={{ maxWidth: '28rem', width: '100%', borderRadius: '10px' }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary" as={Link} to={`/readTours/${region}`}>
          Learn more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OurDestinations;
