import { useAuth } from "contexts";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { authToken } = useAuth();
  return authToken ? <Outlet /> : <Navigate to="/login" />;
}

export { PrivateRoute };
