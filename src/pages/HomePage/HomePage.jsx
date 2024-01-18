import React from "react";
import "./HomePage.css";
import { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";

import gamesService from "../../services/games.services";

import Loader from "../../components/Loader/Loader";
import GamesList from "../../components/GameList/GameList";
import CreateGameForm from "../../components/CreateGameForm/CreateGameForm";

const HomePage = () => {
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
        <h1>¡Vote your favorite games!</h1>
        <span onClick={openCreateGameModal}>+</span>
        <hr />
        {!games ? <Loader /> : <GamesList games={games} />}
      </Container>

      <Modal show={showCreateGameModal} onHide={closeCreateGameModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva montaña rusa</Modal.Title>
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
