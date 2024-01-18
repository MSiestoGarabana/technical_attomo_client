import "./GameCard.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GameCard = ({ title, image, _id }) => {
  return (
    <Card className="GameCard mb-4">
      <Link to={`/detalles/${_id}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <hr />
        </Card.Body>
      </Link>
    </Card>
  );
};

export default GameCard;
