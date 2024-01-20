import { createContext, useEffect, useState } from "react";
import authService from "../services/auth.services";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [user, setUser] = useState(undefined);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const updateVotes = (availableVotes) => {
    setUser({ ...user, availableVotes });
  };

  const authenticateUser = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      return;
    }

    await authService
      .verify(token)
      .then(({ data }) => setUser(data))
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, authenticateUser, storeToken, logout, updateVotes }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
