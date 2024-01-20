import "./HomePage.css";
import { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";

import gamesService from "../../services/games.services";
import Loader from "../../components/Loader";
import GamesList from "./components/GamesList";
import { AuthContext } from "../../contexts/auth.context";
import TitleFilter from "./components/FilterInputs/TitleFilter";
import CategoryFilter from "./components/FilterInputs/CategoryFilter";
import VotesFilter from "./components/FilterInputs/VotesFilter";

const HomePage = () => {
  const [games, setGames] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    loadGames();
  }, [sortOrder, searchTerm, selectedCategory]);

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

        if (selectedCategory) {
          filteredGames = filteredGames.filter(
            (game) => game.category === selectedCategory
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
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
        <div className="d-flex">
          <TitleFilter
            searchTerm={searchTerm}
            handleSearchTermChange={handleSearchTermChange}
          />
          <VotesFilter handleSortOrder={handleSortOrder} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
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
