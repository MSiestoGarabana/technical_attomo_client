import React from "react";
import { Form } from "react-bootstrap";

const TitleFilter = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <Form.Group controlId="searchTerm" className={"m-4"}>
      <Form.Control
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </Form.Group>
  );
};

export default TitleFilter;
