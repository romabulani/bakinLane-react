import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const localStorageAuth = localStorage.getItem("authToken");
    if (localStorageAuth) {
      setAuthToken(localStorageAuth);
      setAuthUser(localStorage.getItem("authUser"));
    }
  }, []);

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
