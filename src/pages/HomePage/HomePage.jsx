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

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = () => {
    gamesService
      .getAllGames()
      .then(({ data }) => setGames(data))
      .catch((err) => console.log(err));
  };

  const { user: userData } = useContext(AuthContext);
  const { availableVotes } = userData || {};
  console.log(availableVotes);

  return (
    <>
      <Container>
        <div className="d-flex justify-content-around align-items-center">
          <h1>¡Vote your favorite games!</h1>
          {!userData ? (
            <h2>Log in to start voting</h2>
          ) : availableVotes <= 0 ? (
            <h2>You have used all of your votes</h2>
          ) : (
            <h2>You have {availableVotes} votes left</h2>
          )}
        </div>
        <hr />
        {!games ? (
          <Loader />
        ) : (
          <GamesList games={games} refreshGames={loadGames} />
        )}
      </Container>
    </>
  );
};

export default HomePage;
