import { useAuth } from "contexts";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { authToken } = useAuth();
  return authToken ? children : <Navigate to="/login" />;
}

export { PrivateRoute };
