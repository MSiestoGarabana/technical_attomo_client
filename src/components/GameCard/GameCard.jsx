import "./GameCard.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import gamesService from "../../services/games.services";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import MinusIcon from "../../Icons/MinusIcon";
import AddIcon from "../../Icons/AddIcon";

const GameCard = ({
  title,
  image,
  _id,
  votesReceived,
  votedBy,
  refreshGames,
}) => {
  const { user: userData } = useContext(AuthContext);
  const { _id: user_id } = userData || {};

  const hasVoted = () => {
    return votedBy && votedBy.includes(user_id);
  };

  const addVote = () => {
    gamesService
      .addVote(_id, userData)
      .then(() => {
        refreshGames();
      })
      .catch((ERR) => console.error(ERR));
  };
  const deductVote = () => {
    gamesService
      .deductVote(_id, userData)
      .then(() => {
        refreshGames();
      })
      .catch((ERR) => console.error(ERR));
  };

  const isAddDisabled = hasVoted();
  const isMinusDisabled = !hasVoted();

  return (
    <Card className="GameCard mb-4">
      <Link to={`/details/${_id}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <hr />
        </Card.Body>
      </Link>
      <div className="d-flex justify-content-around align-items-center p-4">
        <Button
          variant="danger"
          onClick={deductVote}
          disabled={isMinusDisabled}
        >
          <MinusIcon />
        </Button>
        <Card.Subtitle>Votes Received: {votesReceived}</Card.Subtitle>
        <Button variant="primary" onClick={addVote} disabled={isAddDisabled}>
          <AddIcon />
        </Button>
      </div>
    </Card>
  );
};

export default GameCard;
