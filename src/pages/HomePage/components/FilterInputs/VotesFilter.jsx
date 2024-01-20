import React from "react";
import { Dropdown } from "react-bootstrap";

const VotesFilter = ({ handleSortOrder }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        Sort by Votes Received
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSortOrder("asc")}>
          Less votes received first
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSortOrder("desc")}>
          More votes received first
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default VotesFilter;
