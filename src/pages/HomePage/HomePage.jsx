import React from "react";
import "./HomePage.css";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import gamesService from "../../services/games.services";
import GamesList from "../../components/GameList/GameList";

const HomePage = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = () => {
    gamesService
      .getAllGames()
      .then(({ data }) => setGames(data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>¡Vote your favorite games!</h1>
      <hr />
      {!games ? <Loader /> : <GamesList games={games} />}
    </Container>
  );
};

export default HomePage;
