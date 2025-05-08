import React from "react";
import { Card } from "react-bootstrap";

const cardStyle = {
  width: "18rem",
  margin: "1rem",
  border: "2px solid #ddd",
  boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
};

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey #:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Achraf_Hakimi_2024.jpg/640px-Achraf_Hakimi_2024.jpg",
};

export default Player;
