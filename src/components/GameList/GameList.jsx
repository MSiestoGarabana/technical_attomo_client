import { Col, Row } from "react-bootstrap";
import GameCard from "../GameCard/GameCard";

const GamesList = ({ games, refreshGames }) => {
  return (
    <Row>
      {games.map((game) => {
        return (
          <Col md={4} key={game._id}>
            <GameCard {...game} refreshGames={refreshGames} />
          </Col>
        );
      })}
    </Row>
  );
};

export default GamesList;
