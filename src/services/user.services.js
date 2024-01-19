import axios from "axios";

class UsersService {
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/users`,
    });
  }

  addVoteToUser(user_id) {
    return this.api.put(`/addVoteToUser/${user_id}`);
  }
  substractVoteToUser(user_id) {
    return this.api.put(`/substractVoteToUser/${user_id}`);
  }
}

const usersService = new UsersService();

export default usersService;
