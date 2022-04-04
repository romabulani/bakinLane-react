import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "contexts";

function PrivateRoute() {
  const { authToken } = useAuth();
  return authToken ? <Outlet /> : <Navigate to="/login" />;
}

export { PrivateRoute };
