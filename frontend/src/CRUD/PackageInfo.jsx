import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/reservation", {
      state: { packageName, packageRegion },
    });
  };

  return (
    <Card
      style={{
        width: "100%",
        maxWidth: "350px",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      }}
      className="package-card"
    >
      <div style={{ position: "relative" }}>
        <img
          src={`http://localhost:5000/images/${packageImage}`}
          alt={packageName}
          style={{ width: "100%", height: "220px", objectFit: "cover" }}
        />
        <Badge
          bg="info"
          style={{ position: "absolute", top: "10px", left: "10px", fontSize: "0.85rem" }}
        >
          {packageRegion}
        </Badge>
        <Badge
          bg="secondary"
          style={{ position: "absolute", top: "10px", right: "10px", fontSize: "0.85rem" }}
        >
          {packageDestination}
        </Badge>
      </div>

      <Card.Body>
        <Card.Title style={{ fontWeight: "700", fontSize: "1.2rem" }}>
          {packageName}
        </Card.Title>
        <Card.Text style={{ fontSize: "0.95rem", color: "#555" }}>
          {packageDescription}
        </Card.Text>

        <div className="d-flex justify-content-between mb-3" style={{fontWeight:"bold"}}>
          <small>
            <strong></strong> {packageDays} days
          </small>
          <small>
            <strong>Transport:</strong> {packageTransportation}
          </small>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <h5 style={{ fontWeight: "bold", color: "#0d6efd" }}>{packagePrice} $</h5>
          <Button variant="primary" onClick={handleBooking}>
            Book Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PackageInfo;
