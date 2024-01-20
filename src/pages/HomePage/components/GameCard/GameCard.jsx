import "./GameCard.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import gamesService from "../../../../services/games.services";
import usersService from "../../../../services/user.services";

import { useContext } from "react";
import { AuthContext } from "../../../../contexts/auth.context";

import MinusIcon from "../../../../Icons/MinusIcon";
import AddIcon from "../../../../Icons/AddIcon";

const GameCard = ({
  title,
  image,
  _id,
  votesReceived,
  votedBy,
  refreshGames,
}) => {
  const { user: userData, updateVotes } = useContext(AuthContext);
  const { _id: user_id, availableVotes } = userData || {};

  const hasVoted = () => {
    return votedBy && votedBy.includes(user_id);
  };

  const deductVote = async () => {
    try {
      const [{ data }] = await Promise.all([
        usersService.addVoteToUser(user_id),
        gamesService.deductVote(_id, userData),
      ]);
      updateVotes(data.availableVotes);
    } catch (e) {
      console.log(e);
    }

    refreshGames();
  };
  const addVote = async () => {
    try {
      const [{ data }] = await Promise.all([
        usersService.substractVoteToUser(user_id),
        gamesService.addVote(_id, userData),
      ]);
      updateVotes(data.availableVotes);
    } catch (e) {
      console.log(e);
    }

    refreshGames();
  };

  const isAddDisabled = hasVoted() || availableVotes <= 0;
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
        {userData && (
          <Button
            variant="danger"
            onClick={deductVote}
            disabled={isMinusDisabled}
          >
            <MinusIcon />
          </Button>
        )}

        <Card.Subtitle>Votes Received: {votesReceived}</Card.Subtitle>
        {userData && (
          <Button variant="primary" onClick={addVote} disabled={isAddDisabled}>
            <AddIcon />
          </Button>
        )}
      </div>
    </Card>
  );
};

export default GameCard;
