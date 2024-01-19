import "./HomePage.css";
import { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

import gamesService from "../../services/games.services";

import Loader from "../../components/Loader/Loader";
import GamesList from "../../components/GameList/GameList";

import { AuthContext } from "../../contexts/auth.context";

const HomePage = () => {
  const [games, setGames] = useState();

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

  return (
    <>
      <Container>
        <h1>¡Vote your favorite games!</h1>
        <hr />
        {!games ? <Loader /> : <GamesList games={games} />}
      </Container>
    </>
  );
};

export default HomePage;
