import React from "react";
import { Container } from "react-bootstrap";
import CreateGameForm from "../../components/CreateGameForm/CreateGameForm";

const CreateGamePage = () => {
  return (
    <Container>
      <h1>Upload New Game to Data Base</h1>

      <hr />

      <CreateGameForm />
    </Container>
  );
};

export default CreateGamePage;
