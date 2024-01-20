import "./HomePage.css";
import { useState, useEffect, useContext } from "react";
import { Container, Dropdown } from "react-bootstrap";

import gamesService from "../../services/games.services";
import Loader from "../../components/Loader/Loader";
import GamesList from "../../components/GameList/GameList";
import { AuthContext } from "../../contexts/auth.context";
import { Form } from "react-bootstrap";

const HomePage = () => {
  const [games, setGames] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(null);

  console.log(searchTerm);

  useEffect(() => {
    loadGames();
  }, [sortOrder, searchTerm]);

  const loadGames = () => {
    gamesService
      .getAllGames()
      .then(({ data }) => {
        let filteredGames = data;

        if (searchTerm) {
          const searchTermLower = searchTerm.toLowerCase();
          filteredGames = data.filter((game) =>
            game.title.toLowerCase().includes(searchTermLower)
          );
        }

        const sortedGames = filteredGames.slice();

        if (sortOrder === "asc") {
          sortedGames.sort((a, b) => a.votesReceived - b.votesReceived);
        } else if (sortOrder === "desc") {
          sortedGames.sort((a, b) => b.votesReceived - a.votesReceived);
        }

        setGames(sortedGames);
      })
      .catch((err) => console.log(err));
  };

  const { user: userData } = useContext(AuthContext);
  const { availableVotes } = userData || {};

  const handleSortOrder = (order) => {
    setSortOrder(order);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value); // Manejar el cambio en el término de búsqueda mientras el usuario escribe
  };

  const renderDropdownButton = () => (
    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
      Sort by Votes Received
    </Dropdown.Toggle>
  );

  const renderDropdownItems = () => (
    <>
      <Dropdown.Item onClick={() => handleSortOrder("asc")}>
        Less votes received first
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleSortOrder("desc")}>
        More votes received first
      </Dropdown.Item>
    </>
  );

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
        <Dropdown>
          {renderDropdownButton()}
          <Dropdown.Menu>{renderDropdownItems()}</Dropdown.Menu>
        </Dropdown>
        <Form.Group controlId="searchTerm">
          <Form.Control
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </Form.Group>
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
