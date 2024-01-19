import React from "react";
import { useState, useContext, useEffect } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts/auth.context";
import gamesService from "../../services/games.services";

import GamesList from "../../components/GameList/GameList";
import Loader from "../../components/Loader/Loader";
import CreateGameForm from "../../components/CreateGameForm/CreateGameForm";

const ManagePage = () => {
  const [games, setGames] = useState();
  const [showCreateGameModal, setShowCreateGameModal] = useState(false);

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
        <h1>Create, update or delete games</h1>
        <Button variant="dark" size="lg" onClick={() => openCreateGameModal()}>
          Add game to list
        </Button>
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

export default ManagePage;
