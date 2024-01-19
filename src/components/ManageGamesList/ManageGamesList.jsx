import { Row, Col } from "react-bootstrap";
import GameCard from "../GameCard/GameCard";
import ManageGameCard from "../ManageGameCard/ManageGameCard";

const ManageGamesList = ({
  games,
  openEditGameModal,
  openDeleteGameModal,
  setSelectedGame,
}) => {
  return (
    <Row>
      {games.map((game) => {
        return (
          <Col md={3} key={game._id}>
            <ManageGameCard
              {...game}
              openEditGameModal={openEditGameModal}
              openDeleteGameModal={openDeleteGameModal}
              setSelectedGame={setSelectedGame}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default ManageGamesList;
