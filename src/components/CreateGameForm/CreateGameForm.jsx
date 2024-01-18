import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  SplitButton,
  Dropdown,
} from "react-bootstrap";
import { useState } from "react";
import gamesService from "./../../services/games.services";

const CreateGameForm = ({ closeModal, refreshGames }) => {
  const [gameData, setGameData] = useState({
    title: "",
    category: "",
    image: "",
  });

  console.log(gameData);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setGameData({ ...gameData, [name]: value });
  };

  const handleCategorySelect = (selectedCategory) => {
    setGameData({ ...gameData, category: selectedCategory });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    gamesService
      .createGame(gameData)
      .then(() => {
        closeModal();
        refreshCoasters();
      })
      .catch((ERR) => console.error(ERR));
  };

  const { title, category, image } = gameData;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={handleChange}
          name="title"
        />
      </Form.Group>
      <InputGroup className="mb-3">
        <SplitButton
          variant="outline-secondary"
          title={category || "Select Category"}
          id="segmented-button-dropdown-1"
        >
          {[
            "ACTION",
            "ACTION-ADVENTURE",
            "PUZZLE",
            "ROLE-PLAYING",
            "SIMULATION",
            "STRATEGY",
            "SPORTS",
            "MMO",
          ].map((cat) => (
            <Dropdown.Item key={cat} onClick={() => handleCategorySelect(cat)}>
              {cat}
            </Dropdown.Item>
          ))}
        </SplitButton>
      </InputGroup>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image (URL)</Form.Label>
        <Form.Control
          type="text"
          value={image}
          onChange={handleChange}
          name="image"
        />
      </Form.Group>

      <div className="d-grid">
        <Button variant="dark" type="submit">
          Create New Game
        </Button>
      </div>
    </Form>
  );
};

export default CreateGameForm;
