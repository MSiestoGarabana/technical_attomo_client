import React from "react";
import { Card, Button } from "react-bootstrap";
import EditIcon from "../../Icons/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon";

const ManageGameCard = ({
  title,
  category,
  _id,
  setSelectedGame,
  openEditGameModal,
  openDeleteGameModal,
}) => {
  return (
    <Card className="GameCard mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Button
            variant="warning"
            onClick={() => {
              openEditGameModal();
              setSelectedGame(_id);
            }}
          >
            <EditIcon />
          </Button>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <Card.Subtitle>{category}</Card.Subtitle>
          <Button
            variant="danger"
            onClick={() => {
              openDeleteGameModal();
              setSelectedGame(_id);
            }}
          >
            <DeleteIcon />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ManageGameCard;
