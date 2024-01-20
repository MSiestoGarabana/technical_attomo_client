import {
  Form,
  Button,
  InputGroup,
  SplitButton,
  Dropdown,
} from "react-bootstrap";
import { useState } from "react";
import gamesService from "../../../../services/games.services";

const categories = [
  "ACTION",
  "ACTION-ADVENTURE",
  "PUZZLE",
  "ROLE-PLAYING",
  "SIMULATION",
  "STRATEGY",
  "SPORTS",
  "MMO",
];

const CreateGameForm = ({ closeModal, refreshGames }) => {
  const [gameData, setGameData] = useState({
    title: "",
    category: "",
    image: undefined,
  });
  console.log(gameData);
  const [loadingImage, setLoadingImage] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setGameData({ ...gameData, [name]: value });
  };

  const handleCategorySelect = (selectedCategory) => {
    setGameData({ ...gameData, category: selectedCategory });
  };
  const handleFileUpload = (e) => {
    setLoadingImage(true);

    const formData = new FormData();
    formData.append("gameImage", e.target.files[0]);

    uploadServices
      .uploadimage(formData)
      .then(({ data }) => {
        setGameData({ ...gameData, image: data.cloudinary_url });
        setLoadingImage(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingImage(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    gamesService
      .createGame(gameData)
      .then(() => {
        closeModal();
        refreshGames();
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
          {categories.map((cat) => (
            <Dropdown.Item key={cat} onClick={() => handleCategorySelect(cat)}>
              {cat}
            </Dropdown.Item>
          ))}
        </SplitButton>
      </InputGroup>

      <Form.Group className="mb-3 d-flex flex-column" controlId="image">
        <Form.Label>Upload an image</Form.Label>
        <Form.Control type="file" onChange={handleFileUpload} />
      </Form.Group>

      <div className="d-grid">
        <Button variant="dark" type="submit" disabled={loadingImage}>
          {loadingImage ? "Loading Image" : "CreateNewGame"}
        </Button>
      </div>
    </Form>
  );
};

export default CreateGameForm;
