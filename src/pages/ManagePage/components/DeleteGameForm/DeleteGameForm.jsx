import React from "react";
import { Button } from "react-bootstrap";
import gamesService from "../../../../services/games.services";

const DeleteGameForm = ({ closeModal, refreshGames, selectedGame }) => {
  const handleClick = () => {
    gamesService
      .deleteGame(selectedGame)
      .then(() => {
        closeModal();
        refreshGames();
      })
      .catch((ERR) => console.error(ERR));
  };
  return (
    <div>
      <Button variant="danger" onClick={() => handleClick()}>
        Delete Game
      </Button>
    </div>
  );
};

export default DeleteGameForm;
