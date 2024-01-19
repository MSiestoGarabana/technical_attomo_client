import React, { useContext } from "react";
import "./HomePage.css";
import { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import gamesService from "../../services/games.services";

import Loader from "../../components/Loader/Loader";
import GamesList from "../../components/GameList/GameList";
import CreateGameForm from "../../components/CreateGameForm/CreateGameForm";
import { AuthContext } from "../../contexts/auth.context";
const HomePage = () => {
  const [games, setGames] = useState();
  const [showCreateGameModal, setShowCreateGameModal] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = () => {
    gamesService
      .getAllGames()
      .then(({ data }) => setGames(data))
      .catch((err) => console.log(err));
  };

  const openCreateGameModal = () => setShowCreateGameModal(true);
  const closeCreateGameModal = () => setShowCreateGameModal(false);

  return (
    <>
      <Container>
        <h1>¡Vote your favorite games!</h1>
        {user && (
          <Button
            variant="dark"
            size="lg"
            onClick={() => openCreateGameModal()}
          >
            Add game to list
          </Button>
        )}

        <hr />
        {!games ? <Loader /> : <GamesList games={games} />}
      </Container>

      <Modal show={showCreateGameModal} onHide={closeCreateGameModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateGameForm
            closeModal={closeCreateGameModal}
            refreshGames={loadGames}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HomePage;
