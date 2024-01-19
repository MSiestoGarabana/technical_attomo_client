import axios from "axios";

class GamesService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/games`,
    });
  }
  getAllGames() {
    return this.api.get("/getAllGames");
  }
  getGameById(game_id) {
    return this.api.get(`/getGameById/${game_id}`);
  }
  createGame(gameData) {
    return this.api.post("/createGame", gameData);
  }
  deleteGame(game_id) {
    return this.api.delete(`/deleteGame/${game_id}`);
  }
}

const gamesService = new GamesService();

export default gamesService;
