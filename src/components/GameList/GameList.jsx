import { Col, Row } from "react-bootstrap";
import GameCard from "../GameCard/GameCard";

const GamesList = ({ games }) => {
  return (
    <Row>
      {games.map((coaster) => {
        return (
          <Col md={3} key={coaster._id}>
            <GameCard {...coaster} />
          </Col>
        );
      })}
    </Row>
  );
};

export default GamesList;
