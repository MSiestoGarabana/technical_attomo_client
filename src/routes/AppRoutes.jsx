import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CreateGamePage from "../pages/CreateGamePage/CreateGamePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/createGame" element={<CreateGamePage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
