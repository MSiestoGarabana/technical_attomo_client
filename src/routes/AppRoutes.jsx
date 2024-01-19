import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import GameDetails from "../pages/GameDetails/GameDetails";
import ManagePage from "../pages/ManagePage/ManagePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:game_id" element={<GameDetails />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/manage" element={<ManagePage />} />
    </Routes>
  );
};

export default AppRoutes;
