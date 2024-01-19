import React from "react";
import { useState, useContext, useEffect } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts/auth.context";
import gamesService from "../../services/games.services";
import ManageGamesList from "../../components/ManageGamesList/ManageGamesList";
import Loader from "../../components/Loader/Loader";
import CreateGameForm from "../../components/CreateGameForm/CreateGameForm";
import EditGameForm from "../../components/EditGameForm/EditGameForm";
import DeleteGameForm from "../../components/DeleteGameForm/DeleteGameForm";

const ManagePage = () => {
  const [games, setGames] = useState();
  const [selectedGame, setSelectedGame] = useState(undefined);
  const [showCreateGameModal, setShowCreateGameModal] = useState(false);
  const [showEditGameModal, setShowEditGameModal] = useState(false);
  const [showDeleteGameModal, setShowDeleteGameModal] = useState(false);

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

  const openEditGameModal = () => setShowEditGameModal(true);
  const closeEditGameModal = () => setShowEditGameModal(false);

  const openDeleteGameModal = () => setShowDeleteGameModal(true);
  const closeDeleteGameModal = () => setShowDeleteGameModal(false);

  return (
    <>
      <Container>
        <h1>Create, update or delete games</h1>
        <Button variant="dark" size="lg" onClick={() => openCreateGameModal()}>
          Add game to list
        </Button>
        <hr />
        {!games ? (
          <Loader />
        ) : (
          <ManageGamesList
            games={games}
            openEditGameModal={openEditGameModal}
            openDeleteGameModal={openDeleteGameModal}
            setSelectedGame={setSelectedGame}
          />
        )}
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
      <Modal show={showEditGameModal} onHide={closeEditGameModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditGameForm
            closeModal={closeEditGameModal}
            refreshGames={loadGames}
            selectedGame={selectedGame}
          />
        </Modal.Body>
      </Modal>
      <Modal show={showDeleteGameModal} onHide={closeDeleteGameModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteGameForm
            closeModal={closeDeleteGameModal}
            refreshGames={loadGames}
            selectedGame={selectedGame}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ManagePage;
