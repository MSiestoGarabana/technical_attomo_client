import { createContext, useState } from "react";
import authService from "../services/auth.services";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [user, setUser] = useState(undefined);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const token = localStorage.getItem("authToken");

    authService
      .verify(token)
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, authenticateUser, storeToken, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
