import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import gamesService from "../../services/games.services";

const GameDetails = () => {
  const [game, setGame] = useState();
  console.log(game);
  const { game_id } = useParams();

  useEffect(() => {
    gamesService
      .getGameById(game_id)
      .then(({ data }) => setGame(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      {!game ? (
        <Loader />
      ) : (
        <>
          <h1>Detalles de {game.title}</h1>
          <hr />

          <Row>
            <Col md={{ span: 6 }}>
              <h3>Category</h3>
              <p>{game.category}</p>
              <hr />
              <h3>Rating</h3>
              <p>{game.votesReceived}</p>
              <hr />

              <Link to="/">
                <Button as="div" variant="dark">
                  Volver a la galería
                </Button>
              </Link>
            </Col>

            <Col md={{ span: 4 }}>
              <img src={game.image} style={{ width: "100%" }} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default GameDetails;
