import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageAuth = localStorage.getItem("authToken");
  const localStorageUser = localStorage.getItem("authUser");
  const [authToken, setAuthToken] = useState(
    localStorageAuth ? localStorageAuth : ""
  );
  const [authUser, setAuthUser] = useState(
    localStorageUser ? JSON.parse(localStorageUser) : null
  );

  return (
    <AuthContext.Provider
      value={{ authToken, setAuthToken, authUser, setAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
