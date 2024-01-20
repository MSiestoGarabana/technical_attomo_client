import React from "react";
import { Dropdown } from "react-bootstrap";

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

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Dropdown className={"m-4"}>
      <Dropdown.Toggle variant="outline-secondary" id="categoryDropdown">
        {selectedCategory ? selectedCategory : "Filter by category"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item key="" onClick={() => setSelectedCategory("")}>
          Clear filter
        </Dropdown.Item>
        {categories.map((category) => (
          <Dropdown.Item
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryFilter;
