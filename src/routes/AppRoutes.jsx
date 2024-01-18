import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CreateGamePage from "../pages/CreateGamePage/CreateGamePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import GameDetails from "../pages/GameDetails/GameDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:game_id" element={<GameDetails />} />
      <Route path="/createGame" element={<CreateGamePage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
