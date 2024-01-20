import React from "react";
import { Form } from "react-bootstrap";

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
    <Form.Group controlId="categoryFilter">
      <Form.Control
        as="select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value={""}>Filter by category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default CategoryFilter;
